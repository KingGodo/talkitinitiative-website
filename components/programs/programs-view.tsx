"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/media";
import { programs } from "@/lib/programs";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ProgramPhoto({
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

export function ProgramsView() {
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
      {/* Hero, one composition */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div data-reveal>
              <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
                Talk It Initiative
              </p>
              <h1 className="mt-4 max-w-[10ch] text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
                Programs
              </h1>
              <p className="mt-6 max-w-[30rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
                Structured spaces where young people speak with honesty, then
                leave with clarity, confidence, and a path to lead.
              </p>
            </div>

            <div data-reveal className="relative">
              <ProgramPhoto
                src={siteImages.programs[0]}
                className="aspect-[5/4] w-full lg:aspect-[4/3]"
                priority
              />
            </div>
          </div>

          <nav
            data-reveal
            aria-label="Program list"
            className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-black/[0.08] pt-8 sm:mt-16"
          >
            {programs.map((program, index) => (
              <a
                key={program.slug}
                href={`#${program.slug}`}
                className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
              >
                <span className="mr-2 font-mono text-[12px] text-brand/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {program.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >
            <h2 className="max-w-[12ch] text-[28px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              How our programs work
            </h2>
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
              {[
                {
                  title: "Dialogue first",
                  body: "Every program begins with a room where young people can speak without performance.",
                },
                {
                  title: "Guided carefully",
                  body: "Facilitators hold space with structure, honesty invited, judgment left outside.",
                },
                {
                  title: "Action next",
                  body: "Insight becomes practice: leadership habits, peer support, and community steps.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-[15px] font-semibold text-[#1F2937]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program details */}
      <section className="bg-white py-6 sm:py-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          {programs.map((program, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={program.slug}
                id={program.slug}
                className="scroll-mt-28 border-t border-black/[0.08] py-16 sm:py-20 lg:py-24"
              >
                <div
                  data-reveal
                  className={cn(
                    "grid items-start gap-10 lg:grid-cols-2 lg:gap-14",
                    reverse &&
                      "lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1"
                  )}
                >
                  <div>
                    <p className="font-mono text-[13px] tracking-[0.08em] text-brand/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-[32px] leading-[1.05] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[42px]">
                      {program.title}
                    </h2>
                    <p className="mt-2 text-[13px] font-semibold tracking-[0.04em] text-brand uppercase">
                      {program.focus}
                    </p>
                    <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#6B7280]">
                      {program.summary}
                    </p>
                  </div>

                  <ProgramPhoto
                    src={program.image}
                    className="aspect-[5/4] w-full"
                    position={program.position}
                  />
                </div>

                <div
                  data-reveal
                  className="mt-12 grid gap-10 border-t border-black/[0.06] pt-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:pt-12"
                >
                  {(
                    [
                      ["Objectives", program.objectives],
                      ["Who it’s for", program.beneficiaries],
                      ["Activities", program.activities],
                      ["Outcomes", program.outcomes],
                    ] as const
                  ).map(([label, items]) => (
                    <div key={label}>
                      <p className="text-[13px] font-semibold text-[#1F2937]">
                        {label}
                      </p>
                      <ul className="mt-4 space-y-3">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="text-[14px] leading-relaxed text-[#6B7280]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[32px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[40px]">
            Ready to step into a program?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[#6B7280]">
            Volunteer, join a circle, or partner with Talk It Initiative, every
            new voice strengthens the work.
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
