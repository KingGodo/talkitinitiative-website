export type Program = {
  slug: string;
  title: string;
  summary: string;
  focus: string;
  position: string;
  objectives: string[];
  beneficiaries: string[];
  activities: string[];
  outcomes: string[];
};

export const programs: Program[] = [
  {
    slug: "leadership-development",
    title: "Leadership Development",
    summary:
      "Practical spaces where young people build voice, character, and the confidence to lead.",
    focus: "Voice · Character · Confidence",
    position: "object-[22%_25%]",
    objectives: [
      "Help young people practise speaking with clarity and courage",
      "Build everyday leadership habits — listening, accountability, and care",
      "Prepare emerging leaders to serve peers and communities across Zambia",
    ],
    beneficiaries: [
      "Secondary and tertiary students",
      "Youth group members and campus organizers",
      "Emerging community facilitators",
    ],
    activities: [
      "Guided dialogue circles and peer leadership labs",
      "Mentorship conversations with facilitators",
      "Public speaking and community action practice",
    ],
    outcomes: [
      "Stronger confidence in rooms that once felt out of reach",
      "Peer leaders who can hold space for honest conversation",
      "A growing network of young people ready to guide others",
    ],
  },
  {
    slug: "mental-health-advocacy",
    title: "Mental Health Advocacy",
    summary:
      "Breaking silence with honesty — peer dialogue, awareness, and support without judgment.",
    focus: "Awareness · Care · Support",
    position: "object-[55%_40%]",
    objectives: [
      "Normalize open conversation about mental health among young people",
      "Equip peer advocates with language and tools for safer dialogue",
      "Connect young people to care pathways when deeper support is needed",
    ],
    beneficiaries: [
      "Young people navigating stress, stigma, or silence",
      "Peer supporters and campus advocates",
      "Families and communities learning to listen well",
    ],
    activities: [
      "Awareness sessions and Talk It Tuesday dialogues",
      "Peer advocacy training and facilitation practice",
      "Community campaigns that reduce stigma around seeking help",
    ],
    outcomes: [
      "More young people speaking early instead of carrying alone",
      "Safer rooms where vulnerability is met with respect",
      "Communities that treat mental health as shared responsibility",
    ],
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment",
    summary:
      "Conversation turned into action through webinars, panels, and community engagement.",
    focus: "Agency · Action · Belonging",
    position: "object-[78%_48%]",
    objectives: [
      "Help young people move from insight to concrete personal and civic action",
      "Create platforms where youth ideas are heard by peers and partners",
      "Strengthen belonging through shared projects and community presence",
    ],
    beneficiaries: [
      "Youth ready to act beyond a single conversation",
      "Campus and community groups seeking structure",
      "Partners looking for youth-centered engagement",
    ],
    activities: [
      "Panels, webinars, and youth forums",
      "Community projects shaped by circle insights",
      "Collaborative campaigns with local partners",
    ],
    outcomes: [
      "Young people who leave rooms with next steps, not only inspiration",
      "Visible youth leadership in local initiatives",
      "Stronger bridges between dialogue spaces and community impact",
    ],
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    summary:
      "Dialogue that travels beyond the room — into neighbourhoods, campuses, and partner spaces.",
    focus: "Reach · Partnership · Presence",
    position: "object-[40%_55%]",
    objectives: [
      "Extend Talk It Initiative circles into communities across Zambia",
      "Build trust with schools, faith spaces, and local organizations",
      "Invite communities into shared ownership of safer conversations",
    ],
    beneficiaries: [
      "Community youth outside formal campus networks",
      "Local partners hosting circles and events",
      "Parents and elders supporting young voices",
    ],
    activities: [
      "Community dialogue gatherings and listening sessions",
      "Partner-hosted circles in schools and hubs",
      "Outreach that connects new voices into ongoing programs",
    ],
    outcomes: [
      "Broader reach beyond a single city or campus",
      "Partners who can carry the dialogue method forward",
      "Communities that recognize Talk It Initiative as a trusted presence",
    ],
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
