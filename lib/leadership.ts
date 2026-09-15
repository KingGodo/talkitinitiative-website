export type Leader = {
  name: string;
  role: string;
  focus: string;
  bio: string;
  responsibilities: string;
  image: string | null;
  /** Display order on the leadership page */
  boardOrder: number;
  /** Org-chart hierarchy level (1 = top). Null = not on chart. */
  chartLevel: 1 | 2 | 3 | null;
  status: "confirmed" | "tba";
  linkedIn?: string;
};

export type ProvincialRepresentative = {
  province: string;
  name: string;
  image: string | null;
  bio: string;
  focus: string;
  term: string;
};

/**
 * Leadership as published on the Organisational Chart
 * (and CFO title confirmed in the 11 Sep 2026 finance memo).
 */
export const boardMembers: Leader[] = [
  {
    name: "Sylvester Simutowe",
    role: "Co-founder, Director and President",
    focus: "Strategic direction and official representation",
    responsibilities:
      "Leads the organisation, oversees Board meetings and represents Talk It Initiative at official functions.",
    bio: "Biography to be supplied and approved before public publication.",
    image: "/leaders/Sylvester.jpeg",
    boardOrder: 1,
    chartLevel: 1,
    status: "confirmed",
    linkedIn:
      "https://www.linkedin.com/in/sylvester-simutowe-bacc-4937102a5",
  },
  {
    name: "Mannase Chewe",
    role: "Chief financial officer",
    focus: "Finances, budgeting and fundraising stewardship",
    responsibilities:
      "Manages organisational finances, prepares financial reports, oversees the budget and leads fundraising efforts.",
    bio: "Biography to be supplied and approved before public publication.",
    image: "/leaders/Mannase.jpeg",
    boardOrder: 2,
    chartLevel: 2,
    status: "confirmed",
  },
  {
    name: "Tiza Kalulu",
    role: "Director and Secretary",
    focus: "Records, minutes and official communication",
    responsibilities:
      "Responsible for records, minutes of meetings and official communication.",
    bio: "Biography to be supplied and approved before public publication.",
    image: "/leaders/Tiza.png",
    boardOrder: 3,
    chartLevel: 2,
    status: "confirmed",
  },
  {
    name: "Lee-roy Mpofu",
    role: "Programs Coordinator",
    focus: "Programme planning, delivery and impact tracking",
    responsibilities:
      "Oversees planning and implementation of Talk It Initiative programmes and activities, tracks programme impact and ensures accountability.",
    bio: "Biography to be supplied and approved before public publication.",
    image: "/leaders/Leeroy.png",
    boardOrder: 4,
    chartLevel: 3,
    status: "confirmed",
    linkedIn: "https://www.linkedin.com/in/leeroy-mpofu-27478920b",
  },
  {
    name: "King T. Godo",
    role: "Information and Communication Technology Officer",
    focus: "Communication, branding and digital strategy",
    responsibilities:
      "Handles communication, branding, technology systems and social media strategy.",
    bio: "Biography to be supplied and approved before public publication.",
    image: "/leaders/King.png",
    boardOrder: 5,
    chartLevel: 3,
    status: "confirmed",
    linkedIn: "https://www.linkedin.com/in/king-tichaona-godo-6610972b6",
  },
];

export const provincialRepresentatives: ProvincialRepresentative[] = [
  {
    province: "Central Province",
    name: "Muzamba Muzandu",
    image: "/leaders/Muzamba.png",
    bio: "Supports Talk It Initiative's presence in Central Province, helping connect campuses, neighbourhoods and local hosts.",
    focus: "Provincial presence, local partners and community activities",
    term: "Current",
  },
];

/** Used by the organisational chart layout. */
export const leadershipTeam = boardMembers
  .filter((m) => m.status === "confirmed" && m.image && m.chartLevel)
  .map((m) => ({
    name: m.name,
    role: m.role,
    focus: m.focus,
    bio: m.bio,
    image: m.image as string,
    level: m.chartLevel as 1 | 2 | 3 | 4,
  }));

export const boardNote =
  "Talk It Initiative is led by a youth-led Board responsible for strategic direction, oversight and accountability.";

export const leadershipIntro =
  "Talk It Initiative is led by a youth-led Board responsible for strategic direction, oversight and accountability. Our leadership reflects our commitment to participation, integrity and responsible governance.";

export function leadersByLevel(level: 1 | 2 | 3 | 4) {
  return leadershipTeam.filter((person) => person.level === level);
}
