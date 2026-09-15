"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  boardMembers,
  leadersByLevel,
  leadershipIntro,
  provincialRepresentatives,
  type Leader,
} from "@/lib/leadership";
import { site } from "@/lib/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LINE = "border-[#0a4f73]";

type ChartLeader = {
  name: string;
  role: string;
  image: string;
};

/** Photo overlapping a navy nameplate — matches the official org-chart artwork. */
function ChartPerson({
  person,
  className,
}: {
  person: ChartLeader;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative z-[1] flex w-[8rem] shrink-0 flex-col items-center pt-6 sm:w-[9rem] sm:pt-7",
        className
      )}
    >
      <div className="absolute top-0 z-10 size-[2.75rem] overflow-hidden rounded-full bg-[#dbe7ef] shadow-[0_3px_10px_rgba(10,79,115,0.2)] ring-[2.5px] ring-white sm:size-[3.15rem]">
        <Image
          src={person.image}
          alt={person.name}
          fill
          unoptimized
          className="object-cover object-top"
          sizes="50px"
        />
      </div>

      <div className="w-full rounded-[10px] bg-[#0a4f73] px-2 pt-8 pb-2 text-center text-white shadow-[0_5px_14px_rgba(10,79,115,0.18)] sm:rounded-[12px] sm:px-2.5 sm:pt-9 sm:pb-2.5">
        <h3 className="text-[10px] leading-tight font-bold tracking-[-0.02em] sm:text-[11px]">
          {person.name}
        </h3>
        <p className="mt-0.5 text-[7.5px] leading-snug text-white/90 sm:text-[9px]">
          {person.role}
        </p>
      </div>
    </article>
  );
}

/** Uniform CSS dashed lines (avoids stretched SVG dash distortion). */
function VLine({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-0 shrink-0 border-l-2 border-dashed", LINE, className)}
      aria-hidden
    />
  );
}

function HLine({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-0 shrink-0 border-t-2 border-dashed", LINE, className)}
      aria-hidden
    />
  );
}

const PAIR_W = "w-full max-w-[38rem] sm:max-w-[46rem]";

/** President → two officers */
function ForkDown({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative mx-auto h-11 sm:h-12", PAIR_W, className)}
      aria-hidden
    >
      <VLine className="absolute top-0 left-1/2 h-1/2 -translate-x-1/2" />
      <HLine className="absolute top-1/2 left-1/4 right-1/4" />
      <VLine className="absolute top-1/2 bottom-0 left-1/4" />
      <VLine className="absolute top-1/2 bottom-0 right-1/4" />
    </div>
  );
}

/** Two verticals with a single horizontal rail just above the next pair */
function RailDown({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative mx-auto h-12 sm:h-14", PAIR_W, className)}
      aria-hidden
    >
      <VLine className="absolute top-0 bottom-[24%] left-1/4" />
      <VLine className="absolute top-0 bottom-[24%] right-1/4" />
      <HLine className="absolute bottom-[24%] left-1/4 right-1/4" />
      <VLine className="absolute bottom-0 h-[24%] left-1/4" />
      <VLine className="absolute bottom-0 h-[24%] right-1/4" />
    </div>
  );
}

