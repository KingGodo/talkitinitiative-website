export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Leadership" },
  { href: "/programs", label: "Our Work" },
  { href: "/youth-voices", label: "Youth Voices" },
  { href: "/research", label: "Research" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/media", label: "News" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = {
  explore: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Leadership" },
    { href: "/governance", label: "Governance" },
    { href: "/programs", label: "Our Work" },
    { href: "/youth-voices", label: "Youth Voices" },
    { href: "/research", label: "Research & Advocacy" },
    { href: "/impact", label: "Impact" },
    { href: "/projects", label: "Projects" },
    { href: "/events", label: "Events" },
    { href: "/media", label: "News & Media" },
  ],
  engage: [
    { href: "/membership", label: "Membership" },
    { href: "/get-involved#volunteer", label: "Volunteer" },
    { href: "/partners", label: "Partners" },
    { href: "/get-involved#donate", label: "Support Our Work" },
    { href: "/resources", label: "Resources" },
    { href: "/transparency", label: "Transparency" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/resources#constitution", label: "Constitution" },
    { href: "/legal/privacy", label: "Privacy" },
    { href: "/legal/safeguarding", label: "Safeguarding" },
    { href: "/legal/terms", label: "Terms" },
  ],
} as const;

export const site = {
  name: "Talk It Initiative",
  tagline: "Your Voice, Our Future",
  positioning: "Youth Empowerment · Civic Participation · Community Transformation",
  nature:
    "a non-profit-making, non-partisan and youth-led organisation",
  email: "talkitzambia50@gmail.com",
  phone: "+260 763340465",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://talkitinitiative.org",
  location: "Zambia",
  founded: "2025",
  foundedFull: "17 February 2025",
  registered: "10 December 2025",
  constitutionAdopted: "10 October 2025",
  description:
    "Talk It Initiative is a non-profit-making, non-partisan and youth-led organisation advancing youth empowerment, civic participation and community transformation in Zambia.",
  descriptionLong:
    "A non-profit-making, non-partisan and youth-led organisation advancing youth empowerment, civic participation and community transformation in Zambia.",
} as const;

/** Official Absa account (memo dated 11 September 2026). */
export const bankAccount = {
  accountName: "TALK IT INITIATIVE",
  accountNumber: "0172208738",
  bank: "Absa Bank Zambia Plc",
  branch: "Longacres Main Branch (17)",
  swift: "BARCZMLX",
  currency: "Zambian Kwacha (ZMW)",
  issuedBy: "Mannase Chewe, Chief Financial Officer",
  issuedOn: "11 September 2026",
} as const;

export const donateChannels = [
  {
    title: "Bank transfer",
    detail: `Transfer to ${bankAccount.accountName}, Absa Bank Zambia Plc, account ${bankAccount.accountNumber}, ${bankAccount.branch}. Swift: ${bankAccount.swift}. Currency: ${bankAccount.currency}.`,
  },
  {
    title: "Sponsor a programme",
    detail:
      "Sponsor training, dialogues, civic education or community engagement activities aligned with our Constitution.",
  },
  {
    title: "In-kind support",
    detail:
      "Venue space, materials, transport, mentorship and technical support make a direct difference. Tell us what you can offer.",
  },
] as const;

export const donateUses = [
  "Youth programmes and dialogue sessions",
  "Civic education and community engagement",
  "Educational content and storytelling",
  "Research, advocacy and provincial outreach",
] as const;

/** Publish only after Board-approved profile URLs are confirmed. */
export const socialLinks: { label: string; href: string }[] = [];
