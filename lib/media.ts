/** Central image paths under /public, keep filenames URL-safe. */

export const heroPhotos = [
  "/Hero/hero-01.jpeg",
  "/Hero/hero-02.jpeg",
  "/Hero/hero-03.jpeg",
  "/Hero/hero-04.jpeg",
  "/Hero/hero-05.jpeg",
] as const;

export const galleryPhotos = [
  "/images/photo-01.jpeg",
  "/images/photo-02.jpeg",
  "/images/photo-03.jpeg",
  "/images/photo-04.jpeg",
  "/images/photo-05.jpeg",
  "/images/photo-06.jpeg",
  "/images/photo-07.jpeg",
  "/images/photo-08.jpeg",
  "/images/photo-09.jpeg",
  "/images/photo-10.jpeg",
  "/images/photo-11.jpeg",
  "/images/photo-12.jpeg",
  "/images/photo-13.jpeg",
  "/images/photo-14.jpeg",
  "/images/photo-15.jpeg",
  "/images/photo-16.jpeg",
] as const;

export type SiteImage =
  | (typeof heroPhotos)[number]
  | (typeof galleryPhotos)[number];

/** Fallback used when a specific crop isn’t assigned. */
export const defaultPhoto: SiteImage = galleryPhotos[0];

export const siteImages = {
  logo: "/logo.png",
  favicon: "/logo.png",
  /** Home hero collage (5 slots, left → mid → right) */
  homeHero: [
    heroPhotos[0],
    heroPhotos[1],
    heroPhotos[2],
    heroPhotos[3],
    heroPhotos[4],
  ] as const,
  homeAvatars: [heroPhotos[0], heroPhotos[2], heroPhotos[4]] as const,
  homeMission: [
    galleryPhotos[0],
    galleryPhotos[1],
    galleryPhotos[2],
    galleryPhotos[3],
  ] as const,
  homePrograms: [galleryPhotos[4], galleryPhotos[5]] as const,
  homeCta: galleryPhotos[6],
  about: [galleryPhotos[7], galleryPhotos[8]] as const,
  programs: [
    galleryPhotos[9],
    galleryPhotos[10],
    galleryPhotos[11],
    galleryPhotos[12],
  ] as const,
  impact: galleryPhotos[13],
  getInvolved: [
    galleryPhotos[14],
    galleryPhotos[15],
    galleryPhotos[8],
  ] as const,
} as const;

export const mediaStories = [
  {
    slug: "campus-circle-finds-voice",
    title: "A campus circle finds its voice",
    dateLabel: "2026",
    type: "Story",
    summary:
      "What began as a quiet Tuesday gathering became a recurring room where students named stress, stigma, and hope.",
    href: "/impact#stories",
  },
  {
    slug: "volunteer-to-facilitator",
    title: "From first-time volunteer to facilitator",
    dateLabel: "2026",
    type: "Story",
    summary:
      "A volunteer joined to help set up chairs. Months later they were guiding dialogue with care and confidence.",
    href: "/impact#stories",
  },
  {
    slug: "partner-extends-room",
    title: "A partner extends the room",
    dateLabel: "2026",
    type: "Story",
    summary:
      "Working with a local organisation, dialogue reached a neighbourhood that had never hosted a structured youth circle.",
    href: "/impact#stories",
  },
] as const;

export const pressBoilerplate = `Talk It Initiative is a youth-led nonprofit in Zambia creating safe spaces for honest conversation. Through dialogue-centred programmes in mental health advocacy, leadership development, youth empowerment, and community engagement, the Initiative helps young people speak, listen, and lead with care. Founded in 2024. Contact: talkitzambia50@gmail.com.`;

export const mediaKitItems = [
  {
    title: "Organisation boilerplate",
    body: "Short paragraph for articles, event listings, and partner pages, see below.",
  },
  {
    title: "Logo",
    body: "Use the Talk It Initiative wordmark and mark from the site header. For high-resolution files, email the media contact.",
  },
  {
    title: "Photography",
    body: "We share consented programme photos on request. Do not harvest personal images of participants without written permission.",
  },
  {
    title: "Interview requests",
    body: "Email with topic, deadline, and format. We aim to respond within a few working days.",
  },
] as const;