/** Two columns merge into one centre line */
function MergeDown({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative mx-auto h-12 sm:h-14", PAIR_W, className)}
      aria-hidden
    >
      <VLine className="absolute top-0 left-1/4 h-1/2" />
      <VLine className="absolute top-0 right-1/4 h-1/2" />
      <HLine className="absolute top-1/2 left-1/4 right-1/4" />
      <VLine className="absolute top-1/2 bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  );
}

function PairRow({
  left,
  right,
}: {
  left: ChartLeader;
  right: ChartLeader;
}) {
  return (
    <div className={cn("mx-auto grid grid-cols-2", PAIR_W)}>
      <div className="flex justify-center">
        <ChartPerson person={left} />
      </div>
      <div className="flex justify-center">
        <ChartPerson person={right} />
      </div>
    </div>
  );
}

/** Faithful recreation of the official Organisational Chart artwork. */
function OrgChart() {
  const [director] = leadersByLevel(1);
  const level2 = leadersByLevel(2);
  const level3 = leadersByLevel(3);
  const leftL2 = level2[0];
  const rightL2 = level2[1];
  const leftL3 = level3[0];
  const rightL3 = level3[1];
  const provincial = provincialRepresentatives.find((rep) => rep.image);

  if (!director || !leftL2 || !rightL2 || !leftL3 || !rightL3 || !provincial?.image) {
    return null;
  }

  const provincialPerson: ChartLeader = {
    name: provincial.name,
    role: "Central Province Representative",
    image: provincial.image,
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[900px] overflow-hidden px-3 sm:max-w-[980px] sm:px-6"
      role="img"
      aria-label="Talk It Initiative organisational chart"
    >
      <div
        className="pointer-events-none absolute -top-10 -left-16 size-48 rounded-full border-2 border-dashed border-[#0a4f73]/25 sm:-top-8 sm:-left-10 sm:size-56"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[18%] -right-20 size-56 rounded-full border-2 border-dashed border-[#0a4f73]/20 sm:-right-14 sm:size-64"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[8%] -bottom-10 size-40 rounded-full border-2 border-dashed border-[#0a4f73]/16 sm:size-48"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[22%] -left-14 size-36 rounded-full border-2 border-dashed border-[#0a4f73]/14 sm:size-44"
        aria-hidden
      />

      <div className="relative flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center sm:mb-8">
          <Image
            src="/logo.png"
            alt={site.name}
            width={320}
            height={170}
            unoptimized
            className="h-11 w-auto sm:h-14"
            priority
          />
          <div className="mt-4 -rotate-2 rounded-[6px] bg-white px-4 py-2 shadow-[0_6px_18px_rgba(10,79,115,0.12)] ring-1 ring-[#0a4f73]/12 sm:mt-5 sm:px-5 sm:py-2.5">
            <p className="text-[13px] font-bold tracking-[-0.02em] text-[#0a4f73] sm:text-[15px]">
              Organisational Chart
            </p>
          </div>
        </div>

        <ChartPerson person={director} />
        <ForkDown />
        <PairRow left={leftL2} right={rightL2} />
        <RailDown />
        <PairRow left={leftL3} right={rightL3} />
        <MergeDown />
        <ChartPerson person={provincialPerson} />
      </div>
    </div>
  );
}

function BoardMemberCard({
  person,
  index,
}: {
  person: Leader;
  index: number;
}) {
  const isTba = person.status === "tba" || !person.image;

  return (
    <li data-reveal className="flex flex-col">
      <div className="flex gap-4">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-[#e8eef3] ring-2 ring-brand/10 sm:size-[4.5rem]">
          {person.image ? (
            <Image
              src={person.image}
              alt=""
              fill
              unoptimized
              className="object-cover object-top"
              sizes="72px"
            />
          ) : (
            <span
              className="absolute inset-0 flex items-center justify-center font-mono text-[13px] tracking-[0.06em] text-brand/50"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="font-mono text-[11px] tracking-[0.08em] text-brand/70">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937]">
            {isTba ? person.role : person.name}
          </h3>
          {!isTba ? (
            <p className="mt-0.5 text-[13px] font-medium text-brand">
              {person.role}
            </p>
          ) : null}
        </div>
      </div>
      {isTba ? (
        <p className="mt-4 text-[14px] leading-relaxed text-[#6B7280]">
          Name and biography to be confirmed.
        </p>
      ) : (
        <>
          <p className="mt-4 text-[14px] leading-relaxed text-[#6B7280]">
            {person.responsibilities}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
            {person.bio}
          </p>
        </>
      )}
    </li>
  );
}

export function TeamView() {
  const root = useRef<HTMLDivElement>(null);
  const showChart =
    leadersByLevel(1).length >= 1 &&
    leadersByLevel(2).length >= 2 &&
    leadersByLevel(3).length >= 2;

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
      {showChart ? (
        <section className="relative overflow-hidden bg-[#EEF3F7] py-12 sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-[960px] px-4 sm:px-8">
            <div data-reveal>
              <OrgChart />
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white">
          <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:pt-24">
            <div data-reveal className="max-w-2xl">
              <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
                {site.name}
              </p>
              <h1 className="mt-4 text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                Our Leadership
              </h1>
              <p className="mt-6 max-w-[34rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                {leadershipIntro}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Board of Directors */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end"
          >
            <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Board of Directors
            </h2>
            <p className="max-w-md text-[13px] leading-relaxed text-[#6B7280]">
              {leadershipIntro}
            </p>
          </div>

          <ul className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-1 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {boardMembers.map((person, index) => (
              <BoardMemberCard
                key={`${person.role}-${person.boardOrder}`}
                person={person}
                index={index}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Provincial Representatives */}
      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end"
          >
            <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Provincial Representatives
            </h2>
            <p className="max-w-md text-[13px] leading-relaxed text-[#6B7280]">
              Supporting Talk It Initiative&apos;s presence across provinces,
              campuses and local communities.
            </p>
          </div>

          <ul className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {provincialRepresentatives.map((rep) => (
              <li key={`${rep.province}-${rep.name}`} data-reveal>
                <div className="flex gap-4">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-[#e8eef3] ring-2 ring-brand/10 sm:size-[4.5rem]">
                    {rep.image ? (
                      <Image
                        src={rep.image}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover object-top"
                        sizes="72px"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-mono text-[11px] tracking-[0.08em] text-brand/70">
                      {rep.province}
                    </p>
                    <h3 className="mt-1 text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                      {rep.name}
                    </h3>
                    <p className="mt-0.5 text-[13px] font-medium text-brand">
                      {rep.focus}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-[#6B7280]">
                  {rep.bio}
                </p>
                <p className="mt-2 text-[13px] text-[#9CA3AF]">
                  Term: {rep.term}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Patron & Advisors */}
      <section className="border-t border-black/[0.06] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Patron & Advisors
          </h2>
          <p
            data-reveal
            className="mx-auto mt-4 max-w-lg text-[13px] leading-relaxed text-[#6B7280]"
          >
            Patron and advisor names are listed only when formally appointed.
          </p>
        </div>
      </section>

      {/* CTAs */}
      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Learn more about how we govern
          </h2>
          <p
            data-reveal
            className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-[#6B7280]"
          >
            Read our governance framework, Constitution, or contact the Board
            with an enquiry.
          </p>
          <div
            data-reveal
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button
              nativeButton={false}
              render={<Link href="/governance" />}
              className="h-11 rounded-full bg-brand px-6 text-[14px] font-semibold text-white hover:bg-brand/90"
            >
              Governance
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/resources#constitution" />}
              variant="outline"
              className="h-11 rounded-full border-black/[0.08] bg-white px-6 text-[14px] font-medium text-[#1F2937] hover:bg-[#FAFAFA]"
            >
              Constitution
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              variant="outline"
              className="h-11 rounded-full border-black/[0.08] bg-white px-6 text-[14px] font-medium text-[#1F2937] hover:bg-[#FAFAFA]"
            >
              Contact
            </Button>
          </div>
          <p data-reveal className="mt-8 text-[14px] text-[#6B7280]">
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
    </div>
  );
}
