"use client";

import { useQuery } from "@rocicorp/zero/react";
import Link from "next/link";
import { useZero } from "./zero-provider";

export function UserList() {
  const z = useZero();
  const [users] = useQuery(z.query.user);
  return (
    <div className="">
      <ul className="list-inside list-disc">
        {users.map((u) => (
          <li key={u.id}>
            <Link href={`/users/${u.id}`} className="underline">
              {u.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
