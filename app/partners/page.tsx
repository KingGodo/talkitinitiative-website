import type { Metadata } from "next";

import { PartnersView } from "@/components/partners/partners-view";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Talk It Initiative, schools, campuses, NGOs, public institutions and corporate partners advancing youth empowerment in Zambia.",
};

export default function PartnersPage() {
  return <PartnersView />;
}
