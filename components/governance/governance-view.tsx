"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  boardRoles,
  governanceComponents,
  governanceIntro,
} from "@/lib/governance";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function GovernanceView() {
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
              Governance
            </p>
            <h1 className="mt-4 text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              How we are led
            </h1>
            <p className="mt-6 max-w-[32rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              {governanceIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/team" />}
                className="h-11 rounded-full bg-brand px-6 text-[14px] font-medium text-white hover:bg-brand/90"
              >
                Meet leadership
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/resources#constitution" />}
                variant="outline"
                className="h-11 rounded-full border-black/10 bg-white px-6 text-[14px] font-medium text-[#1F2937]"
              >
                Constitution
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Board roles
          </h2>
          <ul className="mt-10 grid gap-4 border-t border-black/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {boardRoles.map((role, index) => (
              <li
                key={role}
                data-reveal
                className="flex gap-4 text-[13px] leading-relaxed text-[#4B5563] sm:text-[14px]"
              >
                <span className="shrink-0 font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-[#1F2937]">{role}</span>
              </li>
            ))}
          </ul>
          <p data-reveal className="mt-8 text-[14px] text-[#6B7280]">
            See who currently holds these roles on the{" "}
            <Link href="/team" className="font-semibold text-brand">
              leadership page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Governance structures
          </h2>
          <div className="mt-10 grid gap-8 border-t border-black/[0.08] pt-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {governanceComponents.map((item, index) => (
              <div key={item.title} data-reveal>
                <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="max-w-xl">
              <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                Documents & accountability
              </h2>
              <p className="mt-4 text-[13px] leading-relaxed text-[#6B7280]">
                Read the Constitution, policies, and transparency commitments
                that guide how Talk It Initiative operates.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/resources#constitution" />}
                variant="outline"
                className="h-11 rounded-full border-black/10 bg-white px-6 text-[14px] font-medium text-[#1F2937]"
              >
                Resources
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/transparency" />}
                className="h-11 rounded-full bg-brand px-6 text-[14px] font-medium text-white hover:bg-brand/90"
              >
                Transparency
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
