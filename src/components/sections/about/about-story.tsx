"use client";

import { Check } from "lucide-react";
import { companyInfo } from "@/data/company";
import { Reveal } from "@/components/shared/reveal";
import { PlaceholderImage } from "@/components/shared/placeholder-image";

export function AboutStory() {
  const years = new Date().getFullYear() - companyInfo.foundedYear;
  return (
    <section className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <PlaceholderImage
            src="/images/about/team-photo.jpg"
            alt="Tim PT Karya Infrastruktur Nusantara di lapangan"
            className="aspect-[4/3] rounded-2xl shadow-card"
          />
        </Reveal>
        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              Kisah Kami
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Dari Garasi Kecil Menjadi Mitra Strategis Bangsa
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-slate-600">
              {companyInfo.name} berdiri pada tahun {companyInfo.foundedYear} di Jakarta dengan hanya
              12 orang dan beberapa unit alat berat sewaan. Pada tahun-tahun awal, kami fokus membangun
              reputasi melalui pengerjaan proyek rumah tinggal dan ruko dengan standar mutu yang
              konsisten.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Kredibilitas yang terjaga membawa kami pada proyek-proyek yang lebih besar: pergudangan,
              gedung komersial, hingga infrastruktur jalan dan jembatan. Kami meyakini bahwa kunci
              pertumbuhan bukanlah ukuran perusahaan, melainkan kepercayaan yang terus dijaga lewat
              kepastian waktu, biaya, dan kualitas di setiap serah terima.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Kini, dengan lebih dari {years} tahun pengalaman dan 200+ proyek di berbagai sektor, kami
              menatap masa depan dengan satu keyakinan: turut membangun fondasi Indonesia yang lebih
              kuat dan lebih baik.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Kualitas terukur di setiap tahap", "Kepatuhan regulasi & K3", "Transparansi biaya & progres", "Kemitraan jangka panjang"].map((v) => (
                <li key={v} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}