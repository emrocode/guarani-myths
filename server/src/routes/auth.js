import oauthPlugin from "@fastify/oauth2";
import unkeyClient from "../lib/unkey.js";
import axios from "axios";

/**
 * Auth endpoint.\
 * Use GitHub oauth to generate a key.
 */
export default async function auth(fastify) {
  const users = fastify.mongo.db.collection("users");

  await users.createIndex({ githubId: 1 }, { name: "_gh_", unique: true });

  await fastify.register(oauthPlugin, {
    name: "githubOAuth2",
    credentials: {
      client: {
        id: fastify.config.GITHUB_CLIENT_ID,
        secret: fastify.config.GITHUB_CLIENT_SECRET,
      },
      auth: oauthPlugin.GITHUB_CONFIGURATION,
    },
    startRedirectPath: "/github",
    callbackUri: `${fastify.config.BASE_URL}/api/auth/github/callback`,
  });

  fastify.get("/github/callback", async (req, reply) => {
    try {
      const { token } =
        await fastify.githubOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);

      const { data: gh } = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
          "User-Agent": "Guarani-Myths (https://guarani.emrocode.xyz)",
        },
      });

      const result = await users.findOneAndUpdate(
        { githubId: gh.id },
        {
          $set: {
            username: gh.login,
            name: gh.name,
            email: gh.email,
            avatarUrl: gh.avatar_url,
            lastLogin: new Date(),
          },
          $setOnInsert: { createdAt: new Date() },
        },
        { upsert: true, returnDocument: "after" },
      );

      const user = result.value || result;

      if (user.keyId) {
        return reply.redirect(
          `${fastify.config.BASE_URL}/?status=existing_key`,
        );
      }

      const key = await unkeyClient.keys.createKey({
        apiId: fastify.config.UNKEY_API_ID,
        meta: {
          plan: "basic",
          ownerId: user._id.toString(),
          customerName: user.name,
        },
      });

      if (key.data === undefined || key.error) {
        throw new Error("Error generating API key");
      }

      await users.updateOne(
        { _id: user._id },
        { $set: { keyId: key.data.keyId } },
      );

      reply.redirect(
        `${fastify.config.BASE_URL}/?status=success&key=${key.data.key}`,
      );
    } catch (err) {
      req.log.error(err);
      reply.code(500).send({ error: "Authentication failed" });
    }
  });
}
