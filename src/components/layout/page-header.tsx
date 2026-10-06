import * as React from "react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { BlueprintArt, type BlueprintMotif } from "@/components/shared/blueprint-art";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
  motif?: BlueprintMotif;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  breadcrumb,
  motif = "crane",
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 pb-16 pt-32 md:pb-20 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.35) 0, transparent 42%), radial-gradient(circle at 82% 88%, rgba(56,189,248,0.28) 0, transparent 40%), radial-gradient(circle at 92% 10%, rgba(255,255,255,0.18) 0, transparent 32%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="bp-fade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="currentColor" stopOpacity="0" />
              <stop offset="0.18" stopColor="currentColor" stopOpacity="0.08" />
              <stop offset="0.5" stopColor="currentColor" stopOpacity="0.14" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.16" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bp-fade)" />
        </svg>
        <div className="animate-float absolute inset-0">
          <BlueprintArt
            motif={motif}
            className="absolute bottom-0 right-0 h-[88%] w-auto max-w-none opacity-40 mix-blend-screen"
          />
        </div>
      </div>

      <div className="absolute left-0 right-0 top-7 hidden items-center justify-between px-6 text-white/30 md:flex lg:px-10">
        <span
          className="h-10 w-10 border-l border-t"
          style={{ borderColor: "rgba(255,255,255,0.25)" }}
        />
        <span
          className="h-10 w-10 border-r border-t"
          style={{ borderColor: "rgba(255,255,255,0.25)" }}
        />
      </div>

      <div className="container-page relative">
        <div className="relative max-w-3xl">
          <Breadcrumb items={breadcrumb} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1.5 opacity-80">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(251,191,36,0.85) 0 14px, rgba(255,255,255,0.12) 14px 28px)",
          }}
        />
      </div>
    </section>
  );
}