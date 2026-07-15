"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { TestimonialsMarquee } from "@/components/home/testimonials-marquee";
import { Button } from "@/components/ui/button";
import { upcomingEvents } from "@/lib/events";
import { impactMetrics } from "@/lib/impact";
import { programs } from "@/lib/programs";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionPhoto({
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
        sizes="(max-width: 768px) 50vw, 400px"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Talk It Initiative gave me a space where I could finally speak about what I was carrying — and feel understood.",
    name: "Chanda M.",
    role: "Youth participant · Lusaka",
    initials: "CM",
  },
  {
    quote:
      "The conversations are honest, practical, and full of hope. This is how leadership should be formed.",
    name: "Thandiwe K.",
    role: "Volunteer facilitator",
    initials: "TK",
  },
  {
    quote:
      "Watching young people find their voice has been powerful. Talk It Initiative is building something lasting in our communities.",
    name: "Joseph S.",
    role: "Community partner",
    initials: "JS",
  },
  {
    quote:
      "I joined thinking I would help others. I left with clearer purpose and friends who hold me accountable.",
    name: "Mwansa B.",
    role: "Volunteer · Central Province",
    initials: "MB",
  },
  {
    quote:
      "As a parent, I finally saw my child open up. These spaces matter — and the facilitation is careful and respectful.",
    name: "Grace N.",
    role: "Parent supporter",
    initials: "GN",
  },
  {
    quote:
      "Partnering with Talk It Initiative strengthened our outreach. Their dialogue-first approach meets young people where they are.",
    name: "David L.",
    role: "NGO programme lead",
    initials: "DL",
  },
  {
    quote:
      "I used to stay quiet in rooms. Now I speak up — in class, at home, and for my peers.",
    name: "Natasha P.",
    role: "Campus circle member",
    initials: "NP",
  },
  {
    quote:
      "Donating felt different here. You can see the care in every session — real young people, real change.",
    name: "Kenneth R.",
    role: "Monthly donor",
    initials: "KR",
  },
];

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
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[#FAFAFA] px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-brand" />
              <p className="text-[12px] font-medium tracking-[0.02em] text-[#6B7280] sm:text-[13px]">
                Founded 2024 · Youth-led · Zambia
              </p>
            </div>

            <h2 className="mx-auto mt-8 max-w-[18ch] text-[34px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:mt-10 sm:text-[48px] lg:text-[56px]">
              From honest dialogue to confident leadership.
            </h2>

            <p className="mx-auto mt-6 max-w-[36rem] text-[16px] leading-relaxed text-[#6B7280] sm:mt-7 sm:text-[19px]">
              Talk It Initiative is dialogue-first — turning conversation into
              personal growth, community care, and civic action across Zambia.
            </p>
          </div>

          <div
            data-reveal
            className="mt-14 flex items-end justify-center gap-3 sm:mt-16 sm:gap-4 lg:gap-5"
          >
            <SectionPhoto
              className="hidden h-[220px] w-[150px] sm:block lg:h-[260px] lg:w-[180px]"
              position="object-[18%_22%]"
            />
            <SectionPhoto
              className="h-[200px] w-[140px] sm:h-[260px] sm:w-[170px] lg:h-[300px] lg:w-[200px]"
              position="object-[48%_40%]"
              priority
            />
            <SectionPhoto
              className="h-[160px] w-[140px] sm:h-[200px] sm:w-[160px] lg:h-[220px] lg:w-[180px]"
              position="object-[70%_45%]"
            />
            <SectionPhoto
              className="hidden h-[240px] w-[150px] md:block lg:h-[280px] lg:w-[175px]"
              position="object-[85%_35%]"
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

      {/* Programs — editorial split */}
      <section className="bg-[#FAFAFA] py-28 sm:py-36 lg:py-40">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                Our work
              </p>
              <h2 className="mt-4 max-w-[12ch] text-[36px] leading-[1.05] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[48px]">
                Where conversations become change.
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#6B7280] sm:text-[16px]">
                Each program opens a structured space for young people to speak
                with honesty — then leave with clarity, confidence, and a path
                to lead.
              </p>

              <div className="mt-8 hidden gap-3 sm:flex lg:mt-10">
                <SectionPhoto
                  className="h-[220px] w-[140px] lg:h-[260px] lg:w-[155px]"
                  position="object-[20%_28%]"
                />
                <SectionPhoto
                  className="mt-10 h-[180px] w-[120px] lg:h-[210px] lg:w-[135px]"
                  position="object-[70%_40%]"
                />
              </div>

              <Link
                href="/programs"
                className="mt-8 inline-flex text-[14px] font-semibold text-brand transition-opacity hover:opacity-70 lg:mt-10"
              >
                Explore programs →
              </Link>
            </div>

            <div className="border-t border-black/[0.08]">
              {programs.slice(0, 3).map((program, index) => (
                <article
                  key={program.title}
                  data-reveal
                  className="group grid gap-4 border-b border-black/[0.08] py-9 sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:py-11"
                >
                  <p className="font-mono text-[13px] tracking-[0.08em] text-brand/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <Link href={`/programs#${program.slug}`}>
                      <h3 className="text-[26px] font-bold tracking-[-0.03em] text-[#1F2937] transition-colors group-hover:text-brand sm:text-[32px]">
                        {program.title}
                      </h3>
                    </Link>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280] sm:text-[16px]">
                      {program.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact — typographic, no photos */}
      <section className="bg-white py-28 sm:py-36 lg:py-40">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-10 border-b border-black/[0.08] pb-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:pb-16"
          >
            <h2 className="max-w-[10ch] text-[36px] leading-[1.05] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[48px] lg:text-[52px]">
              Impact across Zambia
            </h2>
            <p className="max-w-md self-end text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
              Progress here is measured in courage spoken aloud — every dialogue
              session, panel, and gathering is another young person heard.
            </p>
          </div>

          <dl
            data-reveal
            className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-black/[0.08] lg:py-16"
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
                <dd className="mt-4 text-[14px] font-semibold tracking-[-0.01em] text-[#1F2937]">
                  {item.label}
                </dd>
                <p className="mt-2 text-[14px] text-[#6B7280]">{item.detail}</p>
              </div>
            ))}
          </dl>

          <div data-reveal className="border-t border-black/[0.08] pt-8">
            <Link
              href="/impact"
              className="inline-flex text-[14px] font-semibold text-brand transition-opacity hover:opacity-70"
            >
              Read impact stories →
            </Link>
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
              <h2 className="mt-3 text-[34px] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[48px]">
                Upcoming gatherings
              </h2>
            </div>
            <Link
              href="/events"
              className="text-[14px] font-semibold text-brand transition-opacity hover:opacity-70"
            >
              View all →
            </Link>
          </div>

          <ul className="mt-12 space-y-4 sm:mt-14">
            {upcomingEvents.map((event) => (
              <li
                key={event.slug}
                data-reveal
                className="grid items-center gap-4 rounded-[22px] border border-black/[0.05] bg-white p-3 sm:grid-cols-[7.5rem_1fr] sm:gap-6 sm:p-4"
              >
                <SectionPhoto
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
        </div>
      </section>

      {/* Testimonials — vertical auto-scroll social proof */}
      <section className="bg-white py-28 sm:py-36 lg:py-40">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div data-reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                In their words
              </p>
              <h2 className="mt-4 text-[34px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[48px]">
                People who joined Talk It Initiative.
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#6B7280] sm:text-[17px]">
                From first-time participants to volunteers, partners, and donors —
                these voices show what becomes possible when you step into the
                circle.
              </p>
            </div>
            <Link
              href="/get-involved"
              className="shrink-0 text-[14px] font-semibold text-brand transition-opacity hover:opacity-70"
            >
              Join them →
            </Link>
          </div>

          <div>
            <TestimonialsMarquee items={testimonials} />
          </div>
        </div>
      </section>

      {/* Closing CTA — one clear composition */}
      <section className="relative isolate overflow-hidden bg-[#043a57]">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover object-[58%_42%] opacity-45"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,45,70,0.94)_0%,rgba(6,87,130,0.72)_55%,rgba(6,87,130,0.55)_100%)]"
          aria-hidden
        />

        <div
          className="relative mx-auto flex min-h-[min(78vh,720px)] max-w-[1120px] flex-col justify-end px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
          data-reveal
        >
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-white/60 uppercase">
              Talk It Initiative
            </p>
            <h2 className="mt-5 text-[40px] leading-[1.02] font-bold tracking-[-0.04em] text-white sm:text-[56px] lg:text-[64px]">
              Your voice belongs here.
            </h2>
            <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-white/75 sm:text-[18px]">
              Join the circle — volunteer, partner, or give — and help create
              safer spaces where young people in Zambia can speak and lead.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center">
              <Button
                nativeButton={false}
                render={<Link href="/get-involved" />}
                className="h-12 rounded-full bg-white px-8 text-[15px] font-semibold text-brand hover:bg-white/92"
              >
                Join the circle
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/get-involved#donate" />}
                variant="outline"
                className="h-12 rounded-full border-white/30 bg-transparent px-8 text-[15px] font-medium text-white hover:bg-white/10 hover:text-white"
              >
                Give today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
