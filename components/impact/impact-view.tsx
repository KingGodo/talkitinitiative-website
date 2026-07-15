"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  impactMetrics,
  impactMetricsNote,
  impactPillars,
  impactQuotes,
  impactStories,
} from "@/lib/impact";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ImpactPhoto({
  className,
  position,
  priority = false,
}: {
  className?: string;
  position: string;
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
        src="/hero.jpg"
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div data-reveal>
              <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
                Talk It Initiative
              </p>
              <h1 className="mt-4 max-w-[9ch] text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
                Impact
              </h1>
              <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
                Progress here is measured in courage spoken aloud — every
                dialogue session, panel, and gathering is another young person
                heard across Zambia.
              </p>
            </div>

            <div data-reveal>
              <ImpactPhoto
                className="aspect-[5/4] w-full lg:aspect-[4/3]"
                position="object-[62%_42%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end sm:gap-12 sm:pb-12"
          >
            <h2 className="max-w-[12ch] text-[28px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              What we track
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-[#6B7280] sm:text-[16px]">
              Numbers matter — and so does the kind of change that does not fit
              on a chart: a quieter room, a braver sentence, a peer who stays.
            </p>
          </div>

          <dl
            data-reveal
            className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-12 sm:divide-x-0 lg:grid-cols-4 lg:divide-x lg:divide-black/[0.08] lg:py-16"
          >
            {impactMetrics.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "lg:px-6",
                  index === 0 && "lg:pl-0",
                  index === impactMetrics.length - 1 && "lg:pr-0"
                )}
              >
                <dt className="text-[36px] font-bold tracking-[-0.045em] text-brand sm:text-[40px] lg:text-[44px]">
                  {item.value}
                </dt>
                <dd className="mt-4 text-[14px] font-semibold text-[#1F2937]">
                  {item.label}
                </dd>
                <p className="mt-2 text-[14px] text-[#6B7280]">{item.detail}</p>
              </div>
            ))}
          </dl>
          <p
            data-reveal
            className="border-t border-black/[0.08] pt-6 text-[13px] leading-relaxed text-[#9CA3AF]"
          >
            {impactMetricsNote}
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="max-w-[14ch] text-[28px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]"
          >
            How change shows up
          </h2>
          <div className="mt-12 grid gap-10 border-t border-black/[0.08] pt-10 sm:mt-14 sm:grid-cols-3 sm:gap-8 sm:pt-12">
            {impactPillars.map((pillar, index) => (
              <div key={pillar.title} data-reveal>
                <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-[#1F2937] sm:text-[20px]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
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
              <h2 className="mt-3 text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[40px]">
                Impact in the room
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]">
              Case notes from circles, volunteers, and partners — the work
              behind the metrics.
            </p>
          </div>

          <div className="mt-12 space-y-0 border-t border-black/[0.08] sm:mt-14">
            {impactStories.map((story, index) => (
              <article
                key={story.slug}
                data-reveal
                className="grid gap-6 border-b border-black/[0.08] py-10 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:py-12 lg:grid-cols-[7rem_1fr_1fr]"
              >
                <p className="font-mono text-[13px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.04em] text-brand uppercase">
                    {story.program} · {story.place}
                  </p>
                  <h3 className="mt-2 text-[22px] font-bold tracking-[-0.025em] text-[#1F2937] sm:text-[26px]">
                    {story.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                    {story.summary}
                  </p>
                </div>
                <div className="sm:col-span-2 lg:col-span-1 lg:pt-8">
                  <p className="text-[13px] font-semibold text-[#1F2937]">
                    Outcome
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]">
                    {story.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="max-w-[16ch] text-[28px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]"
          >
            Voices from the work
          </h2>

          <div className="mt-12 grid gap-10 border-t border-black/[0.08] pt-12 sm:mt-14 sm:grid-cols-3 sm:gap-8 sm:pt-14">
            {impactQuotes.map((item) => (
              <figure key={item.name} data-reveal>
                <blockquote className="text-[17px] leading-relaxed text-[#1F2937] sm:text-[18px]">
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

      {/* Approach note */}
      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
            Learning as we grow
          </p>
          <p className="mt-5 text-[18px] leading-relaxed text-[#1F2937] sm:text-[20px]">
            Formal monitoring and evaluation summaries will deepen as Talk It
            Initiative scales. Current figures are labelled as early estimates
            on this page, and annual notes will appear under{" "}
            <Link href="/transparency" className="font-semibold text-brand">
              Transparency
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[32px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[40px]">
            Help grow this impact
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[#6B7280]">
            Volunteer, partner, or give — every contribution creates another
            safer room for young people in Zambia.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/get-involved" />}
              className="h-12 rounded-full bg-brand px-7 text-[15px] font-semibold text-white hover:bg-brand/90"
            >
              Get Involved
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/programs" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[15px] font-medium text-[#1F2937] hover:bg-white hover:text-[#1F2937]"
            >
              View programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
