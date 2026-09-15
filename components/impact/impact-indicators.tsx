import Link from "next/link";

import { displayHeading } from "@/lib/design";
import { impactMetrics, impactMetricsNote } from "@/lib/impact";
import { cn } from "@/lib/utils";

type ImpactIndicatorsProps = {
  className?: string;
  variant?: "home" | "page";
};

/**
 * Quiet typographic indicators — matches the site’s existing editorial sections.
 */
export function ImpactIndicators({
  className,
  variant = "home",
}: ImpactIndicatorsProps) {
  const items =
    variant === "home" ? impactMetrics.slice(0, 4) : [...impactMetrics];

  return (
    <div className={cn(className)}>
      <div className="grid gap-8 border-b border-black/[0.08] pb-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16 lg:pb-14">
        <h2 className={cn("max-w-[12ch]", displayHeading)}>
          Impact across Zambia
        </h2>
        <p className="max-w-md text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
          We measure participation, learning, leadership, partnerships and
          community action. Verified figures are published once approved for the
          reporting period.
        </p>
      </div>

      <ul
        className={cn(
          "grid py-10 sm:py-12",
          variant === "home"
            ? "gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-black/[0.08]"
            : "gap-x-0 gap-y-0 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {items.map((item, index) => (
          <li
            key={item.label}
            className={cn(
              variant === "home" && "lg:px-6",
              variant === "home" && index === 0 && "lg:pl-0",
              variant === "home" && index === items.length - 1 && "lg:pr-0",
              variant === "page" &&
                "border-b border-black/[0.06] py-7 pr-6 sm:py-8 lg:px-6",
              variant === "page" && index % 4 === 0 && "lg:pl-0",
              variant === "page" && index >= items.length - 4 && "lg:border-b-0"
            )}
          >
            <p className="text-[14px] font-semibold tracking-[-0.015em] text-[#1F2937]">
              {item.label}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4 border-t border-black/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-[13px] leading-relaxed text-[#6B7280]">
          {impactMetricsNote}
        </p>
        {variant === "home" ? (
          <Link
            href="/impact"
            className="shrink-0 text-[13px] font-semibold text-brand transition-opacity hover:opacity-70"
          >
            View our impact →
          </Link>
        ) : (
          <Link
            href="/transparency"
            className="shrink-0 text-[13px] font-semibold text-brand transition-opacity hover:opacity-70"
          >
            Accountability →
          </Link>
        )}
      </div>
    </div>
  );
}
