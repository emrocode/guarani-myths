"use strict";

import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import fastifyHelmet from "@fastify/helmet";
import fastifyMongodb from "@fastify/mongodb";
import routes from "./routes/index.js";
import { envSchema } from "./schemas/env.js";

const app = Fastify({ logger: true });

const setup = async () => {
  await app.register(fastifyEnv, {
    dotenv: true,
    schema: envSchema,
  });

  await app.register(fastifyMongodb, {
    forceClose: true,
    url: app.config.MONGODB_URL,
  });

  try {
    await app.mongo.client.db().command({ ping: 1 });
    app.log.info("MongoDB connected!");
  } catch (err) {
    app.log.error(err, "MongoDB connection failed!");
    process.exit(1);
  }

  app.register(fastifyCors, { origin: "*", methods: ["GET"] });
  app.register(fastifyHelmet, { global: true });
  app.register(routes);

  await app.ready();
};

const setupPromise = setup();

export default async (req, res) => {
  await setupPromise;
  app.server.emit("request", req, res);
};
