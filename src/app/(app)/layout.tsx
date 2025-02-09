"use client";

import { ZeroProvider } from "@/components/zero-provider";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 flex gap-2">
        <Link href="/tasks">Tasks</Link>
        <Link href="/users">Users</Link>
      </div>
      <ZeroProvider>{children}</ZeroProvider>
    </>
  );
}
