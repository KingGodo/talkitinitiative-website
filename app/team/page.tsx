import type { Metadata } from "next";

import { TeamView } from "@/components/team/team-view";

export const metadata: Metadata = {
  title: "Our Leadership",
  description:
    "Meet the Board of Talk It Initiative, the youth-led leadership guiding strategic direction, oversight and accountability across Zambia.",
};

export default function TeamPage() {
  return <TeamView />;
}
