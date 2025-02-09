"use client";

import { type Schema, schema } from "@/db/schema";
import { Zero } from "@rocicorp/zero";
import {
  ZeroProvider as ZeroClientProvider,
  useZero as useZeroClient,
} from "@rocicorp/zero/react";

const z = new Zero({
  userID: "u001",
  // auth: () => encodedJWT,
  server: process.env.NEXT_PUBLIC_SERVER,
  schema,
  kvStore: "mem", // 'idb'
});

export function ZeroProvider({ children }: { children: React.ReactNode }) {
  return <ZeroClientProvider zero={z}>{children}</ZeroClientProvider>;
}

export const useZero = useZeroClient<Schema>;
