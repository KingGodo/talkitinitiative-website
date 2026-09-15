import { faqItems } from "@/lib/governance";

export const contactFaqs = faqItems.map((item) => ({
  question: item.q,
  answer: item.a,
}));

export const contactTopics = [
  "General Enquiries",
  "Membership",
  "Volunteering",
  "Partnerships",
  "Media",
  "Programmes",
  "Research & Advocacy",
  "Safeguarding",
] as const;
