import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-700 text-white shadow-sm hover:bg-blue-800 active:scale-[0.98]",
        outline:
          "border border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 active:scale-[0.98]",
        secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
        ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb457] shadow-sm",
        link: "text-blue-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3.5 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";