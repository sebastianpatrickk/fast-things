import { projects } from "@/client-db/schema";
import { getClientDB } from "../utils/clientDBStore";

export async function getProjects() {
  const db = getClientDB();
  const projectsData = await db.select().from(projects);
  console.log(projectsData);
  return projectsData;
}

export async function createProject(name: string) {
  const db = getClientDB();
  await db.insert(projects).values({ name });
}
