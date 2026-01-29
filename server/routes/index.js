import welcome from "./welcome.js";
import myths from "./myths.js";
import meta from "./_meta.js";
import languages from "./languages.js";
import auth from "./auth.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { rateLimitMiddleware } from "../middleware/rateLimitMiddleware.js";

export default async function routes(app) {
  app.register(welcome, { prefix: "/api" });

  app.register(
    async (app) => {
      app.addHook("preHandler", authMiddleware);
      app.addHook("preHandler", rateLimitMiddleware);

      app.register(myths, { prefix: "/myths" });
      app.register(meta, { prefix: "/myths/meta" });
      app.register(languages, { prefix: "/languages" });
    },
    { prefix: "/api" },
  );

  app.register(auth, { prefix: "/api/auth" });
}
