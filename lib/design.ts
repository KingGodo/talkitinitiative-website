/**
 * Talk It Initiative — design direction
 * Style: Trust & Authority (ui-ux-pro-max) + Sophistication & Trust (ui-principles)
 * Brand primary remains #065782. Do not introduce purple gradients or cream/terracotta defaults.
 */
export const designDirection = {
  personality: "Trust & Authority",
  foundation: "cool neutrals + brand navy",
  depth: "borders + surface shifts",
  radius: "12px soft system",
  body: "13px / 14px",
  display: "24px / 36px / 40px",
} as const;

/** Shared display heading classes matching the home hero. */
export const displayHeading =
  "text-[24px] font-bold leading-[1.08] tracking-[-0.035em] text-[#1F2937] sm:text-[36px] lg:text-[40px]";

export const sectionEyebrow =
  "text-[11px] font-semibold tracking-[0.12em] text-brand uppercase";

export const bodyMuted =
  "text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]";
