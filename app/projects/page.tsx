import type { Metadata } from "next";

import { ProjectsView } from "@/components/projects/projects-view";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Active, completed, and upcoming Talk It Initiative projects, campus circles, facilitator pipelines, and provincial dialogue expansion in Zambia.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
