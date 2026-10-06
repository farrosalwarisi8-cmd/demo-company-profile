"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, DollarSign, MapPin, Mail } from "lucide-react";
import { jobs } from "@/data/jobs";
import { companyInfo } from "@/data/company";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

const typeLabel: Record<string, string> = {
  "full-time": "Full Time",
  "part-time": "Part Time",
  contract: "Kontrak",
  internship: "Magang",
};

export function CareerListing() {
  return (
    <section className="section">
      <div className="container-page max-w-5xl">
        <RevealStagger className="space-y-5">
          {jobs.map((job) => (
            <RevealItem key={job.id}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-lg font-bold group-hover:text-blue-700">{job.title}</h3>
                    {job.isNew && <Badge variant="primary">BARU</Badge>}
                    <Badge variant="outline">{typeLabel[job.type]}</Badge>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-500">{job.department}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-slate-400" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-slate-400" /> {job.salary}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4 text-slate-400" /> Deadline {formatDate(job.deadline)}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/karir/${job.slug}`}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                >
                  Lihat Detail
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Mail className="h-5 w-5" />
              </span>
              <p className="text-sm text-slate-700">
                Tidak menemukan posisi yang cocok? Kirim CV lamaran spontan ke{" "}
                <strong>{companyInfo.contact.email}</strong>
              </p>
            </div>
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="shrink-0 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Kirim CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}