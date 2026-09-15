import type { Metadata } from "next";

import { YouthVoicesView } from "@/components/youth-voices/youth-voices-view";

export const metadata: Metadata = {
  title: "Youth Voices",
  description:
    "A platform for young people to speak, write, create and contribute to conversations that matter across Zambia.",
};

export default function YouthVoicesPage() {
  return <YouthVoicesView />;
}
