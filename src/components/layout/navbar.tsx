"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNavigation } from "@/data/company";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button-link";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 220 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const light = !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 no-print",
        scrolled || mobileOpen
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <Logo light={light} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {primaryNavigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) || pathname === item.href;
            if (item.isButton) {
              return (
                <li key={item.href} className="ml-2">
                  <ButtonLink href={item.href} size="sm">
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }
            if (item.children) {
              return (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? light
                          ? "text-white"
                          : "text-blue-700"
                        : light
                          ? "text-white/85 hover:text-white"
                          : "text-slate-700 hover:text-blue-700"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <ul className="w-64 rounded-xl border border-slate-100 bg-white p-2 shadow-lift">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3.5 py-2.5 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? light
                        ? "text-white"
                        : "text-blue-700"
                      : light
                        ? "text-white/85 hover:text-white"
                        : "text-slate-700 hover:text-blue-700"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg xl:hidden",
            light ? "text-white hover:bg-white/10" : "text-slate-800 hover:bg-slate-100"
          )}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white xl:hidden">
          <div className="container-page overflow-y-auto py-6">
            <ul className="divide-y divide-slate-100">
              {primaryNavigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href) || pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex min-h-[52px] items-center justify-between py-3 text-base font-medium",
                        active ? "text-blue-700" : "text-slate-800"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mb-3 space-y-1 border-l border-slate-100 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-1.5 text-sm text-slate-600"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <ButtonLink href="/kontak" className="w-full">
                Minta Penawaran
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}