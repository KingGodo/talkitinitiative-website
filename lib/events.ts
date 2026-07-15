export type SiteEvent = {
  slug: string;
  title: string;
  dateLabel: string;
  dateISO: string;
  place: string;
  format: "Online" | "In person" | "Hybrid";
  program: string;
  summary: string;
  position: string;
  status: "upcoming" | "past";
};

export const events: SiteEvent[] = [
  {
    slug: "talk-it-tuesday-jul-22",
    title: "Talk It Tuesday",
    dateLabel: "22 Jul 2026",
    dateISO: "2026-07-22",
    place: "Online · Zambia",
    format: "Online",
    program: "Mental Health Advocacy",
    summary:
      "A recurring dialogue circle for young people to speak honestly about what they are carrying — peer-led, judgment-free, and practical.",
    position: "object-[30%_35%]",
    status: "upcoming",
  },
  {
    slug: "campus-conversation-aug-05",
    title: "Campus Conversation Circle",
    dateLabel: "05 Aug 2026",
    dateISO: "2026-08-05",
    place: "Lusaka",
    format: "In person",
    program: "Youth Empowerment",
    summary:
      "An on-campus gathering where students practise open conversation, listen well, and leave with clearer next steps.",
    position: "object-[60%_42%]",
    status: "upcoming",
  },
  {
    slug: "youth-leadership-panel-aug-18",
    title: "Youth Leadership Panel",
    dateLabel: "18 Aug 2026",
    dateISO: "2026-08-18",
    place: "Community Hub",
    format: "Hybrid",
    program: "Leadership Development",
    summary:
      "Young leaders and facilitators share what it takes to hold space, build confidence, and serve peers with care.",
    position: "object-[45%_55%]",
    status: "upcoming",
  },
  {
    slug: "community-listening-jun-10",
    title: "Community Listening Session",
    dateLabel: "10 Jun 2026",
    dateISO: "2026-06-10",
    place: "Central Province",
    format: "In person",
    program: "Community Engagement",
    summary:
      "A neighbourhood dialogue that brought youth, parents, and local partners into one honest conversation about care and leadership.",
    position: "object-[40%_50%]",
    status: "past",
  },
  {
    slug: "talk-it-tuesday-jun-24",
    title: "Talk It Tuesday",
    dateLabel: "24 Jun 2026",
    dateISO: "2026-06-24",
    place: "Online · Zambia",
    format: "Online",
    program: "Mental Health Advocacy",
    summary:
      "An evening online circle focused on stigma, support, and speaking early — facilitators guided a careful, respectful room.",
    position: "object-[52%_38%]",
    status: "past",
  },
  {
    slug: "facilitator-lab-may-18",
    title: "Facilitator Practice Lab",
    dateLabel: "18 May 2026",
    dateISO: "2026-05-18",
    place: "Lusaka",
    format: "In person",
    program: "Leadership Development",
    summary:
      "Volunteers practised holding dialogue with structure: opening, listening cues, and closing a circle well.",
    position: "object-[25%_45%]",
    status: "past",
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
