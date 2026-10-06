"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/team";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [index, setIndex] = React.useState(0);
  const count = testimonials.length;

  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  const active = testimonials[index];

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepercayaan yang kami jaga melalui hasil kerja nyata di setiap proyek."
        />
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <Quote className="absolute -top-4 left-6 h-12 w-12 text-blue-100" aria-hidden />
            <div
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-card md:p-10"
            >
              <div key={active.id} className="animate-fade-in">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < active.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                      )}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 text-lg leading-relaxed text-slate-700">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <PlaceholderImage
                    src={active.authorPhoto}
                    alt={active.authorName}
                    className="h-12 w-12 rounded-full"
                    label={undefined}
                  />
                  <div>
                    <p className="font-heading text-sm font-bold text-slate-900">{active.authorName}</p>
                    <p className="text-xs text-slate-500">
                      {active.authorTitle} &middot; {active.authorCompany}
                    </p>
                  </div>
                </figcaption>
              </div>
            </div>

            <button
              type="button"
              aria-label="Testimoni sebelumnya"
              onClick={() => setIndex((index - 1 + count) % count)}
              className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-blue-500 hover:text-blue-700 md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Testimoni berikutnya"
              onClick={() => setIndex((index + 1) % count)}
              className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-blue-500 hover:text-blue-700 md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Testimoni ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  i === index ? "w-8 bg-blue-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}