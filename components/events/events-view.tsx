"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { InterestForm } from "@/components/forms/interest-form";
import { Button } from "@/components/ui/button";
import { pastEvents, upcomingEvents, type SiteEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function EventPhoto({
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
        alt="Talk It Initiative dialogue gathering"
        fill
        unoptimized
        priority={priority}
        className={cn("object-cover", position)}
        sizes="(max-width: 768px) 100vw, 480px"
      />
    </div>
  );
}

function EventRow({
  event,
  featured = false,
}: {
  event: SiteEvent;
  featured?: boolean;
}) {
  return (
    <article
      id={event.slug}
      data-reveal
      className={cn(
        "scroll-mt-28 border-b border-black/[0.08]",
        featured
          ? "grid gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-14"
          : "py-8 sm:py-9"
      )}
    >
      {featured ? (
        <>
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]">
              <time
                dateTime={event.dateISO}
                className="font-semibold text-brand"
              >
                {event.dateLabel}
              </time>
              <span className="text-[#D1D5DB]">·</span>
              <span className="text-[#6B7280]">{event.format}</span>
              <span className="text-[#D1D5DB]">·</span>
              <span className="text-[#6B7280]">{event.place}</span>
            </div>
            <h3 className="mt-3 text-[28px] leading-[1.08] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              {event.title}
            </h3>
            <p className="mt-2 text-[13px] font-semibold tracking-[0.04em] text-brand uppercase">
              {event.program}
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#6B7280] sm:text-[16px]">
              {event.summary}
            </p>
            <div className="mt-8 rounded-[20px] border border-black/[0.08] bg-[#FAFAFA] p-5 sm:p-6">
              <p className="text-[14px] font-semibold text-[#1F2937]">
                Register interest
              </p>
              <p className="mt-1 text-[13px] text-[#6B7280]">
                We’ll share joining details by email.
              </p>
              <div className="mt-4">
                <InterestForm
                  type="rsvp"
                  eventSlug={event.slug}
                  messageLabel="Notes (optional)"
                  messagePlaceholder="Accessibility needs, questions…"
                  submitLabel="Register interest"
                  compact
                />
              </div>
            </div>
          </div>
          <EventPhoto
            className="aspect-[5/4] w-full"
            position={event.position}
            priority
          />
        </>
      ) : (
        <div className="space-y-5">
          <div className="grid items-start gap-4 sm:grid-cols-[7.5rem_1fr_auto] sm:items-center sm:gap-8">
            <EventPhoto
              className="aspect-[5/4] w-full sm:aspect-square sm:h-[5.5rem] sm:w-[5.5rem]"
              position={event.position}
            />
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]">
                <time
                  dateTime={event.dateISO}
                  className="font-semibold text-brand"
                >
                  {event.dateLabel}
                </time>
                <span className="hidden text-[#D1D5DB] sm:inline">·</span>
                <span className="text-[#6B7280]">{event.place}</span>
              </div>
              <h3 className="mt-1.5 text-[18px] font-semibold tracking-[-0.02em] text-[#1F2937] sm:text-[20px]">
                {event.title}
              </h3>
              <p className="mt-1 text-[13px] text-[#9CA3AF]">{event.program}</p>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[#6B7280] sm:mt-2">
                {event.summary}
              </p>
            </div>
            {event.status === "upcoming" ? (
              <a
                href={`#rsvp-${event.slug}`}
                className="text-[13px] font-semibold text-brand transition-opacity hover:opacity-70 sm:justify-self-end"
              >
                RSVP →
              </a>
            ) : (
              <span className="text-[12px] font-medium tracking-[0.04em] text-[#9CA3AF] uppercase sm:justify-self-end">
                Past
              </span>
            )}
          </div>
          {event.status === "upcoming" ? (
            <div
              id={`rsvp-${event.slug}`}
              className="scroll-mt-28 rounded-[16px] border border-black/[0.06] bg-[#FAFAFA] p-4 sm:ml-[7.5rem] sm:p-5"
            >
              <InterestForm
                type="rsvp"
                eventSlug={event.slug}
                messagePlaceholder="Optional notes…"
                submitLabel={`RSVP · ${event.title}`}
                compact
              />
            </div>
          ) : null}
        </div>
      )}
    </article>
  );
}

export function EventsView() {
  const root = useRef<HTMLDivElement>(null);
  const [featured, ...restUpcoming] = upcomingEvents;

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
        <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:pt-24">
          <div data-reveal className="max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
              Talk It Initiative
            </p>
            <h1 className="mt-4 text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
              Events
            </h1>
            <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
              Circles, panels, and gatherings where young people practise honest
              conversation — online and across communities in Zambia.
            </p>
          </div>

          <nav
            data-reveal
            aria-label="Event sections"
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/[0.08] pt-7"
          >
            <a
              href="#upcoming"
              className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
            >
              Upcoming
            </a>
            <a
              href="#past"
              className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
            >
              Past events
            </a>
          </nav>
        </div>
      </section>

      {/* Upcoming */}
      <section id="upcoming" className="scroll-mt-24 bg-white pb-8 sm:pb-12">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="flex items-end justify-between gap-4 border-b border-black/[0.08] pb-6"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Calendar
              </p>
              <h2 className="mt-2 text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
                Upcoming gatherings
              </h2>
            </div>
            <p className="hidden max-w-[16rem] text-right text-[13px] leading-relaxed text-[#6B7280] sm:block">
              Register interest below — we’ll share joining details by email.
            </p>
          </div>

          {featured ? <EventRow event={featured} featured /> : null}

          <div className="border-t border-black/[0.08]">
            {restUpcoming.map((event) => (
              <EventRow key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section
        id="past"
        className="scroll-mt-24 border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div data-reveal className="mb-2">
            <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
              Archive
            </p>
            <h2 className="mt-2 text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              Past events
            </h2>
          </div>

          <div className="mt-8 border-t border-black/[0.08] bg-transparent">
            {pastEvents.map((event) => (
              <EventRow key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[32px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[40px]">
            Host a circle with us
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[#6B7280]">
            Campuses, community hubs, and partners can invite Talk It Initiative
            to facilitate a dialogue session or panel.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/partners#enquire" />}
              className="h-12 rounded-full bg-brand px-7 text-[15px] font-semibold text-white hover:bg-brand/90"
            >
              Partner to host
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/get-involved" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[15px] font-medium text-[#1F2937] hover:bg-white hover:text-[#1F2937]"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
