"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  aboutIntro,
  aboutMission,
  aboutObjectives,
  aboutPolicies,
  aboutStory,
  aboutValues,
  aboutVision,
  aboutWorkGrounding,
} from "@/lib/about";
import { boardMembers, leadershipIntro } from "@/lib/leadership";
import { siteImages } from "@/lib/media";
import { site } from "@/lib/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const leadershipPreview = boardMembers
  .filter((member) => member.status === "confirmed" && member.image)
  .slice(0, 4);

function AboutPhoto({
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

export function AboutView() {
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
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div data-reveal>
              <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
                {site.name}
              </p>
              <h1 className="mt-4 text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                About Talk It Initiative
              </h1>
              <p className="mt-6 max-w-[34rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                {aboutIntro}
              </p>
              <p className="mt-5 max-w-[34rem] text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                {aboutWorkGrounding}
              </p>
              <p className="mt-5 text-[13px] font-semibold tracking-[-0.015em] text-[#1F2937]">
                {site.tagline}
              </p>
            </div>

            <div data-reveal>
              <AboutPhoto
                src={siteImages.about[0]}
                className="aspect-[5/4] w-full lg:aspect-[4/3]"
                priority
              />
            </div>
          </div>

          <nav
            data-reveal
            aria-label="About sections"
            className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-black/[0.08] pt-8 sm:mt-16"
          >
            {[
              ["#story", "Our story"],
              ["#mission", "Mission & vision"],
              ["#values", "Values"],
              ["#objectives", "Objectives"],
              ["#leadership", "Leadership"],
              ["#policies", "Policies"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Our Story */}
      <section
        id="story"
        className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Our story
              </p>
              <h2 className="mt-2 text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                From founding to registration
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-[#6B7280]">
              Founded {site.foundedFull}, constitution adopted{" "}
              {site.constitutionAdopted}, registered {site.registered}.
            </p>
          </div>

          <ol className="mt-12 border-t border-black/[0.08] sm:mt-14">
            {aboutStory.map((item) => (
              <li
                key={`${item.year}-${item.title}`}
                data-reveal
                className="grid gap-3 border-b border-black/[0.08] py-8 sm:grid-cols-[7.5rem_1fr] sm:gap-10 sm:py-10"
              >
                <p className="font-mono text-[13px] tracking-[0.06em] text-brand">
                  {item.year}
                </p>
                <div>
                  <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937] sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="scroll-mt-28 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal className="border-t border-black/[0.08] pt-8">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Mission
              </p>
              <p className="mt-5 text-[18px] leading-[1.25] font-semibold tracking-[-0.025em] text-[#1F2937] sm:text-[20px]">
                {aboutMission}
              </p>
            </div>
            <div data-reveal className="border-t border-black/[0.08] pt-8">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Vision
              </p>
              <p className="mt-5 text-[18px] leading-[1.25] font-semibold tracking-[-0.025em] text-[#1F2937] sm:text-[20px]">
                {aboutVision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        id="values"
        className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="max-w-[14ch] text-[24px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Core values
          </h2>
          <div className="mt-12 grid gap-10 border-t border-black/[0.08] pt-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-5 lg:pt-12">
            {aboutValues.map((value, index) => (
              <div key={value.title} data-reveal>
                <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                  {value.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section
        id="objectives"
        className="scroll-mt-28 bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end sm:gap-12 sm:pb-12"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Objectives
              </p>
              <h2 className="mt-3 max-w-[16ch] text-[24px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                What we set out to do
              </h2>
            </div>
            <p className="max-w-md text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              Constitutional objectives guiding our programmes, partnerships and
              advocacy.
            </p>
          </div>

          <ol className="mt-10 space-y-0 sm:mt-12">
            {aboutObjectives.map((objective, index) => (
              <li
                key={objective}
                data-reveal
                className="grid gap-3 border-b border-black/[0.08] py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-8 sm:py-7"
              >
                <p className="font-mono text-[13px] tracking-[0.08em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-[13px] leading-relaxed text-[#1F2937] sm:text-[14px]">
                  {objective}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership preview */}
      <section
        id="leadership"
        className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end sm:gap-12 sm:pb-12"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Leadership
              </p>
              <h2 className="mt-3 max-w-[14ch] text-[24px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                Youth-led from day one
              </h2>
            </div>
            <p className="max-w-md text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              {leadershipIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {leadershipPreview.map((person, index) => (
              <div key={person.name} data-reveal className="flex gap-4">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-[#f3f3f3] ring-2 ring-brand/10">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover object-top"
                      sizes="56px"
                    />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] tracking-[0.08em] text-brand/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                    {person.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium text-brand">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10">
            <Link
              href="/team"
              className="inline-flex text-[14px] font-semibold text-brand transition-opacity hover:opacity-70"
            >
              Meet Our Leadership →
            </Link>
          </div>

          <div
            data-reveal
            className="mt-12 grid items-center gap-8 border-t border-black/[0.08] pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
          >
            <div>
              <h3 className="text-[14px] font-semibold text-[#1F2937]">
                Board of Directors
              </h3>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                Youth-led leadership stewards strategic direction, oversight and
                accountability for {site.name}.
              </p>
              <p className="mt-5 text-[14px] text-[#6B7280]">
                Governance enquiries:{" "}
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Leadership / governance enquiry")}`}
                  className="font-semibold text-brand transition-opacity hover:opacity-75"
                >
                  {site.email}
                </a>
              </p>
            </div>
            <AboutPhoto
              src={siteImages.about[1]}
              className="aspect-[5/4] w-full"
            />
          </div>
        </div>
      </section>

      {/* Policies */}
      <section id="policies" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-8 border-t border-black/[0.08] pt-10 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-16"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Policies & compliance
              </p>
              <h2 className="mt-3 text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                How we stay accountable
              </h2>
            </div>
            <p className="max-w-lg text-[13px] leading-relaxed text-[#6B7280]">
              Safeguarding, privacy and our Constitution guide how we work.
              Annual reports continue under{" "}
              <Link href="/transparency" className="font-semibold text-brand">
                Transparency
              </Link>
              .
            </p>
          </div>

          <ul
            data-reveal
            className="mt-10 grid gap-0 border-t border-black/[0.08] sm:mt-12 sm:grid-cols-3 lg:grid-cols-5"
          >
            {aboutPolicies.map((policy) => (
              <li
                key={policy.href}
                className="border-b border-black/[0.08] sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <Link
                  href={policy.href}
                  className="flex items-center justify-between gap-4 px-0 py-5 text-[13px] font-semibold text-[#1F2937] transition-colors hover:text-brand sm:px-4 sm:first:pl-0 sm:last:pr-0 lg:px-5"
                >
                  {policy.label}
                  <span aria-hidden className="text-brand">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[24px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
            Continue exploring
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-[#6B7280]">
            Meet the Board, read our Constitution, or explore the programmes
            advancing youth empowerment and civic participation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button
              nativeButton={false}
              render={<Link href="/team" />}
              className="h-12 rounded-full bg-brand px-7 text-[13px] font-semibold text-white hover:bg-brand/90"
            >
              Meet Our Leadership
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/resources#constitution" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[13px] font-medium text-[#1F2937] hover:bg-white hover:text-[#1F2937]"
            >
              Read Constitution
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/programs" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[13px] font-medium text-[#1F2937] hover:bg-white hover:text-[#1F2937]"
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
