"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { InterestForm } from "@/components/forms/interest-form";
import { Button } from "@/components/ui/button";
import {
  membershipBenefits,
  membershipCategories,
  membershipFeeNote,
  membershipIntro,
  membershipWho,
} from "@/lib/membership";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MembershipView() {
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
              Membership
            </p>
            <h1 className="mt-4 text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Become a Member
            </h1>
            <p className="mt-6 max-w-[32rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              {membershipIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/contact?topic=membership" />}
                className="h-11 rounded-full bg-brand px-6 text-[14px] font-medium text-white hover:bg-brand/90"
              >
                Apply via contact
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="#apply" />}
                variant="outline"
                className="h-11 rounded-full border-black/10 bg-white px-6 text-[14px] font-medium text-[#1F2937]"
              >
                Express interest
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
            Who can join
          </h2>
          <p
            data-reveal
            className="mt-6 max-w-2xl text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]"
          >
            {membershipWho}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Member benefits
          </h2>
          <ul className="mt-10 space-y-4 border-t border-black/[0.08] pt-8">
            {membershipBenefits.map((benefit) => (
              <li
                key={benefit}
                data-reveal
                className="text-[13px] leading-relaxed text-[#4B5563] sm:text-[14px]"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Membership categories
          </h2>
          <div className="mt-10 grid gap-8 border-t border-black/[0.08] pt-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {membershipCategories.map((item, index) => (
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
            {membershipFeeNote}
          </p>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-28 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-reveal>
            <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
              Join us
            </p>
            <h2 className="mt-3 text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Start your membership interest
            </h2>
            <p className="mt-5 max-w-md text-[13px] leading-relaxed text-[#6B7280]">
              Tell us who you are and why you want to join. We will follow up
              with next steps once the Board confirms the membership process.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/contact?topic=membership" />}
              variant="outline"
              className="mt-8 h-11 rounded-full border-black/10 bg-white px-6 text-[14px] font-medium text-[#1F2937]"
            >
              Or write via Contact
            </Button>
          </div>
          <div
            data-reveal
            className="rounded-[24px] border border-black/[0.08] bg-[#FAFAFA] p-6 sm:p-8"
          >
            <InterestForm
              type="contact"
              topicDefault="Membership"
              messageLabel="Why do you want to join?"
              messagePlaceholder="Tell us about yourself, your interests, and how you hope to contribute…"
              submitLabel="Send membership interest"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
