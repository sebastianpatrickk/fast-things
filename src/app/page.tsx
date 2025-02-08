"use client";

import { useCreateProject, useGetProjects } from "@/lib/queries/project";
import React from "react";

export default function Home() {
  const mutation = useCreateProject();
  const { data, isLoading, error } = useGetProjects();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>You have {data?.length} projects</h1>
      {data?.map((project) => <div key={project.id}>{project.name}</div>)}

      <button onClick={() => mutation.mutate(Date.now().toLocaleString())}>
        Add Project
      </button>
    </div>
  );
}
