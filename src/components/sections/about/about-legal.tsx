"use client";

import { Building2, FileCheck2, Hash, Landmark, ScrollText, ShieldCheck } from "lucide-react";
import { companyInfo } from "@/data/company";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealItem, RevealStagger } from "@/components/shared/reveal";

const legalItems = [
  { Icon: Hash, label: "NIB", value: companyInfo.legal.nib },
  { Icon: ScrollText, label: "SK AHU (Kemenkumham)", value: companyInfo.legal.ahu },
  { Icon: Landmark, label: "NPWP", value: companyInfo.legal.npwp },
  { Icon: Building2, label: "Bentuk Badan Hukum", value: companyInfo.legal.bentukBadanHukum },
  { Icon: FileCheck2, label: "Klasifikasi Usaha", value: companyInfo.legal.klasifikasiUsaha },
  { Icon: ShieldCheck, label: "Sertifikasi", value: "ISO 9001, ISO 14001, CSMS, SMK3, BUJK Gred 7" },
];

export function AboutLegal() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Legalitas"
          title="Terdaftar Resmi & Kredibel"
          description="Seluruh legalitas perusahaan terdokumentasi dan dapat diverifikasi."
        />
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {legalItems.map((item) => (
            <RevealItem key={item.label}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <item.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">{item.value}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}