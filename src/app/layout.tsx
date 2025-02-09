"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Zero } from "@rocicorp/zero";
import { ZeroProvider } from "@rocicorp/zero/react";
import { schema } from "../db/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // In a real app, you might initialize this inside of useMemo
  // and use a real auth token
  const z = new Zero({
    userID: "your-user-id",
    auth: "",
    server: "http://localhost:4848",
    schema,
    kvStore: "idb", // or "idb" for IndexedDB persistence
  });

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ZeroProvider zero={z}>{children}</ZeroProvider>
      </body>
    </html>
  );
}
