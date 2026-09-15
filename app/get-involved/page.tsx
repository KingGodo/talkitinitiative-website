import type { Metadata } from "next";

import { GetInvolvedView } from "@/components/get-involved/get-involved-view";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Become a member, volunteer, partner or support Talk It Initiative programmes advancing youth empowerment across Zambia.",
};

export default function GetInvolvedPage() {
  return <GetInvolvedView />;
}
