"use client";

import { timeline } from "@/data/company";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export function AboutTimeline() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Perjalanan Kami" title="Kilas Balik & Milestone" />
        <div className="relative mx-auto max-w-5xl">
          <span
            className="absolute left-4 top-2 h-[calc(100%-1rem)] w-0.5 bg-slate-200 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden
          />
          <div className="space-y-10">
            {timeline.map((event, i) => {
              const left = i % 2 === 0;
              return (
                <div key={event.year} className="relative lg:grid lg:grid-cols-2">
                  <span
                    className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-white bg-blue-700 ring-1 ring-blue-200 lg:left-1/2"
                    aria-hidden
                  />
                  <Reveal
                    className={cn(
                      "ml-10 lg:ml-0",
                      left
                        ? "lg:col-start-1 lg:pr-12 lg:text-right"
                        : "lg:col-start-2 lg:pl-12"
                    )}
                  >
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                      <p className="font-heading text-2xl font-extrabold text-blue-700">{event.year}</p>
                      <h3 className="mt-1 font-bold">{event.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{event.description}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}