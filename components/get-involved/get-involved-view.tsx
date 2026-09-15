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
import { siteImages } from "@/lib/media";
import { donateChannels, donateUses, bankAccount, site } from "@/lib/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function PagePhoto({
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
              <h1 className="mt-4 max-w-[12ch] text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                Get Involved
              </h1>
              <p className="mt-6 max-w-[32rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                Join as a member, volunteer, partner or supporter. Help advance
                youth empowerment, civic participation and community
                transformation across Zambia.
              </p>
              <div className="mt-8">
                <Button
                  nativeButton={false}
                  render={<Link href="/membership" />}
                  className="h-12 rounded-full bg-brand px-7 text-[13px] font-semibold text-white hover:bg-brand/90"
                >
                  Become a member
                </Button>
              </div>
            </div>

            <div data-reveal>
              <PagePhoto
                src={siteImages.getInvolved[0]}
                className="aspect-[5/4] w-full lg:aspect-[4/3]"
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
            const isMembership = path.id === "membership";
            const isDonate = path.id === "donate";
            const photoIndex = Math.min(index, siteImages.getInvolved.length - 1);

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
                    <h2 className="mt-2 text-[24px] leading-[1.05] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                      {path.title}
                    </h2>
                    <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[#6B7280]">
                      {path.summary}
                    </p>
                    <p className="mt-4 text-[13px] font-medium text-[#9CA3AF]">
                      {path.commit}
                    </p>

                    <ul className="mt-8 space-y-3 border-t border-black/[0.06] pt-8">
                      {path.actions.map((action) => (
                        <li
                          key={action}
                          className="text-[13px] leading-relaxed text-[#4B5563]"
                        >
                          {action}
                        </li>
                      ))}
                    </ul>

                    {isDonate ? (
                      <div className="mt-8 space-y-6 border-t border-black/[0.06] pt-8">
                        <div>
                          <p className="text-[13px] font-semibold text-[#1F2937]">
                            Bank account details
                          </p>
                          <dl className="mt-4 space-y-3 border border-black/[0.08] bg-[#FAFAFA] p-5">
                            {(
                              [
                                ["Account name", bankAccount.accountName],
                                ["Account number", bankAccount.accountNumber],
                                ["Bank", bankAccount.bank],
                                ["Branch", bankAccount.branch],
                                ["Swift code", bankAccount.swift],
                                ["Currency", bankAccount.currency],
                              ] as const
                            ).map(([label, value]) => (
                              <div
                                key={label}
                                className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4"
                              >
                                <dt className="text-[12px] font-medium text-[#6B7280]">
                                  {label}
                                </dt>
                                <dd className="text-[13px] font-semibold tracking-[-0.01em] text-[#1F2937]">
                                  {value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <p className="mt-3 text-[12px] leading-relaxed text-[#9CA3AF]">
                            Issued {bankAccount.issuedOn} by{" "}
                            {bankAccount.issuedBy}. For payment references,
                            include your full name and purpose (donation,
                            sponsorship or programme support).
                          </p>
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#1F2937]">
                            Other ways to support
                          </p>
                          <ul className="mt-4 space-y-4">
                            {donateChannels
                              .filter((channel) => channel.title !== "Bank transfer")
                              .map((channel) => (
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
                            Where support goes
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
                            Accountability centre →
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="space-y-6">
                    <PagePhoto
                      src={siteImages.getInvolved[photoIndex]}
                      className="aspect-[5/4] w-full"
                    />
                    <div className="rounded-[24px] border border-black/[0.08] bg-[#FAFAFA] p-6 sm:p-7">
                      <h3 className="text-[14px] font-semibold text-[#1F2937]">
                        {path.cta}
                      </h3>
                      {isMembership ? (
                        <>
                          <p className="mt-1 text-[13px] text-[#6B7280]">
                            Open the membership page to review eligibility and
                            apply.
                          </p>
                          <div className="mt-5">
                            <Button
                              nativeButton={false}
                              render={<Link href="/membership" />}
                              className="h-11 w-full rounded-full bg-brand px-6 text-[14px] font-semibold text-white hover:bg-brand/90"
                            >
                              Go to membership
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="mt-1 text-[13px] text-[#6B7280]">
                            {isDonate
                              ? "Use the bank details above for transfers. Prefer a reply first? Send a short note and we’ll confirm receipt."
                              : "Submit interest and we’ll reply with next steps."}
                          </p>
                          <div className="mt-5">
                            <InterestForm
                              type={formType}
                              showOrganisation={path.id === "partner"}
                              showAmountHint={isDonate}
                              messageLabel={
                                isDonate
                                  ? "Anything we should know?"
                                  : "Message"
                              }
                              messagePlaceholder={
                                path.id === "volunteer"
                                  ? "Availability, location, skills…"
                                  : path.id === "partner"
                                    ? "Organisation, audience, timelines…"
                                    : "How you’d like to support, and any questions…"
                              }
                              submitLabel={path.cta}
                              compact
                            />
                          </div>
                        </>
                      )}
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
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
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
                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
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
          <h2 className="text-[24px] leading-[1.08] font-bold tracking-[-0.035em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-[#6B7280]">
            Write to us, tell us who you are and how you’d like to help. We’ll
            point you to the right next step.
          </p>
          <p className="mt-6 text-[13px] font-semibold text-[#1F2937]">
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
              render={<Link href="/membership" />}
              className="h-12 rounded-full bg-brand px-7 text-[13px] font-semibold text-white hover:bg-brand/90"
            >
              Membership
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white px-7 text-[13px] font-medium text-[#1F2937] hover:bg-white hover:text-[#1F2937]"
            >
              Contact form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
