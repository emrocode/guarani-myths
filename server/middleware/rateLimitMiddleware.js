import unkeyClient from "../lib/unkey.js";

/**
 * Rate Limit Middleware.\
 * Check and enforce rate limits for keyId identifier.
 */
export const rateLimitMiddleware = async (req, reply) => {
  try {
    if (req.method !== "GET") return;

    const keyId = req.apiKey?.keyId;

    if (!keyId) {
      return reply.code(401).send({ error: "Unauthorized: Invalid API Key" });
    }

    const { data: ratelimit, error } = await unkeyClient.ratelimit.limit({
      namespace: "myths.requests",
      cost: 1,
      duration: 86400000,
      identifier: keyId,
      limit: 10,
    });

    if (error || !ratelimit.success) {
      const resetTime = ratelimit.reset ?? Date.now();
      const waitMs = resetTime - Date.now();
      const minTotal = Math.ceil(waitMs / (1000 * 60));
      const h = Math.floor(minTotal / 60);
      const m = minTotal % 60;

      const message = h > 0 ? `${h}h ${m}m` : `${m}m`;

      return reply
        .code(429)
        .header(
          "Cache-Control",
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        )
        .send({
          error: "RATE_LIMIT_EXCEEDED",
          message: `Try again in ${message}`,
        });
    }

    reply.header("X-RateLimit-Remaining", ratelimit.remaining);
    reply.header("Cache-Control", "no-store, max-age=0");
  } catch (error) {
    req.log.error(error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};
