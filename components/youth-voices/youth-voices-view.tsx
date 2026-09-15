"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  youthVoiceCategories,
  youthVoicesIntro,
  youthVoicesModerationNote,
} from "@/lib/youth-voices";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function YouthVoicesView() {
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
              Youth Voices
            </p>
            <h1 className="mt-4 text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Speak, write, create
            </h1>
            <p className="mt-6 max-w-[32rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              {youthVoicesIntro}
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
            Categories
          </h2>
          <div className="mt-10 grid gap-8 border-t border-black/[0.08] pt-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {youthVoiceCategories.map((item, index) => (
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
          <p data-reveal className="mt-10 text-[14px] text-[#6B7280]">
            {youthVoicesModerationNote}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
            Submit Your Voice
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
            Share an opinion, story, poem, video idea, or community narrative.
            We review every submission before publication.
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/contact?topic=youth-voices" />}
            className="mt-8 h-11 rounded-full bg-brand px-6 text-[14px] font-medium text-white hover:bg-brand/90"
          >
            Submit Your Voice
          </Button>
        </div>
      </section>
    </div>
  );
}
