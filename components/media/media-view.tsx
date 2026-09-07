"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { InterestForm } from "@/components/forms/interest-form";
import { Button } from "@/components/ui/button";
import {
  mediaKitItems,
  mediaStories,
  pressBoilerplate,
} from "@/lib/media";
import { site } from "@/lib/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MediaView() {
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
              Media
            </p>
            <h1 className="mt-4 text-[44px] leading-[0.98] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[60px] lg:text-[68px]">
              Stories & press
            </h1>
            <p className="mt-6 max-w-[32rem] text-[16px] leading-relaxed text-[#6B7280] sm:text-[18px]">
              Narrative from the rooms we hold, plus what journalists and
              partners need to cover Talk It Initiative accurately.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            data-reveal
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              Recent stories
            </h2>
            <Link
              href="/impact#stories"
              className="text-[14px] font-semibold text-brand transition-opacity hover:opacity-70"
            >
              All impact stories →
            </Link>
          </div>

          <div className="mt-10 space-y-0 border-t border-black/[0.08]">
            {mediaStories.map((story, index) => (
              <article
                key={story.slug}
                data-reveal
                className="grid gap-4 border-b border-black/[0.08] py-8 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:gap-10 sm:py-10"
              >
                <p className="font-mono text-[13px] tracking-[0.08em] text-brand/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <div className="flex flex-wrap gap-x-3 text-[13px] text-[#6B7280]">
                    <span className="font-semibold text-brand">{story.type}</span>
                    <span className="text-[#D1D5DB]">·</span>
                    <span>{story.dateLabel}</span>
                  </div>
                  <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.02em] text-[#1F2937] sm:text-[22px]">
                    {story.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#6B7280]">
                    {story.summary}
                  </p>
                </div>
                <Link
                  href={story.href}
                  className="text-[13px] font-semibold text-brand sm:justify-self-end"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <h2
            data-reveal
            className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]"
          >
            Press kit
          </h2>
          <div className="mt-10 grid gap-8 border-t border-black/[0.08] pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {mediaKitItems.map((item) => (
              <div key={item.title} data-reveal>
                <h3 className="text-[16px] font-semibold text-[#1F2937]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <blockquote
            data-reveal
            className="mt-12 rounded-[22px] border border-black/[0.08] bg-[#FAFAFA] p-6 text-[15px] leading-relaxed text-[#4B5563] sm:p-8 sm:text-[16px]"
          >
            {pressBoilerplate}
          </blockquote>

          <p data-reveal className="mt-6 text-[14px] text-[#6B7280]">
            Media desk:{" "}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Media enquiry")}`}
              className="font-semibold text-brand"
            >
              {site.email}
            </a>
          </p>
        </div>
      </section>

      <section
        id="updates"
        className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAFAFA] py-16 sm:py-24"
      >
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
              Stay in the loop
            </p>
            <h2 className="mt-3 text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
              Occasional updates
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
              Circles, campaigns, and stories, no spam. You can unsubscribe any
              time.
            </p>
          </div>
          <div
            data-reveal
            className="rounded-[24px] border border-black/[0.08] bg-white p-6 sm:p-8"
          >
            <InterestForm
              type="newsletter"
              compact
              submitLabel="Join updates"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8" data-reveal>
          <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1F2937] sm:text-[36px]">
            Media enquiry
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[#6B7280]">
            Interviews, features, and photo requests.
          </p>
          <div className="mx-auto mt-8 max-w-md text-left">
            <InterestForm
              type="media"
              messageLabel="Your request"
              messagePlaceholder="Outlet, angle, deadline…"
              submitLabel="Send media enquiry"
              compact
            />
          </div>
          <Button
            nativeButton={false}
            render={<Link href="/transparency" />}
            variant="outline"
            className="mt-10 h-11 rounded-full border-black/10 bg-white px-6 text-[14px] font-medium"
          >
            Transparency & reports
          </Button>
        </div>
      </section>
    </div>
  );
}
