import unkeyClient from "../lib/unkey.js";

/**
 * Auth Middleware.\
 * Verify an API key's validity for request authentication.
 */
export const authMiddleware = async (req, reply) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return reply.code(401).send({ error: "Unauthorized: No API Key provided" });
  }

  const apiKey = authorizationHeader.replace("Bearer ", "");

  try {
    const result = await unkeyClient.keys.verifyKey({ key: apiKey });

    if (!result.data.valid) {
      return reply.code(401).send({ error: "Unauthorized: Invalid API Key" });
    }

    req.apiKey = result.data;
  } catch (error) {
    req.log.error(error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};
