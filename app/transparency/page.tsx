import type { Metadata } from "next";

import { TransparencyView } from "@/components/transparency/transparency-view";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "How Talk It Initiative uses donations, publishes policies, and grows governance and reporting accountability.",
};

export default function TransparencyPage() {
  return <TransparencyView />;
}
