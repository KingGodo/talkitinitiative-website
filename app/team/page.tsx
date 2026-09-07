import type { Metadata } from "next";

import { TeamView } from "@/components/team/team-view";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Talk It Initiative leadership team, the people guiding youth-led dialogue, programmes, and community presence across Zambia.",
};

export default function TeamPage() {
  return <TeamView />;
}
