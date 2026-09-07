"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/media";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

type PhotoCardProps = {
  className?: string;
  src: string;
  position?: string;
  overlay?: string;
  priority?: boolean;
};

function PhotoCard({
  className,
  src,
  position = "object-center",
  overlay,
  priority = false,
}: PhotoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] bg-[#f3f3f3] shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <Image
        src={src}
        alt=""
        fill
        unoptimized
        priority={priority}
        className={cn("object-cover", position)}
        sizes="280px"
      />
      {overlay ? (
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent px-3.5 pt-14 pb-3.5">
          <p className="text-[11px] leading-snug font-medium text-white sm:text-[12px]">
            {overlay}
          </p>
        </div>
      ) : null}
    </div>
  );
}

function CaptionCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[20px] bg-brand px-3.5 py-3.5 sm:px-4 sm:py-4",
        className
      )}
    >
      <p className="text-[11px] leading-snug font-medium text-white sm:text-[12px]">
        {children}
      </p>
    </div>
  );
}

const [heroLeft, heroMidLeft, heroCenter, heroMidRight, heroRight] =
  siteImages.homeHero;

export function HomeHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        "[data-hero-copy] > *",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.07 }
      ).fromTo(
        "[data-hero-card]",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.05 },
        "-=0.45"
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:min-h-[calc(100svh-5rem)]">
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div
            data-hero-card
            className="absolute bottom-[8%] left-[2%] flex w-[190px] flex-col gap-3 xl:left-[3%] xl:w-[210px]"
          >
            <PhotoCard
              src={heroLeft}
              className="aspect-[3/4] w-full"
              priority
            />
            <CaptionCard>
              Be part of a growing community building safer spaces for young
              voices.
            </CaptionCard>
          </div>

          <div
            data-hero-card
            className="absolute bottom-[8%] right-[2%] flex w-[190px] flex-col gap-3 xl:right-[3%] xl:w-[210px]"
          >
            <PhotoCard
              src={heroRight}
              className="aspect-[3/4] w-full"
              priority
            />
            <CaptionCard>
              Together, we turn honest conversation into lasting change.
            </CaptionCard>
          </div>

          <div
            data-hero-card
            className="absolute bottom-[8%] left-1/2 w-[190px] -translate-x-1/2 xl:w-[210px]"
          >
            <PhotoCard src={heroCenter} className="aspect-square w-full" />
          </div>

          <div
            data-hero-card
            className="absolute bottom-[8%] left-[22%] w-[175px] xl:left-[23%] xl:w-[190px]"
          >
            <PhotoCard
              src={heroMidLeft}
              className="h-[260px] w-full xl:h-[280px]"
            />
          </div>

          <div
            data-hero-card
            className="absolute bottom-[8%] right-[22%] w-[175px] xl:right-[23%] xl:w-[190px]"
          >
            <PhotoCard
              src={heroMidRight}
              className="h-[260px] w-full xl:h-[280px]"
              overlay="Together, we turn honest conversation into lasting change."
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-start pt-8 pb-6 sm:pt-12 lg:min-h-[calc(100svh-5rem)] lg:pt-14 lg:pb-24">
          <div
            data-hero-copy
            className="mx-auto flex w-full max-w-[36rem] flex-col items-center text-center lg:max-w-[46rem]"
          >
            <div className="flex max-w-md items-center gap-2.5 rounded-full border border-black/[0.06] bg-white px-2.5 py-1.5 sm:gap-3 sm:px-3">
              <div className="flex shrink-0 -space-x-2">
                {siteImages.homeAvatars.map((src) => (
                  <div
                    key={src}
                    className="relative size-6 overflow-hidden rounded-full border-2 border-white sm:size-8"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover object-center"
                      sizes="32px"
                    />
                  </div>
                ))}
              </div>
              <p className="text-left text-[11px] leading-snug text-[#6B7280] sm:text-[13px]">
                Youth voices rising. Safe conversations. Join the movement
                today.
              </p>
            </div>

            <h1 className="mt-6 text-[26px] leading-[1.12] font-bold tracking-[-0.04em] text-[#1F2937] sm:mt-8 sm:text-[42px] lg:text-[52px] xl:text-[58px]">
              <span className="block sm:whitespace-nowrap">
                One voice. One space.
              </span>
              <span className="block sm:whitespace-nowrap">
                One stronger future.
              </span>
            </h1>

            <p className="mt-4 max-w-[30rem] text-[14px] leading-relaxed text-[#6B7280] sm:mt-6 sm:text-[17px]">
              We create safe spaces for young people in Zambia to speak honestly,
              about mental health, leadership, and the change they are ready
              to lead.
            </p>

            <div className="mt-6 flex w-full max-w-sm flex-col gap-2.5 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/get-involved" />}
                className="h-11 w-full rounded-full bg-brand text-[14px] font-semibold text-white hover:bg-brand/90 sm:h-12 sm:w-auto sm:px-7 sm:text-[15px]"
              >
                Get Involved
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/about" />}
                variant="outline"
                className="h-11 w-full rounded-full border-[#E5E5E5] bg-white text-[14px] font-medium text-[#1F2937] hover:bg-[#f7f7f7] sm:h-12 sm:w-auto sm:px-6 sm:text-[15px]"
              >
                Our Story
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="hidden h-[260px] lg:block" aria-hidden />
        </div>

        <div className="relative z-10 -mx-5 pb-10 sm:-mx-8 lg:hidden">
          <div className="flex items-end gap-3 overflow-x-auto px-5 pb-1 snap-x snap-mandatory sm:gap-4 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              data-hero-card
              className="flex w-[148px] shrink-0 snap-center flex-col gap-2.5 sm:w-[168px]"
            >
              <PhotoCard
                src={heroLeft}
                className="aspect-[3/4] w-full"
                priority
              />
              <CaptionCard>
                Be part of a growing community building safer spaces for young
                voices.
              </CaptionCard>
            </div>

            <div
              data-hero-card
              className="w-[148px] shrink-0 snap-center sm:w-[168px]"
            >
              <PhotoCard
                src={heroMidLeft}
                className="h-[210px] w-full sm:h-[240px]"
              />
            </div>

            <div
              data-hero-card
              className="w-[148px] shrink-0 snap-center sm:w-[168px]"
            >
              <PhotoCard src={heroCenter} className="aspect-square w-full" />
            </div>

            <div
              data-hero-card
              className="w-[148px] shrink-0 snap-center sm:w-[168px]"
            >
              <PhotoCard
                src={heroMidRight}
                className="h-[210px] w-full sm:h-[240px]"
                overlay="Together, we turn honest conversation into lasting change."
              />
            </div>

            <div
              data-hero-card
              className="flex w-[148px] shrink-0 snap-center flex-col gap-2.5 sm:w-[168px]"
            >
              <PhotoCard src={heroRight} className="aspect-[3/4] w-full" />
              <CaptionCard>
                Together, we turn honest conversation into lasting change.
              </CaptionCard>
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] text-[#9CA3AF]">
            Swipe to explore
          </p>
        </div>
      </div>
    </section>
  );
}
