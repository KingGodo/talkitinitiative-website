import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] text-brand uppercase",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-warm" aria-hidden />
      {children}
    </p>
  );
}
