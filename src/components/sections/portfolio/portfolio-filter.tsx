"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/types";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type FilterValue = PortfolioCategory | "semua";

export function PortfolioFilter() {
  const [active, setActive] = React.useState<FilterValue>("semua");

  const filtered =
    active === "semua"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-wrap justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setActive(c.value)}
              aria-pressed={active === c.value}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                active === c.value
                  ? "bg-blue-700 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div key={active} className="mt-10 grid animate-fade-in gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <PlaceholderImage
                  src={p.thumbnail}
                  alt={p.title}
                  className="aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Badge variant="warning" className="absolute left-4 top-4 capitalize">
                  {p.category}
                </Badge>
              </div>
              <div className="p-5">
                <p className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.location} &middot; {p.client}
                </p>
                <h3 className="mt-2 text-base font-bold leading-snug group-hover:text-blue-700">
                  {p.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                  Lihat Studi Kasus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}