"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/navigation";
import {
  accountabilitySections,
  fundUses,
  governanceNotes,
  policyLinks,
  reportPlaceholders,
} from "@/lib/transparency";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function TransparencyView() {
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
              Accountability
            </p>
            <h1 className="mt-4 text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Accountability centre
            </h1>
            <p className="mt-6 max-w-[32rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              Members, partners, donors and communities deserve clarity on how
              Talk It Initiative is governed, how support is used, and which
              policies guide our work.
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
            Governance & reporting
          </h2>
          <ul className="mt-10 border-t border-black/[0.08]">
            {accountabilitySections.map((item) => (
              <li
                key={item.title}
                data-reveal
                className="grid gap-3 border-b border-black/[0.08] py-8 sm:grid-cols-[1fr_8rem] sm:items-start sm:gap-10"
              >
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1F2937]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                    {item.body}
                  </p>
                  {"href" in item && item.href ? (
                    <Link
                      href={item.href}
                      className="mt-3 inline-block text-[13px] font-semibold text-brand"
                    >
                      Open →
                    </Link>
                  ) : null}
                </div>
                <span className="text-[12px] font-medium tracking-[0.04em] text-[#9CA3AF] uppercase sm:justify-self-end">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Where support goes
          </h2>
          <div className="mt-10 grid gap-8 border-t border-black/[0.08] pt-10 sm:grid-cols-3">
            {fundUses.map((item, index) => (
              <div key={item.title} data-reveal>
                <p className="font-mono text-[12px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[12px] font-semibold tracking-[0.04em] text-brand uppercase">
                  {item.share}
                </p>
                <h3 className="mt-2 text-[14px] font-semibold text-[#1F2937]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p data-reveal className="mt-10 text-[14px] text-[#6B7280]">
            Ready to support?{" "}
            <Link
              href="/get-involved#donate"
              className="font-semibold text-brand"
            >
              See Support Our Work →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Reports & documents
          </h2>
          <ul className="mt-10 border-t border-black/[0.08]">
            {reportPlaceholders.map((report) => (
              <li
                key={report.title}
                data-reveal
                className="grid gap-3 border-b border-black/[0.08] py-8 sm:grid-cols-[1fr_8rem] sm:items-start sm:gap-10"
              >
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1F2937]">
                    {report.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                    {report.body}
                  </p>
                  {"href" in report && report.href ? (
                    <Link
                      href={report.href}
                      className="mt-3 inline-block text-[13px] font-semibold text-brand"
                    >
                      Open →
                    </Link>
                  ) : null}
                </div>
                <span className="text-[12px] font-medium tracking-[0.04em] text-[#9CA3AF] uppercase sm:justify-self-end">
                  {report.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Policies
          </h2>
          <ul className="mt-10 border-t border-black/[0.08]">
            {policyLinks.map((policy) => (
              <li
                key={policy.title}
                data-reveal
                className="grid gap-3 border-b border-black/[0.08] py-8 sm:grid-cols-[1fr_8rem] sm:items-start sm:gap-10"
              >
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1F2937]">
                    {policy.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                    {policy.body}
                  </p>
                  {"href" in policy && policy.href ? (
                    <Link
                      href={policy.href}
                      className="mt-3 inline-block text-[13px] font-semibold text-brand"
                    >
                      Open →
                    </Link>
                  ) : null}
                </div>
                <span className="text-[12px] font-medium tracking-[0.04em] text-[#9CA3AF] uppercase sm:justify-self-end">
                  {policy.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Governance notes
          </h2>
          <ul className="mt-8 space-y-4">
            {governanceNotes.map((note) => (
              <li
                key={note}
                data-reveal
                className="text-[13px] leading-relaxed text-[#4B5563]"
              >
                {note}
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-10 space-y-4">
            <p className="text-[14px] leading-relaxed text-[#6B7280]">
              Accountability contact:{" "}
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Accountability enquiry")}`}
                className="font-semibold text-brand"
              >
                {site.email}
              </a>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/governance" />}
                className="h-11 rounded-full bg-brand px-6 text-[14px] font-semibold text-white hover:bg-brand/90"
              >
                Governance
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/legal/safeguarding" />}
                variant="outline"
                className="h-11 rounded-full border-black/10 bg-white px-6 text-[14px] font-medium"
              >
                Safeguarding policy
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
