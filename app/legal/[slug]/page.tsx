import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getLegalDoc, legalDocs } from "@/lib/legal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return legalDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return { title: "Legal" };
  return {
    title: doc.title,
    description: doc.description,
  };
}

export default async function LegalDocPage({ params }: Props) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-[760px] px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
        <p className="text-[13px] font-semibold tracking-[0.1em] text-brand uppercase">
          Legal
        </p>
        <h1 className="mt-4 text-[40px] leading-[1.02] font-bold tracking-[-0.04em] text-[#1F2937] sm:text-[52px]">
          {doc.title}
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-[#6B7280]">
          {doc.description}
        </p>
        <p className="mt-4 text-[13px] text-[#9CA3AF]">
          Last updated · {doc.updated}
        </p>

        <div className="mt-12 space-y-10 border-t border-black/[0.08] pt-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1F2937] sm:text-[22px]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-3">
                {section.body.map((para) => (
                  <p
                    key={para.slice(0, 48)}
                    className="text-[15px] leading-relaxed text-[#6B7280] sm:text-[16px]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav
          aria-label="Other legal pages"
          className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/[0.08] pt-8 text-[14px]"
        >
          {legalDocs
            .filter((item) => item.slug !== doc.slug)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/legal/${item.slug}`}
                className="font-medium text-[#6B7280] transition-colors hover:text-brand"
              >
                {item.title} →
              </Link>
            ))}
        </nav>
      </div>
    </article>
  );
}
