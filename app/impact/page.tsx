import type { Metadata } from "next";

import { ImpactView } from "@/components/impact/impact-view";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How Talk It Initiative tracks participation, learning and community action in Zambia. Verified figures only, no invented statistics.",
};

export default function ImpactPage() {
  return <ImpactView />;
}
