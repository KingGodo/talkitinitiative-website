import { z } from "zod";

export const interestTypes = [
  "contact",
  "volunteer",
  "partner",
  "donate",
  "rsvp",
  "newsletter",
  "campaign",
  "internship",
  "media",
] as const;

export type InterestType = (typeof interestTypes)[number];

export const interestSchema = z.object({
  type: z.enum(interestTypes),
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email required").max(200),
  message: z.string().trim().max(4000).optional().default(""),
  topic: z.string().trim().max(120).optional(),
  eventSlug: z.string().trim().max(120).optional(),
  organisation: z.string().trim().max(200).optional(),
  amountHint: z.string().trim().max(80).optional(),
  honeypot: z.string().max(0).optional().default(""),
});

export type InterestPayload = z.infer<typeof interestSchema>;

export function interestSubject(data: InterestPayload) {
  switch (data.type) {
    case "volunteer":
      return `Volunteer interest, ${data.name}`;
    case "partner":
      return `Partnership enquiry, ${data.name}`;
    case "donate":
      return `Donation interest, ${data.name}`;
    case "rsvp":
      return `RSVP: ${data.eventSlug || "Event"}, ${data.name}`;
    case "newsletter":
      return `Newsletter signup, ${data.name}`;
    case "campaign":
      return `Campaign interest, ${data.name}`;
    case "internship":
      return `Internship enquiry, ${data.name}`;
    case "media":
      return `Media enquiry, ${data.name}`;
    default:
      return `Contact: ${data.topic || "General enquiry"}, ${data.name}`;
  }
}
