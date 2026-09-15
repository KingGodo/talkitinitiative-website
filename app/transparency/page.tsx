import type { Metadata } from "next";

import { TransparencyView } from "@/components/transparency/transparency-view";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Accountability centre for Talk It Initiative, Constitution, governance, reports, policies and how support is used.",
};

export default function TransparencyPage() {
  return <TransparencyView />;
}
