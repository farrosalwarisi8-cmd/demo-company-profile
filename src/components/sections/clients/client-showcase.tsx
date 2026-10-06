"use client";

import { ArrowRight, Building2, MapPin, Star, Users, Handshake, Quote } from "lucide-react";
import { clients } from "@/data/company";
import { testimonials } from "@/data/team";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

const clientStats = [
  { Icon: Building2, value: "50+", label: "Klien Institusi" },
  { Icon: Users, value: "8", label: "Sektor Industri" },
  { Icon: MapPin, value: "12", label: "Provinsi Jangkauan" },
  { Icon: Star, value: "98%", label: "Kepuasan Klien" },
];

const industries = [
  "Energi",
  "Perbankan",
  "Logistik",
  "FMCG",
  "Kesehatan",
  "Pendidikan",
  "Teknologi",
  "Pemerintah",
];

export function ClientShowcase() {
  return (
    <>
      <section className="section bg-slate-950">
        <div className="container-page">
          <RevealStagger className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {clientStats.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur lg:p-6">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300 lg:h-12 lg:w-12">
                    <stat.Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </span>
                  <p className="mt-3 font-heading text-2xl font-extrabold text-white lg:mt-4 lg:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400 lg:text-sm">{stat.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Klien Kami"
            title="Dipercaya oleh Berbagai Sektor"
            description="Lima puluh lebih institusi dari energi, perbankan, logistik, hingga pemerintah mempercayakan proyeknya kepada kami."
          />
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <RevealItem key={client.id}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lift">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-blue-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 w-auto object-contain grayscale transition-all group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-slate-900">{client.name}</h3>
                  {client.industry && (
                    <Badge variant="outline" className="mt-2.5 capitalize">
                      {client.industry}
                    </Badge>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="mt-12">
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:flex-row">
              <div>
                <p className="font-heading font-bold text-slate-900">Menjangkau 8+ sektor industri</p>
                <p className="mt-1 text-sm text-slate-500">
                  Dari infrastruktur publik hingga fasilitas manufaktur dan kesehatan.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {industries.map((ind) => (
                  <Badge key={ind} className="bg-blue-50 text-blue-800">
                    {ind}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimoni"
            title="Apa Kata Mitra Kami"
            description="Pengalaman nyata para klien yang telah bekerja sama dalam berbagai proyek."
          />
          <RevealStagger className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <RevealItem key={t.id}>
                <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                          )}
                        />
                      ))}
                    </div>
                    <Quote className="h-7 w-7 text-blue-100" aria-hidden />
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                      {t.authorName
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold text-slate-900">{t.authorName}</p>
                      <p className="text-xs text-slate-500">
                        {t.authorTitle} &middot; {t.authorCompany}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 px-6 py-14 text-center shadow-lift md:px-16">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.3) 0, transparent 35%)",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Handshake className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Jadilah Mitra Proyek Berikutnya
              </h2>
              <p className="mt-4 text-blue-100">
                Ceritakan kebutuhan proyek Anda dan dapatkan solusi konstruksi yang transparan, aman, dan tepat waktu.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/kontak" size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                  Mulai Diskusi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/portfolio"
                  size="lg"
                  className="border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
                >
                  Lihat Portfolio Kami
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}