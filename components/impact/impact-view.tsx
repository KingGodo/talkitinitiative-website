"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { ImpactIndicators } from "@/components/impact/impact-indicators";
import {
  impactPillars,
  impactQuotes,
  impactStories,
} from "@/lib/impact";
import { siteImages } from "@/lib/media";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ImpactPhoto({
  className,
  src,
  position = "object-center",
  priority = false,
}: {
  className?: string;
  src: string;
  position?: string;
  priority?: boolean;
}) {
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
        sizes="(max-width: 768px) 100vw, 560px"
      />
    </div>
  );
}

export function ImpactView() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div data-reveal>
              <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
                Talk It Initiative
              </p>
              <h1 className="mt-4 max-w-[9ch] text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                Impact
              </h1>
              <p className="mt-6 max-w-[32rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                We track participation, learning, leadership and community
                action. Verified figures are published only when approved for
                the relevant reporting period.
              </p>
            </div>

            <div data-reveal>
              <ImpactPhoto
                src={siteImages.impact}
                className="aspect-[5/4] w-full lg:aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div data-reveal>
            <ImpactIndicators variant="page" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="max-w-[14ch] text-[24px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            How change shows up
          </h2>
          <div className="mt-12 grid gap-10 border-t border-black/[0.08] pt-10 sm:mt-14 sm:grid-cols-3 sm:gap-8 sm:pt-12">
            {impactPillars.map((pillar, index) => (
              <div key={pillar.title} data-reveal>
                <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937] sm:text-[20px]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stories"
        className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Stories
              </p>
              <h2 className="mt-3 text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                Impact stories
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
              Case notes appear here once consent and editorial review are
              complete. No invented testimonials.
            </p>
          </div>

          <div className="mt-12 space-y-0 border-t border-black/[0.08] sm:mt-14">
            {impactStories.map((story, index) => (
              <article
                key={story.slug}
                data-reveal
                className="grid gap-6 border-b border-black/[0.08] py-10 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:py-12"
              >
                <p className="font-mono text-[13px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.04em] text-brand uppercase">
                    {story.program} · {story.location} · {story.dateLabel}
                  </p>
                  <h3 className="mt-2 text-[18px] font-bold tracking-[-0.025em] text-[#1F2937] sm:text-[22px]">
                    {story.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-[#6B7280]">
                    {story.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="max-w-[16ch] text-[24px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Voices from the work
          </h2>

          <div className="mt-12 grid gap-10 border-t border-black/[0.08] pt-12 sm:mt-14 sm:grid-cols-1 sm:gap-8 sm:pt-14">
            {impactQuotes.map((item) => (
              <figure key={item.name} data-reveal className="max-w-2xl">
                <blockquote className="text-[14px] leading-relaxed text-[#1F2937] sm:text-[14px]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-[14px] font-semibold text-[#1F2937]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[13px] text-[#6B7280]">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
            Learning as we grow
          </p>
          <p className="mt-5 text-[14px] leading-relaxed text-[#1F2937] sm:text-[20px]">
            Formal monitoring and evaluation summaries will deepen as Talk It
            Initiative scales. Verified reports will appear under{" "}
            <Link href="/transparency" className="font-semibold text-brand">
              Accountability
            </Link>{" "}
            and{" "}
            <Link href="/resources" className="font-semibold text-brand">
              Resources
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[24px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
            Help grow this impact
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-[#6B7280]">
            Become a member, volunteer, partner or supporter, every contribution
            advances youth empowerment, civic participation and community
            transformation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/get-involved" />}
              className="h-12 rounded-full bg-brand px-7 text-[13px] font-semibold text-white hover:bg-brand/90"
            >
              Get Involved
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/programs" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[13px] font-medium text-[#1F2937] hover:bg-white hover:text-[#1F2937]"
            >
              View our work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
