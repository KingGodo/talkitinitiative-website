"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { ImpactIndicators } from "@/components/impact/impact-indicators";
import { Button } from "@/components/ui/button";
import { sectionEyebrow, bodyMuted, displayHeading } from "@/lib/design";
import { upcomingEvents } from "@/lib/events";
import { siteImages } from "@/lib/media";
import { programs } from "@/lib/programs";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionPhoto({
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
        sizes="(max-width: 768px) 50vw, 400px"
      />
    </div>
  );
}

export function HomeSections() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
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
      {/* Mission + collage */}
      <section className="relative overflow-hidden bg-white py-28 sm:py-36 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[920px] text-center" data-reveal>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[#F8FAFB] px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-brand" />
              <p className="text-[11px] font-medium tracking-[0.04em] text-[#6B7280] sm:text-[12px]">
                Founded 2025 · Youth-led · Zambia
              </p>
            </div>

            <h2 className={cn("mx-auto mt-8 max-w-[18ch] sm:mt-10", displayHeading)}>
              From honest dialogue to confident leadership.
            </h2>

            <p className={cn("mx-auto mt-5 max-w-[36rem] sm:mt-6", bodyMuted)}>
              Talk It Initiative is dialogue-first, turning conversation into
              personal growth, community care, and civic action across Zambia.
            </p>
          </div>

          <div
            data-reveal
            className="mt-14 flex items-end justify-center gap-3 sm:mt-16 sm:gap-4 lg:gap-5"
          >
            <SectionPhoto
              src={siteImages.homeMission[0]}
              className="hidden h-[220px] w-[150px] sm:block lg:h-[260px] lg:w-[180px]"
            />
            <SectionPhoto
              src={siteImages.homeMission[1]}
              className="h-[200px] w-[140px] sm:h-[260px] sm:w-[170px] lg:h-[300px] lg:w-[200px]"
              priority
            />
            <SectionPhoto
              src={siteImages.homeMission[2]}
              className="h-[160px] w-[140px] sm:h-[200px] sm:w-[160px] lg:h-[220px] lg:w-[180px]"
            />
            <SectionPhoto
              src={siteImages.homeMission[3]}
              className="hidden h-[240px] w-[150px] md:block lg:h-[280px] lg:w-[175px]"
            />
          </div>

          <div
            data-reveal
            className="mx-auto mt-12 max-w-2xl border-t border-black/[0.08] pt-2 sm:mt-14 sm:pt-12"
          >
            <ul className="divide-y divide-black/[0.08] sm:grid sm:grid-cols-3 sm:gap-6 sm:divide-y-0 sm:border-0">
              {[
                {
                  title: "Dialogue",
                  text: "Safe spaces to speak and be heard",
                },
                {
                  title: "Leadership",
                  text: "Young people rising with purpose",
                },
                {
                  title: "Community",
                  text: "Action that strengthens Zambia",
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-4 py-5 text-left sm:block sm:gap-0 sm:py-0 sm:text-center"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[12px] tracking-[0.08em] text-brand/70 sm:hidden">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold tracking-[-0.01em] text-brand sm:text-[15px]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[14px] leading-snug text-[#6B7280] sm:mt-2 sm:leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-black/[0.08] pt-6 sm:mt-12 sm:border-0 sm:pt-0 sm:text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand transition-opacity hover:opacity-70"
              >
                Our Story
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs, editorial split */}
      <section className="bg-[#FAFAFA] py-28 sm:py-36 lg:py-40">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className={sectionEyebrow}>
                Our work
              </p>
              <h2 className={cn("mt-4 max-w-[12ch]", displayHeading)}>
                Where conversations become change.
              </h2>
              <p className={cn("mt-5 max-w-sm", bodyMuted)}>
                Each program opens a structured space for young people to speak
                with honesty, then leave with clarity, confidence, and a path
                to lead.
              </p>

              <div className="mt-8 hidden gap-3 sm:flex lg:mt-10">
                <SectionPhoto
                  src={siteImages.homePrograms[0]}
                  className="h-[220px] w-[140px] lg:h-[260px] lg:w-[155px]"
                />
                <SectionPhoto
                  src={siteImages.homePrograms[1]}
                  className="mt-10 h-[180px] w-[120px] lg:h-[210px] lg:w-[135px]"
                />
              </div>

              <Link
                href="/programs"
                className="mt-8 inline-flex text-[13px] font-semibold text-brand transition-opacity hover:opacity-70 lg:mt-10"
              >
                Explore Our Work →
              </Link>
            </div>

            <div className="border-t border-black/[0.08]">
              {programs.map((program, index) => (
                <article
                  key={program.title}
                  data-reveal
                  className="group grid gap-4 border-b border-black/[0.08] py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:py-8"
                >
                  <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <Link href={`/programs#${program.slug}`}>
                      <h3 className="text-[18px] font-bold tracking-[-0.03em] text-[#1F2937] transition-colors group-hover:text-brand sm:text-[22px]">
                        {program.title}
                      </h3>
                    </Link>
                    <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#6B7280]">
                      {program.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact, typographic */}
      <section className="bg-white py-28 sm:py-36 lg:py-40">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div data-reveal>
            <ImpactIndicators variant="home" />
          </div>
        </div>
      </section>

      {/* Events with thumbs */}
      <section className="bg-[#FAFAFA] py-28 sm:py-36">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div data-reveal className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Calendar
              </p>
              <h2 className="mt-3 text-[24px] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                Upcoming Events
              </h2>
            </div>
            <Link
              href="/events"
              className="text-[13px] font-semibold text-brand transition-opacity hover:opacity-70"
            >
              View all →
            </Link>
          </div>

          {upcomingEvents.length === 0 ? (
            <p
              data-reveal
              className="mt-12 max-w-lg text-[13px] leading-relaxed text-[#6B7280] sm:mt-14"
            >
              No upcoming events are scheduled yet. Past gatherings are available
              in the events archive.
            </p>
          ) : (
            <ul className="mt-12 space-y-4 sm:mt-14">
              {upcomingEvents.map((event) => (
                <li
                  key={event.slug}
                  data-reveal
                  className="grid items-center gap-4 rounded-[22px] border border-black/[0.05] bg-white p-3 sm:grid-cols-[7.5rem_1fr] sm:gap-6 sm:p-4"
                >
                  <SectionPhoto
                    src={event.image}
                    className="aspect-[5/4] w-full sm:aspect-square sm:h-[7.5rem] sm:w-[7.5rem]"
                    position={event.position}
                  />
                  <div className="flex flex-col gap-1 px-1 pb-2 sm:flex-row sm:items-baseline sm:gap-10 sm:px-2 sm:pb-0">
                    <time
                      dateTime={event.dateISO}
                      className="shrink-0 text-[14px] font-semibold text-brand"
                    >
                      {event.dateLabel.replace(/ 20\d{2}$/, "")}
                    </time>
                    <div>
                      <Link href={`/events#${event.slug}`}>
                        <p className="text-[18px] font-semibold tracking-[-0.015em] text-[#1F2937] transition-colors hover:text-brand">
                          {event.title}
                        </p>
                      </Link>
                      <p className="mt-1 text-[14px] text-[#6B7280]">
                        {event.place}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden bg-[#043a57]">
        <Image
          src={siteImages.homeCta}
          alt=""
          fill
          unoptimized
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,45,70,0.94)_0%,rgba(6,87,130,0.72)_55%,rgba(6,87,130,0.55)_100%)]"
          aria-hidden
        />

        <div
          className="relative mx-auto flex min-h-[min(72vh,640px)] max-w-[1120px] flex-col justify-end px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
          data-reveal
        >
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-white/60 uppercase">
              Get involved
            </p>
            <h2 className="mt-5 text-[24px] leading-[1.02] font-bold tracking-[-0.04em] text-white sm:text-[36px] lg:text-[40px]">
              Be part of the change.
            </h2>
            <p className="mt-5 max-w-[32rem] text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
              Whether you are a young person looking to participate, a volunteer
              ready to serve, an organisation interested in partnership, or a
              supporter who wants to contribute, there is a place for you at
              Talk It Initiative.
            </p>

            <div className="mt-10 flex flex-col gap-2.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/membership" />}
                className="h-11 rounded-full bg-white px-6 text-[13px] font-semibold text-brand hover:bg-white/92"
              >
                Become a Member
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/get-involved#volunteer" />}
                variant="outline"
                className="h-11 rounded-full border-white/30 bg-transparent px-6 text-[13px] font-medium text-white hover:bg-white/10 hover:text-white"
              >
                Volunteer
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/partners" />}
                variant="outline"
                className="h-11 rounded-full border-white/30 bg-transparent px-6 text-[13px] font-medium text-white hover:bg-white/10 hover:text-white"
              >
                Partner With Us
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/get-involved#donate" />}
                variant="outline"
                className="h-11 rounded-full border-white/30 bg-transparent px-6 text-[13px] font-medium text-white hover:bg-white/10 hover:text-white"
              >
                Support Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
