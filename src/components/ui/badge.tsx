import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-100 text-blue-800",
        primary: "bg-blue-700 text-white",
        success: "bg-green-100 text-green-700",
        warning: "bg-amber-100 text-amber-800",
        error: "bg-red-100 text-red-700",
        outline: "border border-slate-300 text-slate-600",
        dark: "bg-slate-900 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}