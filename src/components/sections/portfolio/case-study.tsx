"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, CalendarDays, Landmark, MapPin, TrendingUp, AlertCircle, Lightbulb, CheckCircle2 } from "lucide-react";
import type { PortfolioItem } from "@/types";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

function formatValue(v?: string) {
  if (!v) return "Rahasia";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    notation: "compact",
  }).format(Number(v));
}

export function CaseStudy({ project, prev, next }: { project: PortfolioItem; prev?: PortfolioItem; next?: PortfolioItem }) {
  const info = [
    { Icon: Building2, label: "Klien", value: project.client },
    { Icon: MapPin, label: "Lokasi", value: `${project.location}` },
    { Icon: Landmark, label: "Nilai Proyek", value: formatValue(project.value) },
    { Icon: CalendarDays, label: "Periode", value: `${project.duration} (${project.year})` },
  ];

  return (
    <>
      <section className="section pt-10">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <PlaceholderImage src={project.heroImage} alt={project.title} className="aspect-[21/9]" />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="warning" className="capitalize">{project.category}</Badge>
                {project.tags.map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">{project.title}</h1>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {info.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                <item.Icon className="h-5 w-5 text-blue-700" />
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-400">{item.label}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-page space-y-8">
          <Reveal>
            <div className="rounded-2xl border-l-4 border-red-400 bg-red-50 p-7">
              <div className="flex items-center gap-2.5">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <h2 className="font-heading text-xl font-bold">Tantangan</h2>
              </div>
              <p className="mt-3 leading-relaxed text-slate-700">{project.problem}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-7">
              <div className="flex items-center gap-2.5">
                <Lightbulb className="h-5 w-5 text-blue-700" />
                <h2 className="font-heading text-xl font-bold">Solusi Kami</h2>
              </div>
              <p className="mt-3 leading-relaxed text-slate-700">{project.solution}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-7">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <h2 className="font-heading text-xl font-bold">Dampak & Hasil</h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {project.impact.map((imp) => (
                  <li key={imp} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="leading-relaxed text-slate-700">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-page">
          <Reveal>
            <h2 className="text-2xl font-extrabold md:text-3xl">Galeri Proyek</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {project.gallery.map((g, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <PlaceholderImage src={g} alt={`${project.title} — galeri ${i + 1}`} className="aspect-[4/3] rounded-xl shadow-card" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container-page">
        <div className="grid gap-4 border-t border-slate-200 py-10 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:border-blue-300 hover:shadow-lift"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <ArrowLeft className="h-3.5 w-3.5" /> Proyek Sebelumnya
              </span>
              <p className="mt-2 font-bold group-hover:text-blue-700">{prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/portfolio/${next.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 text-right shadow-card transition-all hover:border-blue-300 hover:shadow-lift"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                Proyek Berikutnya <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p className="mt-2 font-bold group-hover:text-blue-700">{next.title}</p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}