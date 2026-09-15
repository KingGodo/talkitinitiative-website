import type { Metadata } from "next";

import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Talk It Initiative about membership, volunteering, partnerships, programmes, research, media or safeguarding in Zambia.",
};

export default function ContactPage() {
  return <ContactView />;
}
