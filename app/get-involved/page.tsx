import type { Metadata } from "next";

import { GetInvolvedView } from "@/components/get-involved/get-involved-view";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, partner, or donate with Talk It Initiative — help create safer spaces for young people to speak and lead across Zambia.",
};

export default function GetInvolvedPage() {
  return <GetInvolvedView />;
}
