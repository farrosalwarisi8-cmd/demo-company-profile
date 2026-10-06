"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Badge } from "@/components/ui/badge";

export function PortfolioPreview() {
  const items = portfolioItems.slice(0, 3);
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          title="Proyek yang Kami Kerjakan"
          description="Sebagian proyek terbaik kami dari berbagai sektor — detail lengkap tersedia di halaman portfolio."
        />
        <RevealStagger className="grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <RevealItem key={p.id}>
              <Link href={`/portfolio/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <PlaceholderImage
                    src={p.thumbnail}
                    alt={p.title}
                    className="aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Badge variant="warning" className="absolute left-4 top-4 capitalize">
                    {p.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location} &middot; {p.year}
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
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-10 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">
            Lihat Semua Proyek
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}