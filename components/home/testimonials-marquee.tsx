"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="rounded-[22px] border border-black/[0.06] bg-white px-6 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:px-7 sm:py-8">
      <blockquote className="text-[16px] leading-relaxed text-[#1F2937] sm:text-[17px]">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3 border-t border-black/[0.06] pt-5">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-[11px] font-semibold text-brand">
          {item.initials}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#1F2937]">{item.name}</p>
          <p className="text-[12px] text-[#6B7280]">{item.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function MarqueeColumn({
  items,
  direction,
  duration,
  className,
}: {
  items: Testimonial[];
  direction: "up" | "down";
  duration: number;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const loop = [...items, ...items];

  useGSAP(
    () => {
      const track = trackRef.current;
      const root = rootRef.current;
      if (!track || !root) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) return;

      // Force layout so yPercent has a real height to measure against
      gsap.set(track, { y: 0, yPercent: 0 });

      const tween = gsap.fromTo(
        track,
        { yPercent: direction === "up" ? 0 : -50 },
        {
          yPercent: direction === "up" ? -50 : 0,
          duration,
          ease: "none",
          repeat: -1,
          force3D: true,
        }
      );

      const pause = () => tween.pause();
      const play = () => tween.play();
      const host = root.closest("[data-testimonials-marquee]");
      host?.addEventListener("mouseenter", pause);
      host?.addEventListener("mouseleave", play);
      host?.addEventListener("focusin", pause);
      host?.addEventListener("focusout", play);

      return () => {
        host?.removeEventListener("mouseenter", pause);
        host?.removeEventListener("mouseleave", play);
        host?.removeEventListener("focusin", pause);
        host?.removeEventListener("focusout", play);
        tween.kill();
      };
    },
    { dependencies: [direction, duration, items.length] }
  );

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative h-[480px] overflow-hidden sm:h-[560px] lg:h-[600px]",
        className
      )}
    >
      <div ref={trackRef} className="flex flex-col gap-4 will-change-transform">
        {loop.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    setReady(true);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const midpoint = Math.ceil(items.length / 2);
  const columnA = items.slice(0, midpoint);
  const columnB = items.slice(midpoint);

  return (
    <div
      data-testimonials-marquee
      className="relative mt-14 sm:mt-16"
      aria-label="Testimonials from the Talk It Initiative community"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-linear-to-b from-white to-transparent sm:h-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-linear-to-t from-white to-transparent sm:h-20" />

      {!ready ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {items.slice(0, 4).map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      ) : isDesktop ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <MarqueeColumn items={columnA} direction="up" duration={36} />
          <MarqueeColumn items={columnB} direction="down" duration={40} />
        </div>
      ) : (
        <MarqueeColumn items={items} direction="up" duration={38} />
      )}
    </div>
  );
}
