"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealItem, RevealStagger } from "@/components/shared/reveal";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section id="layanan" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Solusi Konstruksi Terintegrasi"
          description="Dari perencanaan hingga serah terima — empat layanan utama yang saling melengkapi untuk kebutuhan proyek Anda."
        />
        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <RevealItem key={s.id}>
              <Link href={`/produk-layanan/${s.slug}`} className="group block h-full">
                <Card className="h-full transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lift group-hover:border-blue-300">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                      <ServiceIcon name={s.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {s.shortDescription}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {s.features.slice(0, 2).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-slate-500">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                      Selengkapnya
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}