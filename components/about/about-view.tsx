"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  aboutMission,
  aboutPolicies,
  aboutTimeline,
  aboutValues,
  aboutVision,
} from "@/lib/about";
import { boardNote, leadershipTeam } from "@/lib/leadership";
import { site } from "@/lib/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AboutPhoto({
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
                Talk It Initiative
              </p>
              <h1 className="mt-4 text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
                About
              </h1>
              <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
                A youth-led nonprofit creating safe spaces for honest
                conversation — mental health, leadership, and civic
                responsibility across Zambia.
              </p>
              <p className="mt-5 text-[15px] font-semibold tracking-[-0.015em] text-[#1F2937]">
                {site.tagline}
              </p>
            </div>

            <div data-reveal>
              <AboutPhoto
                className="aspect-[5/4] w-full lg:aspect-[4/3]"
                position="object-[42%_35%]"
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
              ["#journey", "Journey"],
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

      {/* Story */}
      <section
        id="story"
        className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Our story
              </p>
              <h2 className="mt-3 max-w-[12ch] text-[28px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[40px]">
                Founded on dialogue
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-relaxed text-[#6B7280] sm:text-[17px]">
              <p>
                Talk It Initiative started in 2024 with a clear belief: when
                young people are given a careful room to speak, they do not only
                feel lighter — they learn how to lead.
              </p>
              <p>
                Too often, stress, stigma, and silence keep youth carrying what
                should be shared. We answered with structured conversation —
                peer dialogue, facilitation, and programmes that turn honesty
                into agency.
              </p>
              <p>
                Today we remain youth-led and dialogue-first, growing provincial
                reach while keeping every circle grounded in care,
                accountability, and belonging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        id="mission"
        className="scroll-mt-28 bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal className="border-t border-black/[0.08] pt-8">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Mission
              </p>
              <p className="mt-5 text-[22px] leading-[1.25] font-semibold tracking-[-0.025em] text-[#1F2937] sm:text-[26px]">
                {aboutMission}
              </p>
            </div>
            <div data-reveal className="border-t border-black/[0.08] pt-8">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Vision
              </p>
              <p className="mt-5 text-[22px] leading-[1.25] font-semibold tracking-[-0.025em] text-[#1F2937] sm:text-[26px]">
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
            className="max-w-[14ch] text-[28px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]"
          >
            Core values
          </h2>
          <div className="mt-12 grid gap-10 border-t border-black/[0.08] pt-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-4 lg:pt-12">
            {aboutValues.map((value, index) => (
              <div key={value.title} data-reveal>
                <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-[#1F2937]">
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

      {/* Journey */}
      <section id="journey" className="scroll-mt-28 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Timeline
              </p>
              <h2 className="mt-2 text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
                Our journey
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-[#6B7280]">
              From first conversations to growing programmes — still learning,
              still opening rooms.
            </p>
          </div>

          <ol className="mt-12 border-t border-black/[0.08] sm:mt-14">
            {aboutTimeline.map((item) => (
              <li
                key={`${item.year}-${item.title}`}
                data-reveal
                className="grid gap-3 border-b border-black/[0.08] py-8 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:py-10"
              >
                <p className="font-mono text-[13px] tracking-[0.06em] text-brand">
                  {item.year}
                </p>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#1F2937] sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
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
              <h2 className="mt-3 max-w-[14ch] text-[28px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
                Youth-led from day one
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-[#6B7280] sm:text-[16px]">
              Roles that steward the Initiative today. Named photos and bios
              will be published as each leader confirms a public profile.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {leadershipTeam.map((person, index) => (
              <div key={person.role} data-reveal>
                <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                  {person.role}
                </h3>
                <p className="mt-1 text-[13px] font-medium text-brand">
                  {person.focus}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="mt-12 grid items-center gap-8 border-t border-black/[0.08] pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
          >
            <div>
              <h3 className="text-[18px] font-semibold text-[#1F2937]">
                Board of Directors
              </h3>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]">
                {boardNote}
              </p>
              <p className="mt-5 text-[14px] text-[#6B7280]">
                Media and governance:{" "}
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Leadership / governance enquiry")}`}
                  className="font-semibold text-brand transition-opacity hover:opacity-75"
                >
                  {site.email}
                </a>
              </p>
              <Link
                href="/transparency"
                className="mt-4 inline-block text-[14px] font-semibold text-brand"
              >
                Transparency & reports →
              </Link>
            </div>
            <AboutPhoto
              className="aspect-[5/4] w-full"
              position="object-[58%_42%]"
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
              <h2 className="mt-3 text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
                How we stay accountable
              </h2>
            </div>
            <p className="max-w-lg text-[15px] leading-relaxed text-[#6B7280]">
              Safeguarding and privacy sit at the centre of every circle. Full
              policy texts are published; annual reports continue under{" "}
              <Link href="/transparency" className="font-semibold text-brand">
                Transparency
              </Link>
              .
            </p>
          </div>

          <ul
            data-reveal
            className="mt-10 grid gap-0 border-t border-black/[0.08] sm:mt-12 sm:grid-cols-3"
          >
            {aboutPolicies.map((policy) => (
              <li
                key={policy.href}
                className="border-b border-black/[0.08] sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <Link
                  href={policy.href}
                  className="flex items-center justify-between gap-4 px-0 py-5 text-[15px] font-semibold text-[#1F2937] transition-colors hover:text-brand sm:px-6 sm:first:pl-0 sm:last:pr-0"
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
          <h2 className="text-[32px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[40px]">
            Be part of the story
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[#6B7280]">
            Volunteer, partner, or support the work — every new voice makes the
            room stronger.
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
              render={<Link href="/contact" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[15px] font-medium text-[#1F2937] hover:bg-white hover:text-[#1F2937]"
            >
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
