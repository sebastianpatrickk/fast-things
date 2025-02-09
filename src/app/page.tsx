"use client";

import { useQuery, useZero } from "@rocicorp/zero/react";
import { nanoid } from "nanoid";
import type { Schema } from "../db/schema";

export default function HomePage() {
  const z = useZero<Schema>();
  const [users] = useQuery(z.query.user);

  if (!users) {
    return null;
  }

  console.log(users);

  return (
    <div>
      <h1>Todos: {users.length}</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() =>
          z.mutate.user.insert({
            id: nanoid(),
            name: "New User",
            partner: true,
          })
        }
      >
        Add User
      </button>
    </div>
  );
}
