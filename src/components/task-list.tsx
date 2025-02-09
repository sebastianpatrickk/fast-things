"use client";

import type { Task, User } from "@/db/schema";
import { useQuery } from "@rocicorp/zero/react";
import Link from "next/link";
import { useZero } from "./zero-provider";

export function TaskList() {
  return (
    <>
      <div className="text-right">
        <Link href="/tasks/new" className="underline">
          New Task &rarr;
        </Link>
      </div>
      <div className="m-2 grid grid-cols-3 gap-4">
        <TaskColumn name="Not Started" value="not-started" />
        <TaskColumn name="In Progress" value="in-progress" />
        <TaskColumn name="Done" value="done" />
      </div>
    </>
  );
}

function TaskColumn({ name, value }: { name: string; value: string }) {
  const z = useZero();
  const [tasks] = useQuery(
    z.query.task
      .related("assignedTo")
      .related("createdBy")
      .where("status", "=", value),
  );
  return (
    <div className="space-y-2 rounded-lg border px-2">
      <h2>{name}</h2>
      <div className="grid grid-cols-1 gap-2">
        {tasks.map((t) => (
          <TaskCard
            key={t.id}
            task={t}
            createdBy={t.createdBy}
            assignedTo={t.assignedTo}
          />
        ))}
      </div>
    </div>
  );
}

function TaskCard({
  task,
  createdBy,
  assignedTo,
}: {
  task: Task;
  createdBy?: User;
  assignedTo?: User;
}) {
  const z = useZero();
  return (
    <div className="rounded border">
      <div>
        <Link href={`/tasks/${task.id}`} className="underline">
          {task.name}
        </Link>
      </div>
      <div>
        <span>Created By: </span>
        <Link href={`/users/${task.createdById}`} className="underline">
          {createdBy?.name}
        </Link>
      </div>
      <div>
        <span>Assigned To: </span>
        <Link href={`/users/${task.assignedToId}`} className="underline">
          {assignedTo?.name}
        </Link>
      </div>
      <div className="flex gap-2">
        <button
          className="disabled:text-gray-500"
          disabled={task.status === "not-started"}
          onClick={() =>
            z.mutate.task.update({
              id: task.id,
              status:
                task.status === "in-progress" ? "not-started" : "in-progress",
            })
          }
        >
          &larr;
        </button>
        <button
          className="disabled:text-gray-500"
          disabled={task.status === "done"}
          onClick={() =>
            z.mutate.task.update({
              id: task.id,
              status: task.status === "not-started" ? "in-progress" : "done",
            })
          }
        >
          &rarr;
        </button>
        <button
          onClick={() =>
            z.mutate.task.delete({
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}
