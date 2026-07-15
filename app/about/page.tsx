import type { Metadata } from "next";

import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Talk It Initiative — a youth-led nonprofit in Zambia creating safe spaces for honest conversation, mental health, and leadership.",
};

export default function AboutPage() {
  return <AboutView />;
}
