import type { Metadata } from "next";

import { GovernanceView } from "@/components/governance/governance-view";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "How Talk It Initiative is governed, from Board roles to committees, integrity, and accountability under the Constitution.",
};

export default function GovernancePage() {
  return <GovernanceView />;
}
