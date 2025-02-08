import fs from "node:fs/promises";

import { readMigrationFiles } from "drizzle-orm/migrator";

const file = "./src/client-db/migrations/export.json";

async function main() {
  const content = JSON.stringify(
    readMigrationFiles({
      migrationsFolder: "./src/client-db/migrations",
    }),
    null,
    0,
  );

  // Replace `CREATE TABLE` with `CREATE TABLE IF NOT EXISTS`
  const updatedContent = content.replace(
    /CREATE TABLE/g,
    "CREATE TABLE IF NOT EXISTS",
  );

  await fs.writeFile(`${file}`, updatedContent, {
    flag: "w",
  });
}

if (require.main === module) {
  main();
}
