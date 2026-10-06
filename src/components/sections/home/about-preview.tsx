"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/company";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { ButtonLink } from "@/components/ui/button-link";

const highlights = [
  "Sertifikasi ISO 9001, ISO 14001, CSMS & SMK3",
  "Kualifikasi BUJK Gred 7 (tak terbatas)",
  "200+ proyek selesai di seluruh Indonesia",
  "Tim insinyur bersertifikat & tenaga kerja terlatih",
];

export function AboutPreview() {
  return (
    <section className="section bg-slate-50">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <PlaceholderImage
              src="/images/about/company-building.jpg"
              alt="Kantor PT Karya Infrastruktur Nusantara"
              className="aspect-[4/3]"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-xl bg-blue-700 px-6 py-4 text-white shadow-lift">
            <p className="font-heading text-3xl font-extrabold">
              {new Date().getFullYear() - companyInfo.foundedYear}+
            </p>
            <p className="text-xs font-medium text-blue-100">Tahun Melayani Bangsa</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Tentang Kami"
            title="Berkarya Nyata untuk Infrastruktur Indonesia"
            description="Sejak 2010, kami tumbuh menjadi mitra terpercaya bagi BUMN, swasta, dan sektor publik. Komitmen kami sederhana: kualitas terukur, waktu yang tepat, dan keselamatan yang utama."
          />
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-slate-700">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/tentang-kami" className="gap-2">
                Kenali Lebih Jauh
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}