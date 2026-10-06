"use client";

import { Eye, Target } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const mission = [
  "Menghasilkan karya konstruksi yang aman, tepat waktu, dan sesuai spesifikasi",
  "Menerapkan praktik terbaik manajemen mutu, keselamatan, dan lingkungan",
  "Mengembangkan SDM profesional melalui pelatihan dan sertifikasi berkelanjutan",
  "Membangun kemitraan yang saling menguntungkan dengan klien dan pemasok",
  "Mengadopsi teknologi digital untuk efisiensi dan transparansi proyek",
];

export function AboutVisionMission() {
  return (
    <section className="section bg-slate-50">
      <div className="container-page space-y-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 to-blue-600 p-8 text-white shadow-lift md:p-12">
            <Eye className="absolute -right-6 -top-6 h-40 w-40 text-white/10" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Visi</p>
            <p className="mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug md:text-3xl">
              &ldquo;Menjadi perusahaan konstruksi terdepan yang dipercaya untuk mewujudkan
              infrastruktur berkelanjutan di Indonesia.&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card md:p-12">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Target className="h-5 w-5" />
              </span>
              <p className="font-heading text-xl font-bold">Misi Kami</p>
            </div>
            <ol className="mt-6 space-y-4">
              {mission.map((m, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-slate-700">{m}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}