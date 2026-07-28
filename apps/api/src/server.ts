import { buildApp } from "./app.js";

const app = buildApp();

try {
  const address = await app.listen({
    port: 3000,
  });

console.log(`Server listening at ${address}`);
} catch (err) {
  console.error(err);
  process.exit(1);
}