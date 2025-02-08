import { ClientDB } from "@/client-db";

let clientDBInstance: ClientDB | null = null;

export function setClientDB(db: ClientDB): void {
  clientDBInstance = db;
}

export function getClientDB(): ClientDB {
  if (!clientDBInstance) {
    throw new Error(
      "ClientDB is not initialized. Make sure your app is wrapped in ClientDBProvider " +
        "and that the DB has been initialized before using it in actions.",
    );
  }
  return clientDBInstance;
}
