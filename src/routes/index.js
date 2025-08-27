import welcome from "./welcome.js";
import myths from "./myths.js";
import meta from "./_meta.js";
import languages from "./languages.js";

export default async function routes(fastify) {
  fastify.register(welcome, { prefix: "/api" });
  fastify.register(myths, { prefix: "/api/myths" });
  fastify.register(meta, { prefix: "/api/myths/meta" });
  fastify.register(languages, { prefix: "/api/languages" });
}
