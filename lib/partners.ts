export const partnerTypes = [
  {
    title: "Schools & campuses",
    body: "Host dialogue circles, Talk It Tuesdays, and leadership sessions for students.",
  },
  {
    title: "Community hubs & faith spaces",
    body: "Open neighbourhood rooms where youth, parents, and facilitators can listen together.",
  },
  {
    title: "NGOs & youth networks",
    body: "Co-design outreach that strengthens mental health, leadership, and civic voice.",
  },
  {
    title: "Public institutions",
    body: "Align with youth desks, libraries, and civic programmes that value safe conversation.",
  },
] as const;

export const partnerPrinciples = [
  "Safeguarding and dignity are non-negotiable in every co-hosted space.",
  "Young people remain central — partners amplify the room, they do not replace youth voice.",
  "We name partnerships publicly only with mutual agreement.",
  "In-kind and financial support are both valued when they advance safe dialogue.",
] as const;

export const featuredPartners: {
  name: string;
  type: string;
  summary: string;
  status: "active" | "open";
}[] = [
  {
    name: "Campus & community hosts",
    type: "Host network",
    summary:
      "Universities, student groups, and neighbourhood spaces that open rooms for Talk It Initiative circles.",
    status: "active",
  },
  {
    name: "Peer facilitator collaborators",
    type: "Programme allies",
    summary:
      "Youth leaders and organisations who co-facilitate sessions and extend care beyond a single gathering.",
    status: "active",
  },
  {
    name: "Your organisation",
    type: "Open invitation",
    summary:
      "Named partner logos and profiles will appear here as memoranda and public listings are confirmed.",
    status: "open",
  },
];
