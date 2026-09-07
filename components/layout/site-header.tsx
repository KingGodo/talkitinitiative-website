"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { SiteLogo } from "@/components/layout/site-logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, site } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-3 px-5 sm:h-[4.25rem] sm:gap-4 sm:px-8">
        <SiteLogo priority className="shrink-0" />

        <nav
          className="mx-auto hidden min-w-0 flex-1 justify-center lg:flex"
          aria-label="Primary"
        >
          <div className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-black/[0.06] bg-white px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "shrink-0 rounded-full px-2 py-1.5 text-[11px] font-medium whitespace-nowrap transition-colors xl:px-2.5 xl:text-[12px] 2xl:px-3 2xl:text-[13px]",
                    active
                      ? "bg-[#065782]/10 font-semibold text-[#065782]"
                      : "text-[#1F2937]/75 hover:bg-[#065782]/06 hover:text-[#065782]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <Button
            nativeButton={false}
            render={<Link href="/get-involved#donate" />}
            className="hidden h-9 rounded-full bg-brand px-4 text-[12px] font-semibold whitespace-nowrap text-white hover:bg-brand/90 lg:inline-flex xl:h-10 xl:px-5 xl:text-[13px]"
          >
            Donate
          </Button>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#1F2937] hover:bg-black/5"
                  />
                }
              >
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100%,20rem)]">
                <SheetHeader>
                  <SheetTitle className="sr-only">{site.name}</SheetTitle>
                  <SiteLogo />
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                  {mainNav.map((item) => {
                    const active = isActivePath(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "rounded-lg px-3 py-3 text-[15px] font-medium transition-colors",
                          active
                            ? "bg-[#065782]/10 font-semibold text-[#065782]"
                            : "text-[#1F2937] hover:bg-[#065782]/06"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <Button
                    nativeButton={false}
                    render={
                      <Link
                        href="/get-involved#donate"
                        onClick={() => setOpen(false)}
                      />
                    }
                    className="mt-3 h-11 w-full rounded-full bg-brand text-[14px] font-semibold text-white hover:bg-brand/90"
                  >
                    Donate
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
