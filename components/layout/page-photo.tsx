import Image from "next/image";

import { defaultPhoto } from "@/lib/media";
import { cn } from "@/lib/utils";

export function PagePhoto({
  className,
  position = "object-center",
  src = defaultPhoto,
  priority = false,
  alt = "",
  sizes = "(max-width: 768px) 100vw, 560px",
}: {
  className?: string;
  position?: string;
  src?: string;
  priority?: boolean;
  alt?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] bg-surface shadow-[0_4px_16px_rgba(10,79,115,0.08)] ring-1 ring-brand/5",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        className={cn("object-cover", position)}
        sizes={sizes}
      />
    </div>
  );
}
