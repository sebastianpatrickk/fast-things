import { PGliteWorker } from "@electric-sql/pglite/worker";
import { PgDialect } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/pglite";
import { PGlite } from "@electric-sql/pglite";
import migrations from "./migrations/export.json"; // WHERE WE USE export.json
import * as schema from "./schema";
import { eq } from "drizzle-orm";

const dbName = "fast-things";

export function initClientDB() {
  const pg = new PGlite(`idb://${dbName}`);
  const _db = drizzle({ client: pg });

  // let isLocalDBSchemaSynced = false;
  // if (!isLocalDBSchemaSynced) {
  //   try {
  //     await new PgDialect().migrate(migrations, _db._.session as any, dbName);
  //     isLocalDBSchemaSynced = true;
  //     console.info(`✅ Local database ready`);
  //   } catch (error) {
  //     console.error(`❌ Local database failed to sync: ${error}`);
  //   }
  // }

  // const db = Object.assign(_db, {
  //   schema,
  // });

  return _db;
}

export type ClientDB = Awaited<ReturnType<typeof initClientDB>>;
// export type ClientDB = Awaited<ReturnType<typeof initClientDB>>;
