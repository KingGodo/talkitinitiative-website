import type { Metadata } from "next";

import { PartnersView } from "@/components/partners/partners-view";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Talk It Initiative, host dialogue circles, co-design youth programmes, and strengthen mental health and leadership across Zambia.",
};

export default function PartnersPage() {
  return <PartnersView />;
}
