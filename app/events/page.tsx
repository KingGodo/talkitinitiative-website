import type { Metadata } from "next";

import { EventsView } from "@/components/events/events-view";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past Talk It Initiative gatherings, dialogue circles, campus conversations, and youth leadership panels across Zambia.",
};

export default function EventsPage() {
  return <EventsView />;
}
