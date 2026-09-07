export type ProjectStatus = "active" | "completed" | "upcoming";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  place: string;
  program: string;
  period: string;
  summary: string;
  objectives: string[];
  partners: string;
  outcomes: string;
};

export const projects: Project[] = [
  {
    slug: "campus-circle-lusaka",
    title: "Campus Circles, Lusaka",
    status: "active",
    place: "Lusaka",
    program: "Mental Health Advocacy",
    period: "2025, ongoing",
    summary:
      "Recurring peer-led dialogue on campus so students can name stress, stigma, and hope, then invite others in.",
    objectives: [
      "Hold regular judgment-free circles for students",
      "Train peer facilitators to open new rooms each term",
      "Reduce isolation around mental health on campus",
    ],
    partners: "Campus student groups and host venues",
    outcomes:
      "Peer facilitators now open new circles each term, keeping the method alive beyond a single event.",
  },
  {
    slug: "facilitator-pipeline",
    title: "Volunteer to Facilitator Pipeline",
    status: "active",
    place: "Central Province & online",
    program: "Leadership Development",
    period: "2025, ongoing",
    summary:
      "A pathway that turns first-time volunteers into stewards who can guide dialogue with care and structure.",
    objectives: [
      "Provide practice labs for listening and facilitation",
      "Pair new volunteers with experienced mentors",
      "Multiply quality circles without losing safeguarding standards",
    ],
    partners: "Talk It Initiative facilitators and community hosts",
    outcomes:
      "Participants move from helping set up the room to guiding dialogue, multiplying impact with quality intact.",
  },
  {
    slug: "neighbourhood-listening",
    title: "Neighbourhood Listening Sessions",
    status: "completed",
    place: "Community hubs across Zambia",
    program: "Community Engagement",
    period: "2025, 2026",
    summary:
      "Brought structured youth dialogue into neighbourhoods that had never hosted a Talk It Initiative circle.",
    objectives: [
      "Build trust with parents and local organisations",
      "Model honest conversation beyond campus settings",
      "Leave a request path for follow-up sessions",
    ],
    partners: "Local community organisations and hubs",
    outcomes:
      "Parents and youth ask for the next session, trust built one careful conversation at a time.",
  },
  {
    slug: "provincial-expansion",
    title: "Provincial Dialogue Expansion",
    status: "upcoming",
    place: "Provinces across Zambia",
    program: "Youth Empowerment",
    period: "2026, planning",
    summary:
      "Grow Talk It Tuesday and community circles beyond early hubs so more young people have a room nearby.",
    objectives: [
      "Map host venues and youth networks in new districts",
      "Train provincial peer facilitators",
      "Sustain online options for those far from in-person rooms",
    ],
    partners: "Open to schools, NGOs, and civic partners",
    outcomes:
      "Success looks like regular circles running with local ownership and shared safeguarding practice.",
  },
];

export const projectsByStatus = {
  active: projects.filter((p) => p.status === "active"),
  completed: projects.filter((p) => p.status === "completed"),
  upcoming: projects.filter((p) => p.status === "upcoming"),
};
