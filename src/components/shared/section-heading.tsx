import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-10 max-w-2xl md:mb-14",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed text-slate-600", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}