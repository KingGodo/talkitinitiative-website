import type { Metadata } from "next";

import { MediaView } from "@/components/media/media-view";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Stories, press kit, and updates from Talk It Initiative — youth-led dialogue for mental health and leadership in Zambia.",
};

export default function MediaPage() {
  return <MediaView />;
}
