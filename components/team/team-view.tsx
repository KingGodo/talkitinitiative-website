"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  boardNote,
  leadersByLevel,
  leadershipTeam,
  type Leader,
} from "@/lib/leadership";
import { site } from "@/lib/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Card matching the org-chart reference: photo overlaps a navy nameplate. */
function ChartPerson({
  person,
  className,
  wide = false,
}: {
  person: Leader;
  className?: string;
  wide?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative flex shrink-0 flex-col items-center pt-5",
        wide ? "w-[9.25rem] sm:w-[9.75rem]" : "w-[8.5rem] sm:w-[9rem]",
        className
      )}
    >
      <div
        className={cn(
          "absolute top-0 z-10 overflow-hidden rounded-full bg-[#dbe7ef] shadow-[0_3px_10px_rgba(10,79,115,0.18)] ring-2 ring-white",
          wide ? "size-10 sm:size-11" : "size-9 sm:size-10"
        )}
      >
        <Image
          src={person.image}
          alt={person.name}
          fill
          unoptimized
          className="object-cover object-top"
          sizes="44px"
        />
      </div>

      <div className="w-full rounded-[9px] bg-[#0a4f73] px-2 pt-7 pb-1.5 text-center text-white shadow-[0_4px_12px_rgba(10,79,115,0.18)] sm:px-2.5 sm:pt-[1.85rem] sm:pb-2">
        <h3 className="text-[10px] leading-tight font-bold tracking-[-0.02em] sm:text-[11px]">
          {person.name}
        </h3>
        <p className="mt-0.5 text-[8px] leading-snug text-white/85 sm:text-[9px]">
          {person.role}
        </p>
      </div>
    </article>
  );
}

function DashedV({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto w-0 shrink-0 border-l-2 border-dashed border-[#0a4f73]",
        className
      )}
      aria-hidden
    />
  );
}

function DashedH({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-0 shrink-0 border-t-2 border-dashed border-[#0a4f73]",
        className
      )}
      aria-hidden
    />
  );
}

/** Pair row: optional top rail + spaced cards. */
function ChartPair({
  left,
  right,
  showTopRail = true,
}: {
  left: Leader;
  right: Leader;
  showTopRail?: boolean;
}) {
  return (
    <div className="relative flex w-full flex-col items-center">
      {showTopRail ? (
        <DashedH className="w-[calc(8.5rem+9rem)] sm:w-[calc(9rem+11rem)]" />
      ) : null}
      <div className="flex items-start justify-center gap-36 sm:gap-44">
        <div className="flex flex-col items-center">
          <DashedV className="h-7 sm:h-9" />
          <ChartPerson person={left} />
        </div>
        <div className="flex flex-col items-center">
          <DashedV className="h-7 sm:h-9" />
          <ChartPerson person={right} />
        </div>
      </div>
    </div>
  );
}

