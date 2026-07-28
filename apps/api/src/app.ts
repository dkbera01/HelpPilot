import Fastify from "fastify";
import { registerHealthRoutes } from "./routes/health.route.js";

export function buildApp() {
  const app = Fastify();

  registerHealthRoutes(app);
  
  return app;
}