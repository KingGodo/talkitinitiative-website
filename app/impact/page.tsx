import type { Metadata } from "next";

import { ImpactView } from "@/components/impact/impact-view";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How Talk It Initiative measures change across Zambia, stories, voices, and the dialogue-first work behind safer spaces for young people.",
};

export default function ImpactPage() {
  return <ImpactView />;
}
