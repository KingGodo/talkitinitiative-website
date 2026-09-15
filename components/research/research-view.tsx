"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { researchAreas, researchIntro } from "@/lib/research";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ResearchView() {
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
              Research & Advocacy
            </p>
            <h1 className="mt-4 text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Evidence for change
            </h1>
            <p className="mt-6 max-w-[32rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              {researchIntro}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Focus areas
          </h2>
          <div className="mt-10 grid gap-8 border-t border-black/[0.08] pt-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {researchAreas.map((item, index) => (
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

      <section className="bg-white py-16 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
            Work with us on research
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
            Collaborate on surveys, briefs, campaigns, or civic education
            resources. Reach out or explore partnership pathways.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/contact?topic=research" />}
              className="h-11 rounded-full bg-brand px-6 text-[14px] font-medium text-white hover:bg-brand/90"
            >
              Contact us
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/partners" />}
              variant="outline"
              className="h-11 rounded-full border-black/10 bg-white px-6 text-[14px] font-medium text-[#1F2937]"
            >
              Partner with us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
