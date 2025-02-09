"use client";

import { useZero } from "@/components/zero-provider";
import { useQuery } from "@rocicorp/zero/react";

export function EditTask({ taskId }: { taskId: string }) {
  const z = useZero();
  const [task] = useQuery(
    z.query.task
      .related("assignedTo")
      .related("createdBy")
      .where("id", "=", taskId)
      .one(),
  );
  const [users] = useQuery(z.query.user);
  return (
    <div className="grid max-w-sm grid-cols-1 gap-4">
      <div className="flex gap-2">
        <label htmlFor="name">Name:</label>
        <input
          className="border"
          id="name"
          value={task?.name || ""}
          onChange={(e) =>
            z.mutate.task.update({
              id: taskId,
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={task?.status || "not-started"}
          onChange={(e) =>
            z.mutate.task.update({
              id: taskId,
              status: e.target.value,
            })
          }
        >
          {STATUSES.map((s) => (
            <option key={s.key} value={s.key}>
              {s.value}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="createdBy">Created By:</label>
        <select
          id="createdBy"
          value={task?.createdBy?.id || z.userID}
          onChange={(e) =>
            z.mutate.task.update({
              id: taskId,
              createdById: e.target.value,
            })
          }
        >
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="assignedTo">Assigned To:</label>
        <select
          id="assignedTo"
          value={task?.assignedToId || z.userID}
          onChange={(e) =>
            z.mutate.task.update({
              id: taskId,
              assignedToId: e.target.value,
            })
          }
        >
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const STATUSES = [
  {
    key: "not-started",
    value: "Not Started",
  },
  {
    key: "in-progress",
    value: "In Progress",
  },
  {
    key: "done",
    value: "Done",
  },
];
