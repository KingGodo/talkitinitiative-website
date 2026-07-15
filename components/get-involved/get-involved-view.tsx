"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { InterestForm } from "@/components/forms/interest-form";
import { Button } from "@/components/ui/button";
import {
  involvementExtras,
  involvementPaths,
} from "@/lib/get-involved";
import type { InterestType } from "@/lib/interest";
import { donateChannels, donateUses, site } from "@/lib/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function PagePhoto({
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
        alt="Young people gathered in conversation with Talk It Initiative"
        fill
        unoptimized
        priority={priority}
        className={cn("object-cover", position)}
        sizes="(max-width: 768px) 100vw, 560px"
      />
    </div>
  );
}

const pathFormType: Record<string, InterestType> = {
  volunteer: "volunteer",
  partner: "partner",
  donate: "donate",
};

export function GetInvolvedView() {
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
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div data-reveal>
              <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
                Talk It Initiative
              </p>
              <h1 className="mt-4 max-w-[12ch] text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
                Get Involved
              </h1>
              <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
                Your voice belongs in this work. Volunteer, partner, or give —
                and help create safer spaces where young people in Zambia can
                speak and lead.
              </p>
            </div>

            <div data-reveal>
              <PagePhoto
                className="aspect-[5/4] w-full lg:aspect-[4/3]"
                position="object-[35%_40%]"
                priority
              />
            </div>
          </div>

          <nav
            data-reveal
            aria-label="Ways to get involved"
            className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-black/[0.08] pt-8 sm:mt-16"
          >
            {involvementPaths.map((path, index) => (
              <a
                key={path.id}
                href={`#${path.id}`}
                className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
              >
                <span className="mr-2 font-mono text-[12px] text-brand/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {path.title}
              </a>
            ))}
            {involvementExtras.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white pb-6 sm:pb-10">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          {involvementPaths.map((path, index) => {
            const reverse = index % 2 === 1;
            const formType = pathFormType[path.id] ?? "contact";
            return (
              <article
                key={path.id}
                id={path.id}
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
                    <p className="mt-3 text-[13px] font-semibold tracking-[0.06em] text-brand uppercase">
                      {path.eyebrow}
                    </p>
                    <h2 className="mt-2 text-[32px] leading-[1.05] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[42px]">
                      {path.title}
                    </h2>
                    <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#6B7280]">
                      {path.summary}
                    </p>
                    <p className="mt-4 text-[13px] font-medium text-[#9CA3AF]">
                      {path.commit}
                    </p>

                    <ul className="mt-8 space-y-3 border-t border-black/[0.06] pt-8">
                      {path.actions.map((action) => (
                        <li
                          key={action}
                          className="text-[15px] leading-relaxed text-[#4B5563]"
                        >
                          {action}
                        </li>
                      ))}
                    </ul>

                    {path.id === "donate" ? (
                      <div className="mt-8 space-y-6 border-t border-black/[0.06] pt-8">
                        <div>
                          <p className="text-[13px] font-semibold text-[#1F2937]">
                            How to give
                          </p>
                          <ul className="mt-4 space-y-4">
                            {donateChannels.map((channel) => (
                              <li key={channel.title}>
                                <p className="text-[14px] font-semibold text-[#1F2937]">
                                  {channel.title}
                                </p>
                                <p className="mt-1 text-[14px] leading-relaxed text-[#6B7280]">
                                  {channel.detail}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#1F2937]">
                            Where gifts go
                          </p>
                          <ul className="mt-3 space-y-2">
                            {donateUses.map((use) => (
                              <li
                                key={use}
                                className="text-[14px] leading-relaxed text-[#4B5563]"
                              >
                                {use}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/transparency"
                            className="mt-4 inline-block text-[13px] font-semibold text-brand"
                          >
                            Full transparency page →
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="space-y-6">
                    <PagePhoto
                      className="aspect-[5/4] w-full"
                      position={
                        index === 0
                          ? "object-[22%_30%]"
                          : index === 1
                            ? "object-[70%_40%]"
                            : "object-[48%_55%]"
                      }
                    />
                    <div className="rounded-[24px] border border-black/[0.08] bg-[#FAFAFA] p-6 sm:p-7">
                      <h3 className="text-[17px] font-semibold text-[#1F2937]">
                        {path.cta}
                      </h3>
                      <p className="mt-1 text-[13px] text-[#6B7280]">
                        Submit interest — we’ll reply with next steps
                        {path.id === "donate"
                          ? " and verified payment details"
                          : ""}
                        .
                      </p>
                      <div className="mt-5">
                        <InterestForm
                          type={formType}
                          showOrganisation={path.id === "partner"}
                          showAmountHint={path.id === "donate"}
                          messageLabel={
                            path.id === "donate"
                              ? "Anything we should know?"
                              : "Message"
                          }
                          messagePlaceholder={
                            path.id === "volunteer"
                              ? "Availability, location, skills…"
                              : path.id === "partner"
                                ? "Venue, audience, timelines…"
                                : "One-time or monthly, preference for MoMo or bank…"
                          }
                          submitLabel={path.cta}
                          compact
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]"
          >
            More ways in
          </h2>
          <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-2">
            {involvementExtras.map((item) => (
              <div
                key={item.id}
                id={item.id}
                data-reveal
                className="scroll-mt-28 rounded-[24px] border border-black/[0.08] bg-white p-6 sm:p-8"
              >
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]">
                  {item.body}
                </p>
                <div className="mt-6">
                  <InterestForm
                    type={item.id === "internship" ? "internship" : "campaign"}
                    messagePlaceholder="Tell us how you’d like to take part…"
                    submitLabel="Enquire"
                    compact
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div
          className="mx-auto max-w-[720px] px-5 text-center sm:px-8"
          data-reveal
        >
          <h2 className="text-[32px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[40px]">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[#6B7280]">
            Write to us — tell us who you are and how you’d like to help. We’ll
            point you to the right next step.
          </p>
          <p className="mt-6 text-[15px] font-semibold text-[#1F2937]">
            <a
              href={`mailto:${site.email}`}
              className="text-brand transition-opacity hover:opacity-75"
            >
              {site.email}
            </a>
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="h-12 rounded-full bg-brand px-7 text-[15px] font-semibold text-white hover:bg-brand/90"
            >
              Contact form
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/programs" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[15px] font-medium text-[#1F2937] hover:bg-white hover:text-[#1F2937]"
            >
              View programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
