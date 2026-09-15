"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  constitutionMeta,
  constitutionPdf,
} from "@/lib/documents";
import { faqItems, resourcesItems } from "@/lib/governance";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ResourcesView() {
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
              Resources
            </p>
            <h1 className="mt-4 text-[24px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Documents & guides
            </h1>
            <p className="mt-6 max-w-[32rem] text-[14px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              Policies, reports, and materials that support transparency,
              learning, and accountable participation.
            </p>
          </div>
        </div>
      </section>

      <section
        id="constitution"
        className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end"
          >
            <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
              Constitution
            </h2>
            <p className="max-w-md text-[13px] leading-relaxed text-[#6B7280]">
              The supreme governing document of Talk It Initiative. Download the
              official 2025 Edition PDF adopted on 10 October 2025.
            </p>
          </div>
          <div
            data-reveal
            className="mt-8 border border-black/[0.08] bg-white p-6 sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold tracking-[0.06em] text-brand uppercase">
                  Governing document
                </p>
                <h3 className="mt-2 text-[16px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                  {constitutionMeta.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">
                  Adopted {constitutionMeta.adopted}. {constitutionMeta.edition}.{" "}
                  {constitutionMeta.pages} pages. Format: {constitutionMeta.format}.
                </p>
                {constitutionMeta.status === "pending-upload" ? (
                  <p className="mt-4 text-[13px] leading-relaxed text-[#6B7280]">
                    The approved PDF will appear here for download once the
                    Board publishes the file. You may also request it by email.
                  </p>
                ) : (
                  <p className="mt-4 text-[13px] leading-relaxed text-[#6B7280]">
                    Covers membership, leadership, committees, meetings,
                    finance, code of conduct, discipline, amendments and
                    dissolution. File: {constitutionMeta.fileName}.
                  </p>
                )}
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                {constitutionMeta.status === "available" && constitutionPdf ? (
                  <Button
                    nativeButton={false}
                    render={
                      <a
                        href={constitutionPdf}
                        download={constitutionMeta.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="h-10 rounded-full bg-brand px-5 text-[13px] font-semibold text-white hover:bg-brand/90"
                  >
                    Download PDF
                  </Button>
                ) : (
                  <Button
                    nativeButton={false}
                    render={
                      <Link
                        href={`mailto:talkitzambia50@gmail.com?subject=${encodeURIComponent("Constitution request")}`}
                      />
                    }
                    className="h-10 rounded-full bg-brand px-5 text-[13px] font-semibold text-white hover:bg-brand/90"
                  >
                    Request by email
                  </Button>
                )}
                <Link
                  href="/governance"
                  className="text-[13px] font-medium text-[#6B7280] transition-colors hover:text-brand"
                >
                  View governance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[24px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]"
          >
            Resource library
          </h2>
          <ul className="mt-10 border-t border-black/[0.08]">
            {resourcesItems.map((item) => (
              <li
                key={item.title}
                data-reveal
                className="grid gap-3 border-b border-black/[0.08] py-8 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10"
              >
                <div>
                  <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                    {item.body}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="text-[13px] font-semibold text-brand sm:justify-self-end"
                >
                  Open →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="faq"
        className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end sm:gap-12"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                FAQ
              </p>
              <h2 className="mt-3 max-w-[14ch] text-[24px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px] lg:text-[40px]">
                Common questions
              </h2>
            </div>
            <p className="max-w-md text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
              Quick answers about membership, volunteering, partnerships, and
              how Talk It Initiative works.
            </p>
          </div>

          <div data-reveal className="mt-2">
            <Accordion className="w-full">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.q}
                  value={item.q}
                  className="border-b border-black/[0.08] last:border-b"
                >
                  <AccordionTrigger className="group/faq gap-6 rounded-none py-7 text-left hover:no-underline sm:py-8 **:data-[slot=accordion-trigger-icon]:text-brand **:data-[slot=accordion-trigger-icon]:size-5">
                    <span className="text-[14px] leading-snug font-semibold tracking-[-0.02em] text-[#1F2937] transition-colors group-hover/faq:text-brand sm:text-[20px]">
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 text-[13px] leading-relaxed text-[#6B7280] sm:pb-8 sm:text-[14px]">
                    <p className="max-w-2xl">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
