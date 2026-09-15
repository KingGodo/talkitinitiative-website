import type { Metadata } from "next";

import { AboutView } from "@/components/about/about-view";
import { site } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return <AboutView />;
}
