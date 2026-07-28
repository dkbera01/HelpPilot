import type { FastifyInstance } from "fastify";

export function registerHealthRoutes(app: FastifyInstance) {
  app.get("/health", async () => {
    return {
      status: "ok",
      service: "HelpPilot API",
      version: "0.0.1",
    };
  });
}
