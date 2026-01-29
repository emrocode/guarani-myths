import { TTL } from "../_constants/index.js";

export async function handleRequest(
  reply,
  fetchData,
  { disableCache = false },
) {
  try {
    const result = await fetchData();

    if (!result) {
      return reply.code(404).send({
        statusCode: 404,
        code: "MYTH_NOT_FOUND",
        error: "Not Found",
        message: "The requested myth does not exist",
      });
    }

    if (!disableCache) {
      reply.headers({
        "Cache-Control": `public, s-maxage=${TTL}, stale-while-revalidate=${TTL * 2}`,
      });
    }

    return reply.code(200).send(result);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      statusCode: 500,
      code: "MYTHS_FETCH_ERROR",
      error: "Internal Server Error",
      message: "Error fetching myths",
    });
  }
}
