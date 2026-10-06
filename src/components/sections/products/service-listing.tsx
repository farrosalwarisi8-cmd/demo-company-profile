"use client";

import Link from "next/link";
import { ArrowRight, Check, Download } from "lucide-react";
import { services } from "@/data/services";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

export function ServiceListing() {
  return (
    <section className="section">
      <div className="container-page space-y-20">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={s.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={cn(flip && "lg:order-2")}>
                <div className="relative overflow-hidden rounded-2xl shadow-card">
                  <PlaceholderImage src={s.image} alt={s.title} className="aspect-[3/2]" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-heading text-xs font-bold text-blue-700 backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
              </div>
              <div className={cn(flip && "lg:order-1")}>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{s.shortDescription}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={`/produk-layanan/${s.slug}`}>
                    Pelajari Layanan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/kontak" variant="outline">
                    Minta Penawaran
                  </ButtonLink>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="container-page mt-20">
        <Link
          href="/pdfs/product-catalog.pdf"
          className="flex items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 px-6 py-8 text-center text-blue-800 transition-colors hover:border-blue-400 hover:bg-blue-100"
        >
          <Download className="h-5 w-5" />
          <span className="font-semibold">Download Katalog Produk & Layanan (PDF)</span>
        </Link>
      </div>
    </section>
  );
}