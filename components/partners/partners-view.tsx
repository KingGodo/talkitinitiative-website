"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { InterestForm } from "@/components/forms/interest-form";
import { Button } from "@/components/ui/button";
import {
  featuredPartners,
  partnerPrinciples,
  partnerTypes,
} from "@/lib/partners";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PartnersView() {
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
              Partners
            </p>
            <h1 className="mt-4 text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
              Build the room with us
            </h1>
            <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
              Schools, campuses, NGOs, and community hubs help Talk It Initiative
              open safer spaces for young people across Zambia.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]"
          >
            Who we partner with
          </h2>
          <div className="mt-10 grid gap-8 border-t border-black/[0.08] pt-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {partnerTypes.map((item, index) => (
              <div key={item.title} data-reveal>
                <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.02em] text-[#1F2937]">
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
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end"
          >
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              Current collaborators
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-[#6B7280]">
              Named logos appear here once partners approve a public listing.
              Until then, these are the kinds of relationships already carrying
              the work.
            </p>
          </div>

          <ul className="mt-2">
            {featuredPartners.map((partner) => (
              <li
                key={partner.name}
                data-reveal
                className="grid gap-3 border-b border-black/[0.08] py-8 sm:grid-cols-[10rem_1fr_auto] sm:items-start sm:gap-10"
              >
                <p className="text-[13px] font-semibold tracking-[0.04em] text-brand uppercase">
                  {partner.type}
                </p>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                    {partner.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]">
                    {partner.summary}
                  </p>
                </div>
                <span
                  className={cn(
                    "text-[12px] font-medium tracking-[0.04em] uppercase sm:justify-self-end",
                    partner.status === "open" ? "text-brand" : "text-[#9CA3AF]"
                  )}
                >
                  {partner.status === "open" ? "Open" : "Active"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]"
          >
            How we work together
          </h2>
          <ul className="mt-10 space-y-4 border-t border-black/[0.08] pt-8">
            {partnerPrinciples.map((principle) => (
              <li
                key={principle}
                data-reveal
                className="text-[15px] leading-relaxed text-[#4B5563] sm:text-[16px]"
              >
                {principle}
              </li>
            ))}
          </ul>
          <p data-reveal className="mt-8 text-[14px] text-[#6B7280]">
            Read our{" "}
            <Link href="/legal/safeguarding" className="font-semibold text-brand">
              safeguarding policy
            </Link>{" "}
            before hosting a circle.
          </p>
        </div>
      </section>

      <section
        id="enquire"
        className="scroll-mt-28 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-reveal>
            <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
              Partnership enquiry
            </p>
            <h2 className="mt-3 text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              Start a conversation
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
              Tell us who you are, where you work, and how you’d like to host or
              co-design with Talk It Initiative.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/get-involved#partner" />}
              variant="outline"
              className="mt-8 h-11 rounded-full border-black/10 bg-white px-6 text-[14px] font-medium text-[#1F2937]"
            >
              More on partnering
            </Button>
          </div>
          <div
            data-reveal
            className="rounded-[24px] border border-black/[0.08] bg-[#FAFAFA] p-6 sm:p-8"
          >
            <InterestForm
              type="partner"
              showOrganisation
              messageLabel="How would you like to partner?"
              messagePlaceholder="Venue, co-design, audience, timelines…"
              submitLabel="Send partnership enquiry"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
