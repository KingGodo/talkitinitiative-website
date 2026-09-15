/** Indicators we track. Publish numeric values only when Board-verified. */
export const impactMetrics = [
  { label: "Young people engaged" },
  { label: "Dialogue sessions" },
  { label: "Members" },
  { label: "Volunteers" },
  { label: "Facilitators trained" },
  { label: "Provinces reached" },
  { label: "Programmes delivered" },
  { label: "Partnerships" },
] as const;

export const impactMetricsNote =
  "Verified impact figures will be published for each reporting period once approved by the Board.";

export const impactPillars = [
  {
    title: "Participation",
    body: "We measure how young people engage in dialogue, programmes and community action.",
  },
  {
    title: "Learning and leadership",
    body: "Impact includes skills, confidence and the capacity to lead and serve others.",
  },
  {
    title: "Partnerships and community action",
    body: "We track collaboration with institutions and the local action that follows conversation.",
  },
] as const;

export const impactStories = [
  {
    slug: "campus-circle-finds-voice",
    title: "A campus circle finds its voice",
    program: "Youth Leadership & Development",
    location: "Zambia",
    dateLabel: "2025",
    body: "Situation, intervention, participant voice and outcome will be published once approved for public release.",
  },
] as const;

export const impactQuotes = [
  {
    quote:
      "Approved community testimonials will appear here once consent and attribution are confirmed.",
    name: "Community voice",
    role: "Pending approval",
  },
] as const;
