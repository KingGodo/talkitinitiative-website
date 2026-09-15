import type { Metadata } from "next";

import { MediaView } from "@/components/media/media-view";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Stories, press kit and updates from Talk It Initiative, youth empowerment, civic participation and community transformation in Zambia.",
};

export default function MediaPage() {
  return <MediaView />;
}
