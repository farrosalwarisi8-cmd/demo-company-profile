import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(content: string): number {
  const words = content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(date: string, locale = "id-ID"): string {
  return new Date(date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatRupiah(value: string | number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}