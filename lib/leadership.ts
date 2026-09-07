export type Leader = {
  name: string;
  role: string;
  focus: string;
  bio: string;
  image: string;
  /** Org-chart depth: 1 = director, 4 = provincial */
  level: 1 | 2 | 3 | 4;
};

export const leadershipTeam: Leader[] = [
  {
    name: "Sylvester Simutowe",
    role: "Co-founder, Director and President",
    focus: "Direction, partnerships, and overall care of the Initiative",
    bio: "Guides programme priorities, external relationships, and the youth-led character of Talk It Initiative across Zambia.",
    image: "/leaders/Sylvester.jpeg",
    level: 1,
  },
  {
    name: "Mannase Chewe",
    role: "Chief Financial Officer",
    focus: "Stewardship, budgeting, and accountable use of resources",
    bio: "Keeps funding transparent and programme-ready so every circle, training, and outreach is resourced with care.",
    image: "/leaders/Mannase.jpeg",
    level: 2,
  },
  {
    name: "Tiza Kalulu",
    role: "Director and Secretary",
    focus: "Governance, records, and organisational coordination",
    bio: "Supports leadership decisions, documentation, and the day-to-day structures that keep the Initiative moving.",
    image: "/leaders/Tiza.png",
    level: 2,
  },
  {
    name: "Lee-roy Mpofu",
    role: "Programs Coordinator",
    focus: "Circles, curricula, and facilitator practice",
    bio: "Shapes dialogue method across mental health, leadership, empowerment, and community engagement programmes.",
    image: "/leaders/Leeroy.png",
    level: 3,
  },
  {
    name: "King T. Godo",
    role: "Information and Communication Technology Officer",
    focus: "Digital systems, communications, and online reach",
    bio: "Builds the tools and channels that help young people find Talk It Initiative, and help the team stay connected.",
    image: "/leaders/King.png",
    level: 3,
  },
  {
    name: "Muzamba Muzandu",
    role: "Central Province Representative",
    focus: "Provincial presence, local partners, and community rooms",
    bio: "Extends dialogue beyond Lusaka, opening trusted spaces with campuses, neighbourhoods, and hosts in Central Province.",
    image: "/leaders/Muzamba.png",
    level: 4,
  },
] as const;

export const boardNote =
  "A formal board of directors will be listed here as appointments are confirmed for public release. Media and governance enquiries are welcome in the meantime.";

export function leadersByLevel(level: Leader["level"]) {
  return leadershipTeam.filter((person) => person.level === level);
}
