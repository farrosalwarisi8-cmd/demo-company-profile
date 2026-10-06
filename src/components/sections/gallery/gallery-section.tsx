"use client";

import * as React from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Maximize2, X } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/types";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

type FilterValue = PortfolioCategory | "semua";
const aspectPattern = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[16/10]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[5/4]",
  "aspect-[3/4]",
];

export function GallerySection() {
  const [active, setActive] = React.useState<FilterValue>("semua");
  const [lightbox, setLightbox] = React.useState<number | null>(null);

  const filtered =
    active === "semua" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const show = (index: number) =>
    setLightbox(((index % filtered.length) + filtered.length) % filtered.length);
  const prev = () => lightbox !== null && show(lightbox - 1);
  const next = () => lightbox !== null && show(lightbox + 1);
  const close = () => setLightbox(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, filtered.length]);

  return (
    <>
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => {
                  setActive(c.value);
                  setLightbox(null);
                }}
                aria-pressed={active === c.value}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  active === c.value
                    ? "bg-blue-700 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div key={active} className="mt-10 animate-fade-in columns-2 gap-4 lg:columns-3 lg:gap-5">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => show(i)}
                aria-label={`Perbesar: ${item.title}`}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-lift lg:mb-5"
              >
                <PlaceholderImage
                  src={item.image}
                  alt={item.alt}
                  className={cn(
                    "w-full transition-transform duration-500 group-hover:scale-105",
                    aspectPattern[i % aspectPattern.length]
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="flex gap-1.5">
                    <Maximize2 className="h-4 w-4 text-white/80" />
                  </span>
                  <Badge variant="warning" className="mt-2 capitalize">
                    {item.category}
                  </Badge>
                  <h3 className="mt-2 text-left font-heading text-base font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <ButtonLink href="/portfolio" size="lg">
              Lihat Detail Studi Kasus
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Tutup"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Sebelumnya"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Berikutnya"
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full max-w-5xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].alt}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-xs text-blue-200">{filtered[lightbox].location}</p>
                <h3 className="font-heading text-lg font-bold text-white">
                  {filtered[lightbox].title}
                </h3>
              </div>
              <Badge variant="warning" className="capitalize">
                {filtered[lightbox].category}
              </Badge>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}