import * as React from "react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  src: string;
  alt: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Placeholder gambar demo: merender SVG statis dari /public/images.
 * Digunakan agar demo tetap cantik tanpa file foto asli.
 */
export function PlaceholderImage({
  label,
  src,
  alt,
  className,
  ...props
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("relative overflow-hidden bg-slate-100", className)}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      {label && (
        <span className="absolute bottom-3 left-3 rounded-lg bg-slate-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}