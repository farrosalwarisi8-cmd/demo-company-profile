import * as React from "react";
import Link from "next/link";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-800 text-white shadow-sm">
        <Building2 className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[15px] font-bold tracking-tight",
            light ? "text-white" : "text-slate-900"
          )}
        >
          KI Nusantara
        </span>
        <span
          className={cn(
            "text-[10px] font-medium tracking-wide uppercase",
            light ? "text-blue-200" : "text-slate-500"
          )}
        >
          PT Karya Infrastruktur
        </span>
      </span>
    </Link>
  );
}