function OrgChart() {
  const [director] = leadersByLevel(1);
  const [cfo, secretary] = leadersByLevel(2);
  const [programs, ict] = leadersByLevel(3);
  const [province] = leadersByLevel(4);

  const cardW = "w-[8.5rem] sm:w-[9rem]";
  const pairW =
    "w-[calc(8.5rem+9rem+8.5rem)] sm:w-[calc(9rem+11rem+9rem)]";
  const railW = "w-[calc(8.5rem+9rem)] sm:w-[calc(9rem+11rem)]";
  const railLeft = "left-[calc(8.5rem/2)] sm:left-[calc(9rem/2)]";

  return (
    <div
      className="relative mx-auto w-full max-w-[760px] overflow-hidden px-2 sm:max-w-[860px]"
      role="img"
      aria-label="Talk It Initiative organisational chart"
    >
      <div
        className="pointer-events-none absolute -top-4 -left-8 size-40 rounded-full border-2 border-dashed border-[#0a4f73]/28 sm:size-52"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[28%] -right-12 size-44 rounded-full border-2 border-dashed border-[#0a4f73]/22 sm:size-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[15%] -bottom-6 size-32 rounded-full border-2 border-dashed border-[#0a4f73]/18 sm:size-44"
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-0">
        <div className="mb-5 flex flex-col items-center sm:mb-6">
          <Image
            src="/logo.png"
            alt={site.name}
            width={280}
            height={148}
            unoptimized
            className="h-10 w-auto sm:h-11"
            priority
          />
          <div className="mt-3.5 -rotate-2 rounded-[8px] bg-white px-3.5 py-1.5 shadow-[0_5px_14px_rgba(10,79,115,0.1)] ring-1 ring-[#0a4f73]/10 sm:mt-4 sm:px-4 sm:py-2">
            <p className="text-[12px] font-bold tracking-[-0.02em] text-[#0a4f73] sm:text-[13px]">
              Organisational Chart
            </p>
          </div>
        </div>

        <ChartPerson person={director} wide />
        <DashedV className="h-7 sm:h-9" />

        <ChartPair left={cfo} right={secretary} />

        {/* Stems from L2 down to L3, no horizontal above Lee-roy / King */}
        <div className={cn("relative flex justify-between", pairW)}>
          <div className={cn("flex justify-center", cardW)}>
            <DashedV className="h-7 sm:h-9" />
          </div>
          <div className={cn("flex justify-center", cardW)}>
            <DashedV className="h-7 sm:h-9" />
          </div>
        </div>

        <ChartPair left={programs} right={ict} showTopRail={false} />

        {/* Horizontal under Lee-roy / King → provincial */}
        <div className={cn("relative flex justify-between", pairW)}>
          <div className={cn("flex justify-center", cardW)}>
            <DashedV className="h-7 sm:h-9" />
          </div>
          <div className={cn("flex justify-center", cardW)}>
            <DashedV className="h-7 sm:h-9" />
          </div>
          <DashedH className={cn("absolute bottom-0", railLeft, railW)} />
        </div>

        <DashedV className="h-7 sm:h-9" />
        <ChartPerson person={province} />
      </div>
    </div>
  );
}

export function TeamView() {
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
      <section className="bg-white">
        <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:pt-24">
          <div data-reveal className="max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
              Our team
            </p>
            <h1 className="mt-4 text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
              The people leading Talk It Initiative
            </h1>
            <p className="mt-6 max-w-[34rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
              A youth-led leadership team stewarding dialogue, programmes, and
              community presence across Zambia, from direction and finance to
              programmes, technology, and provincial outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Organisational chart, matched to reference artwork */}
      <section className="relative overflow-hidden border-t border-black/[0.06] bg-[#E8F0F6] py-14 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-[960px] px-4 sm:px-8">
          <div data-reveal>
            <OrgChart />
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end"
          >
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              Meet the leadership
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-[#6B7280]">
              Each role protects the integrity of our rooms, from safeguarding
              and programmes to finance, technology, and provincial reach.
            </p>
          </div>

          <ul className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {leadershipTeam.map((person, index) => (
              <li key={person.name} data-reveal>
                <div className="flex gap-4">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-[#f3f3f3] ring-2 ring-brand/10 sm:size-[4.5rem]">
                    <Image
                      src={person.image}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover object-top"
                      sizes="72px"
                    />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-mono text-[11px] tracking-[0.08em] text-brand/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-[17px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                      {person.name}
                    </h3>
                    <p className="mt-0.5 text-[13px] font-medium text-brand">
                      {person.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-[#6B7280]">
                  {person.bio}
                </p>
                <p className="mt-2 text-[13px] text-[#9CA3AF]">{person.focus}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[30px]"
          >
            Board of Directors
          </h2>
          <p
            data-reveal
            className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-[#6B7280]"
          >
            {boardNote}
          </p>
          <p data-reveal className="mt-6 text-[14px] text-[#6B7280]">
            Governance enquiries:{" "}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Leadership / governance enquiry")}`}
              className="font-semibold text-brand transition-opacity hover:opacity-75"
            >
              {site.email}
            </a>
          </p>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
          <h2
            data-reveal
            className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]"
          >
            Want to work with the team?
          </h2>
          <p
            data-reveal
            className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#6B7280]"
          >
            Reach out about volunteering, partnerships, media, or joining the
            circle.
          </p>
          <div
            data-reveal
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="h-11 rounded-full bg-brand px-6 text-[14px] font-semibold text-white hover:bg-brand/90"
            >
              Contact Us
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/get-involved" />}
              variant="outline"
              className="h-11 rounded-full border-black/[0.08] bg-white px-6 text-[14px] font-medium text-[#1F2937] hover:bg-[#FAFAFA]"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
