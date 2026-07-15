"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { projects, type ProjectStatus } from "@/lib/projects";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const statusLabel: Record<ProjectStatus, string> = {
  active: "Active",
  completed: "Completed",
  upcoming: "Upcoming",
};

export function ProjectsView() {
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
              Projects
            </p>
            <h1 className="mt-4 text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
              Work on the ground
            </h1>
            <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
              Active, completed, and upcoming initiatives that turn dialogue
              into lasting practice across Zambia.
            </p>
          </div>

          <nav
            data-reveal
            aria-label="Project filters"
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/[0.08] pt-8 text-[14px]"
          >
            {(["active", "completed", "upcoming"] as const).map((status) => (
              <a
                key={status}
                href={`#${status}`}
                className="font-medium text-[#6B7280] capitalize transition-colors hover:text-brand"
              >
                {statusLabel[status]}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {(["active", "completed", "upcoming"] as const).map((status) => {
        const group = projects.filter((p) => p.status === status);
        if (group.length === 0) return null;
        return (
          <section
            key={status}
            id={status}
            className="scroll-mt-28 border-t border-black/[0.06] bg-white py-16 sm:py-20"
          >
            <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
              <h2
                data-reveal
                className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[30px]"
              >
                {statusLabel[status]}
              </h2>

              <div className="mt-8 space-y-0 border-t border-black/[0.08]">
                {group.map((project, index) => (
                  <article
                    key={project.slug}
                    id={project.slug}
                    data-reveal
                    className="scroll-mt-28 grid gap-6 border-b border-black/[0.08] py-10 sm:grid-cols-[5rem_1fr] sm:gap-10 sm:py-12 lg:grid-cols-[5rem_1.2fr_0.8fr]"
                  >
                    <p className="font-mono text-[13px] tracking-[0.08em] text-brand/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]">
                        <span className="font-semibold text-brand">
                          {project.period}
                        </span>
                        <span className="text-[#D1D5DB]">·</span>
                        <span className="text-[#6B7280]">{project.place}</span>
                      </div>
                      <h3 className="mt-2 text-[22px] font-bold tracking-[-0.025em] text-[#1F2937] sm:text-[26px]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-[12px] font-semibold tracking-[0.04em] text-brand uppercase">
                        {project.program}
                      </p>
                      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B7280]">
                        {project.summary}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {project.objectives.map((objective) => (
                          <li
                            key={objective}
                            className="text-[14px] leading-relaxed text-[#4B5563]"
                          >
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={cn("space-y-5 lg:pt-2")}>
                      <div>
                        <p className="text-[13px] font-semibold text-[#1F2937]">
                          Partners
                        </p>
                        <p className="mt-1 text-[14px] leading-relaxed text-[#6B7280]">
                          {project.partners}
                        </p>
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#1F2937]">
                          Outcomes
                        </p>
                        <p className="mt-1 text-[14px] leading-relaxed text-[#6B7280]">
                          {project.outcomes}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-20 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[32px] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[40px]">
            Bring a project to your community
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[#6B7280]">
            Host a circle, co-design outreach, or support provincial expansion.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/partners#enquire" />}
              className="h-12 rounded-full bg-brand px-7 text-[15px] font-semibold text-white hover:bg-brand/90"
            >
              Partner with us
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/impact" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[15px] font-medium text-[#1F2937]"
            >
              See impact
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
