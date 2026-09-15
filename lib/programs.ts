import { galleryPhotos } from "@/lib/media";

export type Program = {
  slug: string;
  title: string;
  summary: string;
  focus: string;
  position: string;
  image: string;
  objectives: string[];
  beneficiaries: string[];
  activities: string[];
  outcomes: string[];
};
export const programs: Program[] = [
  {
    slug: "youth-leadership-development",
    title: "Youth Leadership & Development",
    summary:
      "Build leadership skills, confidence, character and a commitment to service through training, mentorship, public speaking, leadership dialogues, youth forums and community action.",
    focus: "Skills · Confidence · Service",
    position: "object-center",
    image: galleryPhotos[9],
    objectives: [
      "Build leadership skills, confidence and character",
      "Strengthen a commitment to service among young people",
      "Create pathways from dialogue into practical leadership",
    ],
    beneficiaries: [
      "Secondary and tertiary students",
      "Emerging youth leaders and campus organisers",
      "Young people preparing for community service",
    ],
    activities: [
      "Leadership training and mentorship",
      "Public speaking and leadership dialogues",
      "Youth forums and community action",
    ],
    outcomes: [
      "Young people with stronger confidence to lead",
      "Peer leaders who can facilitate and mentor others",
      "A growing network of youth committed to service",
    ],
  },
  {
    slug: "civic-education-participation",
    title: "Civic Education & Participation",
    summary:
      "Equip young people with knowledge and opportunities to participate responsibly in civic and national affairs through civic education sessions, youth forums, public dialogues and awareness campaigns.",
    focus: "Knowledge · Responsibility · Participation",
    position: "object-center",
    image: galleryPhotos[10],
    objectives: [
      "Promote civic education, responsibility and engagement",
      "Create opportunities for responsible participation in civic life",
      "Support inclusive and participatory decision-making",
    ],
    beneficiaries: [
      "Young people seeking civic knowledge",
      "Campus and community youth groups",
      "Partners advancing civic education",
    ],
    activities: [
      "Civic education sessions",
      "Youth forums and public dialogues",
      "Awareness campaigns",
    ],
    outcomes: [
      "Young people better prepared for civic participation",
      "Stronger youth voice in public dialogue",
      "Communities that welcome youth contribution",
    ],
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment",
    summary:
      "Create opportunities for young people to develop their voice, skills, ideas and capacity to contribute to their communities and country.",
    focus: "Voice · Skills · Capacity",
    position: "object-center",
    image: galleryPhotos[11],
    objectives: [
      "Strengthen young people's voice, skills and ideas",
      "Build capacity to contribute to community and national development",
      "Open pathways from insight to organised action",
    ],
    beneficiaries: [
      "Youth ready to grow skills and confidence",
      "Campus and community groups seeking structure",
      "Partners looking for youth-centred engagement",
    ],
    activities: [
      "Skills and confidence-building sessions",
      "Collaborative projects and campaigns",
      "Mentorship and peer learning",
    ],
    outcomes: [
      "Young people with clearer next steps",
      "Visible youth contribution in local initiatives",
      "Stronger bridges between dialogue and action",
    ],
  },
  {
    slug: "research-advocacy",
    title: "Research & Advocacy",
    summary:
      "Research issues affecting young people, generate evidence, develop policy-oriented content and advocate for inclusive and participatory decision-making.",
    focus: "Evidence · Policy · Campaigns",
    position: "object-center",
    image: galleryPhotos[12],
    objectives: [
      "Generate evidence on issues affecting young people",
      "Develop policy-oriented content and briefs",
      "Advocate for inclusive and participatory decision-making",
    ],
    beneficiaries: [
      "Youth contributors and researchers",
      "Partners and institutions seeking youth evidence",
      "Communities affected by youth policy issues",
    ],
    activities: [
      "Youth research and surveys",
      "Policy briefs and position papers",
      "Advocacy campaigns and stakeholder engagement",
    ],
    outcomes: [
      "Stronger public evidence on youth issues",
      "Clearer advocacy messages grounded in research",
      "Deeper engagement with stakeholders and donors",
    ],
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    summary:
      "Connect young people with communities, institutions and partners to address issues and create meaningful local action.",
    focus: "Outreach · Partnership · Local action",
    position: "object-center",
    image: galleryPhotos[4],
    objectives: [
      "Extend Talk It Initiative into communities across Zambia",
      "Build trust with schools, faith spaces and local organisations",
      "Support meaningful local action with youth at the centre",
    ],
    beneficiaries: [
      "Community youth beyond formal campus networks",
      "Local partners hosting dialogues and events",
      "Parents and elders supporting young voices",
    ],
    activities: [
      "Community dialogue and listening sessions",
      "Partner-hosted activities in schools and hubs",
      "Outreach that brings new voices into programmes",
    ],
    outcomes: [
      "Broader reach beyond a single city or campus",
      "Partners who can carry the method forward",
      "Communities that recognise Talk It Initiative as a trusted presence",
    ],
  },
  {
    slug: "educational-content-storytelling",
    title: "Educational Content & Storytelling",
    summary:
      "Produce and share high-quality educational, informative and youth-centred content through articles, podcasts, videos, social media and other platforms.",
    focus: "Content · Media · Storytelling",
    position: "object-center",
    image: galleryPhotos[5],
    objectives: [
      "Produce high-quality educational and youth-centred content",
      "Amplify youth perspectives through storytelling",
      "Distribute content across platforms that reach young people",
    ],
    beneficiaries: [
      "Young writers, creators and storytellers",
      "Audiences seeking civic and educational content",
      "Partners amplifying youth voices",
    ],
    activities: [
      "Articles, podcasts and videos",
      "Digital campaigns and social storytelling",
      "Editorial and production collaborations",
    ],
    outcomes: [
      "A growing library of educational youth content",
      "Stronger public understanding of youth issues",
      "More young people contributing as creators",
    ],
  },
  {
    slug: "mental-health-wellbeing",
    title: "Mental Health & Wellbeing",
    summary:
      "Promote informed, respectful conversations around mental health and wellbeing through dialogue, awareness and education. This is a thematic area within our broader mandate, not the organisation's entire identity.",
    focus: "Awareness · Dialogue · Education",
    position: "object-center",
    image: galleryPhotos[6],
    objectives: [
      "Normalise informed conversation about mental health and wellbeing",
      "Support respectful peer dialogue and awareness",
      "Connect young people to education and support pathways where appropriate",
    ],
    beneficiaries: [
      "Young people navigating stress, stigma or silence",
      "Peer supporters and campus advocates",
      "Families and communities learning to listen well",
    ],
    activities: [
      "Awareness sessions and structured dialogues",
      "Educational content on wellbeing",
      "Community campaigns that reduce stigma",
    ],
    outcomes: [
      "More young people speaking early instead of carrying alone",
      "Safer rooms where vulnerability is met with respect",
      "Communities that treat wellbeing as shared responsibility",
    ],
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
