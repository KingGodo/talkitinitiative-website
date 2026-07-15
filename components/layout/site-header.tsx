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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
        <SiteLogo priority />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
          aria-label="Primary"
        >
          <div className="flex items-center gap-0.5 rounded-full border border-black/[0.06] bg-white px-1.5 py-1.5">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-[13px] font-medium transition-colors xl:px-3.5",
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

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<Link href="/get-involved#donate" />}
            className="hidden h-10 rounded-full bg-brand px-4 text-[13px] font-semibold text-white hover:bg-brand/90 lg:inline-flex sm:px-5"
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
