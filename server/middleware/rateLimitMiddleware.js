import unkeyClient from "../lib/unkey.js";

/**
 * Rate Limit Middleware.\
 * Check and enforce rate limits for keyId identifier.
 */
export const rateLimitMiddleware = async (req, reply) => {
  try {
    if (req.method !== "GET") return;

    const keyId = req.apiKey?.keyId;
    const isAuth = !!keyId;

    const identifier = isAuth ? keyId : req.ip;
    const limit = isAuth ? 100 : 10;
    const duration = isAuth ? 60000 : 300000;

    const { data: ratelimit, error } = await unkeyClient.ratelimit.limit({
      namespace: "myths.requests",
      cost: 1,
      duration,
      identifier,
      limit,
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
