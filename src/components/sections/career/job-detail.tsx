"use client";

import { CalendarDays, Check, ChevronRight, DollarSign, MapPin } from "lucide-react";
import type { JobPosting } from "@/types";
import { ApplyForm } from "@/components/sections/career/apply-form";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

const typeLabel: Record<string, string> = {
  "full-time": "Full Time",
  "part-time": "Part Time",
  contract: "Kontrak",
  internship: "Magang",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function JobDetail({ job }: { job: JobPosting }) {
  return (
    <section className="section">
      <div className="container-page max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          <div className="space-y-10">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary">{typeLabel[job.type]}</Badge>
                {job.isNew && <Badge variant="success">BARU</Badge>}
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">{job.title}</h1>
              <p className="mt-3 text-slate-600">{job.department}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-slate-400" /> {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-slate-400" /> {job.salary}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-slate-400" /> Tenggat: {formatDate(job.deadline)}
                </span>
              </div>
            </div>

            <Section title="Deskripsi Pekerjaan">
              <p className="leading-relaxed text-slate-600">{job.description}</p>
            </Section>

            <Section title="Tanggung Jawab">
              <ul className="space-y-2.5">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {r}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Kualifikasi">
              <ul className="space-y-2.5">
                {job.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Benefit">
              <ul className="space-y-2.5">
                {job.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-7 shadow-card lg:sticky lg:top-24">
            <h2 className="font-heading text-xl font-bold">Lamar Posisi Ini</h2>
            <p className="mt-2 text-sm text-slate-500">Isi formulir di bawah atau kirim langsung ke email rekrutmen kami.</p>
            <div className="mt-6">
              <ApplyForm jobTitle={job.title} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}