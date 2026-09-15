import Link from "next/link";

import { SiteLogo } from "@/components/layout/site-logo";
import { footerNav, site, socialLinks } from "@/lib/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/[0.08] bg-white">
      <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
          {/* Brand */}
          <div className="max-w-sm shrink-0">
            <SiteLogo size="lg" />
            <p className="mt-5 text-[14px] leading-relaxed text-[#6B7280]">
              {site.description}
            </p>
            <p className="mt-5 text-[13px] font-semibold tracking-[-0.015em] text-[#1F2937]">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-[14px] text-brand transition-opacity hover:opacity-75"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="mt-1.5 block text-[14px] text-brand transition-opacity hover:opacity-75"
            >
              {site.phone}
            </a>
            {socialLinks.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13px] font-medium text-[#6B7280] transition-colors hover:text-brand"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Links */}
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-8 lg:max-w-xl">
            <div>
              <p className="text-[13px] font-semibold text-[#1F2937]">Explore</p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.explore.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-[#6B7280] transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[13px] font-semibold text-[#1F2937]">
                Get Involved
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.engage.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-[#6B7280] transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-[13px] font-semibold text-[#1F2937]">Legal</p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-[#6B7280] transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/[0.08] pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#9CA3AF]">
            © {year} Talk It Initiative. All rights reserved.
          </p>
          <p className="text-[13px] text-[#9CA3AF]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
