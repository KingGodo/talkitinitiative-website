export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = {
  explore: [
    { href: "/about", label: "About" },
    { href: "/team", label: "Our Team" },
    { href: "/programs", label: "Programs" },
    { href: "/projects", label: "Projects" },
    { href: "/impact", label: "Impact" },
    { href: "/events", label: "Events" },
    { href: "/media", label: "Media" },
  ],
  engage: [
    { href: "/get-involved#volunteer", label: "Volunteer" },
    { href: "/get-involved#donate", label: "Donate" },
    { href: "/partners", label: "Partners" },
    { href: "/transparency", label: "Transparency" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy" },
    { href: "/legal/safeguarding", label: "Safeguarding" },
    { href: "/legal/terms", label: "Terms" },
  ],
} as const;

export const site = {
  name: "Talk It Initiative",
  tagline: "Your voice, our future.",
  email: "talkitzambia50@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://talkitinitiative.org",
  location: "Zambia",
  founded: "2024",
  description:
    "A youth-led nonprofit creating safe spaces for honest conversation, mental health, leadership, and civic responsibility across Zambia.",
} as const;

/** Update these with verified payment details when ready for public receipt. */
export const donateChannels = [
  {
    title: "Mobile money",
    detail:
      "MTN MoMo and Airtel Money details are shared after a short donation enquiry so every transfer reaches the right account.",
  },
  {
    title: "Bank transfer",
    detail:
      "Zambian bank account details are provided on request for larger or organised gifts.",
  },
  {
    title: "In-kind support",
    detail:
      "Venue space, materials, catering, and transport for circles make a direct difference, tell us what you can offer.",
  },
] as const;

export const donateUses = [
  "Facilitation and peer facilitator training",
  "Session materials and safe meeting spaces",
  "Provincial outreach and travel",
  "Safeguarding, wellbeing, and programme care",
] as const;
