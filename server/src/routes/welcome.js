/**
 * Welcome endpoint.\
 * Show available resources.
 */
export default async function welcome(fastify) {
  fastify.get("/", async (_, reply) => {
    reply.code(200).send({
      languages: "/api/languages",
      myths: "/api/myths?lang={lang}",
      mythById: "/api/myths/:id?lang={lang}",
    });
  });
}
