"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { InterestForm } from "@/components/forms/interest-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactFaqs, contactTopics } from "@/lib/contact";
import { site } from "@/lib/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ContactView() {
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
        <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-12 sm:px-8 sm:pt-20 sm:pb-16 lg:pt-24">
          <div data-reveal className="max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
              Talk It Initiative
            </p>
            <h1 className="mt-4 text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
              Contact
            </h1>
            <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
              Reach the team about volunteering, partnerships, donations,
              events, or anything else related to the work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-[1120px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div data-reveal className="space-y-10 lg:pt-2">
            <div>
              <p className="text-[13px] font-semibold text-[#1F2937]">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block text-[17px] font-semibold tracking-[-0.02em] text-brand transition-opacity hover:opacity-75 sm:text-[18px]"
              >
                {site.email}
              </a>
            </div>

            <div>
              <p className="text-[13px] font-semibold text-[#1F2937]">
                Based in
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-[#6B7280]">
                Zambia — with online gatherings and community sessions across
                provinces as the work grows.
              </p>
            </div>

            <div>
              <p className="text-[13px] font-semibold text-[#1F2937]">
                Looking for a pathway?
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/get-involved"
                    className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
                  >
                    Get Involved →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
                  >
                    Events →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
                  >
                    Partners →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/safeguarding"
                    className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-brand"
                  >
                    Safeguarding →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            data-reveal
            className="rounded-[24px] border border-black/[0.08] bg-[#FAFAFA] p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-[22px] font-bold tracking-[-0.025em] text-[#1F2937] sm:text-[24px]">
              Send a message
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
              Submit here and we’ll receive your message directly — no email app
              required.
            </p>

            <div className="mt-8">
              <InterestForm
                type="contact"
                topics={contactTopics}
                topicDefault="General enquiry"
                submitLabel="Send message"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="scroll-mt-28 border-t border-black/[0.06] bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="grid gap-6 border-b border-black/[0.08] pb-10 sm:grid-cols-[1fr_1.1fr] sm:items-end sm:gap-12 sm:pb-12"
          >
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
                FAQ
              </p>
              <h2 className="mt-3 max-w-[12ch] text-[28px] leading-[1.1] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[40px]">
                Common questions
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-[#6B7280] sm:text-[16px]">
              Quick answers before you write — still stuck? Email us and we’ll
              help you find the right next step.
            </p>
          </div>

          <div data-reveal className="mt-2">
            <Accordion className="w-full">
              {contactFaqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="border-b border-black/[0.08] last:border-b"
                >
                  <AccordionTrigger className="group/faq gap-6 rounded-none py-7 text-left hover:no-underline sm:gap-10 sm:py-8 **:data-[slot=accordion-trigger-icon]:text-brand **:data-[slot=accordion-trigger-icon]:size-5">
                    <span className="flex min-w-0 flex-1 items-start gap-5 sm:gap-8">
                      <span className="mt-1 shrink-0 font-mono text-[12px] tracking-[0.08em] text-brand/70 sm:text-[13px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[17px] leading-snug font-semibold tracking-[-0.02em] text-[#1F2937] transition-colors group-hover/faq:text-brand sm:text-[20px]">
                        {item.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 text-[15px] leading-relaxed text-[#6B7280] sm:pb-8 sm:text-[16px]">
                    <p className="max-w-2xl pl-[2.75rem] sm:pl-[4.25rem]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div
            data-reveal
            className="mt-12 flex flex-col gap-3 border-t border-black/[0.08] pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[14px] text-[#6B7280]">
              Prefer to talk directly?
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-[14px] font-semibold text-brand transition-opacity hover:opacity-70"
            >
              {site.email} →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
