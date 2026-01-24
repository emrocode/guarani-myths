import unkeyClient from "../lib/unkey.js";

/**
 * Rate Limit Middleware.\
 * Check and enforce rate limits for keyId identifier.
 */
export const rateLimitMiddleware = async (req, reply) => {
  try {
    if (req.method !== "GET") return;

    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return reply.status(400).send({ error: "API key is required" });
    }

    const apiKey = authorizationHeader.replace("Bearer ", "");
    const keysResult = await unkeyClient.keys.verifyKey({
      key: apiKey,
    });

    if (keysResult.data.valid) {
      const rateLimitResult = await unkeyClient.ratelimit.limit({
        namespace: "myths.requests",
        cost: 1,
        duration: 86400,
        identifier: keysResult.data.keyId,
        limit: 10,
      });

      if (rateLimitResult.error || !rateLimitResult.data.success) {
        return reply
          .status(429)
          .send({ error: "Rate limit exceeded. Try again tomorrow." });
      }

      return;
    }

    return;
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({ error: "Internal Server Error" });
  }
};
