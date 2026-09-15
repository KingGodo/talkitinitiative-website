import type { Metadata } from "next";

import { ResearchView } from "@/components/research/research-view";

export const metadata: Metadata = {
  title: "Research & Advocacy",
  description:
    "Evidence, youth surveys, policy briefs and advocacy campaigns advancing inclusive and participatory decision-making in Zambia.",
};

export default function ResearchPage() {
  return <ResearchView />;
}
