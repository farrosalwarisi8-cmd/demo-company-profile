"use client";

import Link from "next/link";
import { LinkedinIcon } from "@/components/shared/brand-icons";
import { teamMembers } from "@/data/team";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealItem, RevealStagger } from "@/components/shared/reveal";
import { PlaceholderImage } from "@/components/shared/placeholder-image";

export function AboutTeam() {
  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Manajemen"
          title="Kepemimpinan yang Berpengalaman"
          description="Tim manajemen kami memadukan pengalaman puluhan tahun dengan semangat inovasi."
        />
        <RevealStagger className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {teamMembers.map((t) => (
            <RevealItem key={t.id}>
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <PlaceholderImage
                  src={t.photo}
                  alt={t.name}
                  className="mx-auto h-24 w-24 rounded-full ring-4 ring-blue-50 transition-transform group-hover:scale-105"
                />
                <h3 className="mt-4 text-sm font-bold leading-snug">{t.name}</h3>
                <p className="mt-1 text-xs font-medium text-blue-700">{t.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{t.bio}</p>
                {t.linkedin && (
                  <Link
                    href={t.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`LinkedIn ${t.name}`}
                    className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors hover:bg-blue-700 hover:text-white"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}