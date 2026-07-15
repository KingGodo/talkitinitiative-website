import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/lib/navigation";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  /** Visual scale — footer uses a larger mark */
  size?: "default" | "lg" | "xl";
};

const sizeClass = {
  default: "h-14 w-auto sm:h-16 md:h-[4.5rem]",
  lg: "h-[4.75rem] w-auto sm:h-[5.5rem]",
  xl: "h-[5.5rem] w-auto sm:h-28 md:h-[7.25rem]",
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
