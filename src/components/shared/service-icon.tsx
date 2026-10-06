"use client";

import * as React from "react";
import {
  Building2,
  ClipboardList,
  Package,
  PenTool,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  ClipboardList,
  Package,
  PenTool,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Building2;
  return <Icon className={className} aria-hidden />;
}