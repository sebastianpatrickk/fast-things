import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/client-db/schema.ts",
  out: "./src/client-db/migrations",
  driver: "pglite",
  dbCredentials: {
    url: "idb://fast-things",
  },
});
