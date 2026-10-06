import * as React from "react";
import Link from "next/link";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import type { AnchorHTMLAttributes } from "react";

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}

export function ButtonLink({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonLinkProps) {
  const cls = cn(buttonVariants({ variant, size }), className);
  if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}