export type LegalDoc = {
  slug: "privacy" | "safeguarding" | "terms";
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "How Talk It Initiative collects, uses, and protects personal information from our website and programmes.",
    updated: "7 September 2026",
    sections: [
      {
        heading: "Who we are",
        body: [
          "Talk It Initiative (“we”, “us”) is a non-profit-making, non-partisan and youth-led organisation based in Zambia. We advance youth empowerment, civic participation and community transformation. Motto: Your Voice, Our Future.",
          `Questions about this policy: ${"talkitzambia50@gmail.com"}.`,
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "When you use membership, volunteer, event registration or interest, contact, media, partnership, newsletter or related forms on this website, we may collect your name, email address, organisation, location, age band (if relevant), topic of enquiry, and the contents of your message.",
          "We do not sell personal data. We do not require an account to browse this website.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "To respond to enquiries, process membership and volunteer interest, coordinate events, handle media and partnership requests, improve our programmes, and, only if you opt in, send occasional updates about Talk It Initiative.",
          "We may anonymise or aggregate information for reporting impact to partners and funders once figures are verified.",
        ],
      },
      {
        heading: "Sharing",
        body: [
          "We share personal information only when needed to operate (for example, trusted email or form tools), when required by law, or with your clear consent (for example, introducing you to a host partner for a specific event).",
        ],
      },
      {
        heading: "Retention and security",
        body: [
          "We keep enquiry and membership interest records only as long as needed for follow-up and accountability, then delete or anonymise them where practical.",
          "We take reasonable technical and organisational steps to protect information, while recognising that no online transmission is perfectly secure.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You may request access, correction, or deletion of personal information we hold about you by emailing us. You may unsubscribe from updates at any time using the link in those messages or by writing to us.",
          "If you are under 18, please involve a parent, guardian, or trusted adult before sharing personal details online.",
        ],
      },
      {
        heading: "Updates",
        body: [
          "We may update this policy as our work grows. The “Last updated” date at the top of this page will change when we do.",
        ],
      },
    ],
  },
  {
    slug: "safeguarding",
    title: "Safeguarding Policy",
    description:
      "How Talk It Initiative protects children and young people in programmes, events, and online spaces.",
    updated: "7 September 2026",
    sections: [
      {
        heading: "Our commitment",
        body: [
          "Talk It Initiative does not tolerate abuse, exploitation, harassment, discrimination, intimidation or violence in any form connected to our work.",
          "Every child and young person who joins a Talk It Initiative space deserves dignity, respect and protection from harm. Safeguarding comes before programme goals, attendance numbers or convenience.",
          "We work primarily with youth and young adults. Facilitators, volunteers, members and partners are expected to model care, boundaries and confidentiality appropriate to group dialogue.",
        ],
      },
      {
        heading: "What we mean by harm",
        body: [
          "Harm includes physical, emotional, sexual or financial abuse; neglect; bullying; online grooming; exploitation; harassment; discrimination; intimidation; violence; and misuse of power by anyone connected to our work, including staff, volunteers, partners or peers.",
        ],
      },
      {
        heading: "Safe practice in programmes",
        body: [
          "Sessions are facilitated with clear agreements: voluntary participation, respectful listening, no ridicule, and the right to pass.",
          "We do not treat dialogue circles as clinical therapy. When distress or risk emerges, facilitators pause, prioritise safety, and escalate using the reporting steps below rather than improvising alone.",
          "Photos, recordings and public stories require consent. We never publish a young person’s identifying details without permission appropriate to their age and context.",
        ],
      },
      {
        heading: "Code of conduct (summary)",
        body: [
          "Treat every participant with equal respect. Keep appropriate boundaries. Do not meet a minor alone in private without an agreed safeguarding arrangement. Do not share pornography or sexually explicit material. Do not use your role to pursue romantic or sexual relationships with participants. Do not discriminate, intimidate or use violence. Report concerns promptly.",
        ],
      },
      {
        heading: "Reporting a concern",
        body: [
          "If you see or experience something that feels unsafe, contact Talk It Initiative immediately at talkitzambia50@gmail.com with the subject line “Safeguarding concern”.",
          "Designated safeguarding contact: Board to confirm. Until a named contact is published by the Board, use the email above.",
          "Reports are handled confidentially to the extent possible, with referral to relevant authorities or support services when required.",
          "In an emergency in Zambia, contact local emergency services or the nearest police station first, then notify us when you are safe to do so.",
          "We take all good-faith reports seriously and protect reporters from retaliation where we have influence.",
        ],
      },
      {
        heading: "Partners and hosts",
        body: [
          "Schools, campuses, community hubs, NGOs, public institutions and other hosts of Talk It Initiative activities share responsibility for safeguarding on their premises. We expect partner venues to uphold child-protection and youth-safe standards compatible with this policy.",
        ],
      },
      {
        heading: "Review",
        body: [
          "This policy will be reviewed at least annually, and sooner after any serious incident or major programme change.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    description:
      "Terms that govern use of the Talk It Initiative website and related public materials.",
    updated: "7 September 2026",
    sections: [
      {
        heading: "Using this website",
        body: [
          "By browsing talkitinitiative.org (or our successor domain) you agree to these terms. If you do not agree, please do not use the site.",
          "Content is provided for general information about Talk It Initiative, a non-profit-making, non-partisan and youth-led organisation advancing youth empowerment, civic participation and community transformation in Zambia. It is not professional medical, legal or counselling advice.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "Unless otherwise noted, text, branding and materials on this site belong to Talk It Initiative or our licensors. You may share links and brief quotations with credit for non-commercial purposes. Do not copy our materials for commercial use without written permission.",
        ],
      },
      {
        heading: "User submissions",
        body: [
          "When you send us a form or email, you confirm that your information is accurate to the best of your knowledge and that you have the right to share it. Abusive, illegal or harmful submissions may be ignored and, where necessary, reported.",
        ],
      },
      {
        heading: "External links",
        body: [
          "Links to partner or third-party sites are for convenience. We are not responsible for their content or privacy practices.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the fullest extent permitted by applicable law, Talk It Initiative is not liable for indirect or consequential loss arising from use of this website. Programme participation is at your own risk, subject to our safeguarding commitments and reasonable care.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may update these terms. Continued use of the site after changes means you accept the revised terms. The “Last updated” date shows the latest revision.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Legal or terms questions: talkitzambia50@gmail.com.",
        ],
      },
    ],
  },
];

export function getLegalDoc(slug: string) {
  return legalDocs.find((doc) => doc.slug === slug);
}
