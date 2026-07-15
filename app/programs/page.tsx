import type { Metadata } from "next";

import { ProgramsView } from "@/components/programs/programs-view";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Leadership development, mental health advocacy, youth empowerment, and community engagement programs from Talk It Initiative across Zambia.",
};

export default function ProgramsPage() {
  return <ProgramsView />;
}
