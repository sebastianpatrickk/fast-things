import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getProjects, createProject } from "../actions/project";

export function useGetProjects() {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return query;
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return mutation;
}
