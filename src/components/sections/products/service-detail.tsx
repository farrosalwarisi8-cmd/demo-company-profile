"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, FileText, MapPin } from "lucide-react";
import type { PortfolioItem, Service } from "@/types";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Tabs } from "@/components/ui/tabs";
import { AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function ServiceDetail({ service, related }: { service: Service; related: PortfolioItem[] }) {
  return (
    <>
      <section className="section pt-10">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="outline" className="uppercase tracking-wide">
              Layanan
            </Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">{service.title}</h1>
            <p className="mt-4 leading-relaxed text-slate-600">{service.fullDescription}</p>
            <ul className="mt-6 space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/kontak">Minta Penawaran</ButtonLink>
              <ButtonLink href="/portfolio" variant="outline">
                Lihat Portfolio
              </ButtonLink>
            </div>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <PlaceholderImage src={service.image} alt={service.title} className="aspect-[4/3]" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold md:text-3xl">Lingkup Layanan & Spesifikasi</h2>
          <div className="mt-8">
            <Tabs
              defaultValue="spesifikasi"
              tabs={[
                { value: "spesifikasi", label: "Spesifikasi" },
                { value: "proses", label: "Proses Kerja" },
                { value: "faq", label: "FAQ" },
              ]}
            >
              {(value) => (
                <>
                  {value === "spesifikasi" && (
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      {service.specifications.map((spec, i) => (
                        <div
                          key={spec.label}
                          className={`grid grid-cols-1 gap-1 p-5 sm:grid-cols-3 sm:gap-6 ${i % 2 ? "bg-slate-50" : ""}`}
                        >
                          <p className="text-sm font-bold text-slate-900">{spec.label}</p>
                          <p className="text-sm text-slate-600 sm:col-span-2">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {value === "proses" && (
                    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {service.process.map((p) => (
                        <li key={p.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 font-heading text-lg font-bold text-white">
                            {p.step}
                          </span>
                          <h3 className="mt-4 font-bold">{p.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
                        </li>
                      ))}
                    </ol>
                  )}
                  {value === "faq" && (
                    <div className="space-y-3">
                      {service.faq.map((q) => (
                        <AccordionItem key={q.question} value={q.question} question={q.question} answer={q.answer} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </Tabs>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <FileText className="h-5 w-5" />
              </span>
              <p className="text-sm text-slate-700">
                <strong>Perlu dokumen spesifikasi?</strong>
                <br />
                Unduh spec sheet lengkap layanan ini.
              </p>
            </div>
            <Link
              href="/pdfs/company-profile.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              <Download className="h-4 w-4" />
              Download Spec Sheet
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container-page">
            <h2 className="text-2xl font-extrabold md:text-3xl">Proyek Terkait</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="relative overflow-hidden">
                    <PlaceholderImage src={p.thumbnail} alt={p.title} className="aspect-[16/10] transition-transform duration-500 group-hover:scale-105" />
                    <Badge variant="warning" className="absolute left-4 top-4 capitalize">
                      {p.category}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <p className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location} &middot; {p.year}
                    </p>
                    <h3 className="mt-2 text-base font-bold leading-snug group-hover:text-blue-700">{p.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                      Lihat Studi Kasus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}