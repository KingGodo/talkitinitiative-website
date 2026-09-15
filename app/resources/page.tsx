import type { Metadata } from "next";

import { ResourcesView } from "@/components/resources/resources-view";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Constitution, policies, reports, civic education materials, and answers to common questions about Talk It Initiative.",
};

export default function ResourcesPage() {
  return <ResourcesView />;
}
