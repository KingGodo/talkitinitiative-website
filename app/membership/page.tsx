import type { Metadata } from "next";

import { MembershipView } from "@/components/membership/membership-view";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Become a member of Talk It Initiative. Open to Zambians aged 16 to 35 who support youth empowerment, civic participation and community transformation.",
};

export default function MembershipPage() {
  return <MembershipView />;
}
