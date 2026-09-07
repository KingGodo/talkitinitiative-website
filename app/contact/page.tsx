import type { Metadata } from "next";

import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Talk It Initiative, enquire about volunteering, partnerships, donations, events, or media in Zambia.",
};

export default function ContactPage() {
  return <ContactView />;
}
