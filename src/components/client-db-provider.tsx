// ClientDBProvider.tsx
"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import { ClientDB, initClientDB } from "@/client-db";
import { setClientDB } from "@/lib/utils/clientDBStore";

interface ClientDBContextType {
  db: ClientDB;
}

export const ClientDBContext = createContext<ClientDBContextType | undefined>(
  undefined,
);

interface ClientDBProviderProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientDBProvider({
  children,
  fallback = <div>Loading...</div>,
}: ClientDBProviderProps) {
  const [db, setDb] = useState<ClientDB | null>(null);

  useEffect(() => {
    // const initializeDB = async () => {
    //   try {
    //     const dbInstance = await initClientDB();
    //     setDb(dbInstance);
    //     // Set the global variable so actions can access the initialized DB.
    //     setClientDB(dbInstance);
    //   } catch (error) {
    //     console.error("Error initializing ClientDB:", error);
    //     // Optionally handle errors (set error state and display an error message)
    //   }
    // };

    // initializeDB();

    const dbInstance = initClientDB();

    setDb(dbInstance);
    setClientDB(dbInstance);
  }, []);

  if (!db) {
    return <>{fallback}</>;
  }

  return (
    <ClientDBContext.Provider value={{ db }}>
      {children}
    </ClientDBContext.Provider>
  );
}
