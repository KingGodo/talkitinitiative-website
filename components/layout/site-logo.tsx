import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/lib/navigation";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  /** Visual scale, footer uses a larger mark */
  size?: "default" | "lg" | "xl";
};

const sizeClass = {
  default: "h-9 w-auto sm:h-10",
  lg: "h-11 w-auto sm:h-12",
  xl: "h-12 w-auto sm:h-14",
} as const;

export function SiteLogo({
  className,
  priority = false,
  size = "default",
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={site.name}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={428}
        height={226}
        priority={priority}
        className={cn(sizeClass[size])}
      />
    </Link>
  );
}
