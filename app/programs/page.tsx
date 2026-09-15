import type { Metadata } from "next";

import { ProgramsView } from "@/components/programs/programs-view";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Where conversations become knowledge, participation and action. Seven programme areas from Talk It Initiative across Zambia.",
};

export default function ProgramsPage() {
  return <ProgramsView />;
}
