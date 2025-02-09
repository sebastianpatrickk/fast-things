"use client";

import { useZero } from "@/components/zero-provider";
import { nanoid } from "nanoid";
import { useState } from "react";

export function CreateTask() {
  const z = useZero();
  const [name, setName] = useState("");
  return (
    <div className="grid grid-cols-1 gap-2">
      <label htmlFor="task">Task:</label>
      <input id="task" value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() =>
          z.mutate.task.insert({
            id: nanoid(),
            name,
            status: "not-started",
            createdById: z.userID,
            assignedToId: z.userID,
          })
        }
      >
        Create
      </button>
    </div>
  );
}
