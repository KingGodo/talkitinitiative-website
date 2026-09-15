export const partnerTypes = [
  {
    title: "Schools & campuses",
    body: "Host dialogues, civic education, leadership sessions and youth forums for students.",
  },
  {
    title: "NGOs & youth networks",
    body: "Co-design programmes that advance youth empowerment, civic participation and community transformation.",
  },
  {
    title: "Public institutions",
    body: "Collaborate with youth desks, libraries, civic programmes and institutions that value youth voice.",
  },
  {
    title: "Corporate & private sector",
    body: "Support programmes through sponsorship, in-kind contributions, mentorship and responsible partnership.",
  },
  {
    title: "Community hubs & faith spaces",
    body: "Open neighbourhood rooms where young people, facilitators and communities can listen and act together.",
  },
] as const;

export const partnerPrinciples = [
  "Partnerships must align with our mission, values and Constitution.",
  "Talk It Initiative is non-profit-making, non-partisan and youth-led. Partners amplify youth voice, they do not replace it.",
  "Safeguarding and dignity are non-negotiable in every co-hosted activity.",
  "We name partnerships publicly only with mutual agreement.",
  "In-kind and financial support are valued when they advance approved programmes.",
] as const;

export const featuredPartners: {
  name: string;
  type: string;
  summary: string;
  status: "active" | "open";
}[] = [
  {
    name: "Your organisation",
    type: "Open invitation",
    summary:
      "Named partner logos and profiles will appear here once memoranda and public listings are confirmed. Until then, this page remains an open invitation to collaborate.",
    status: "open",
  },
];
