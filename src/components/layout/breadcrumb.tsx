import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-blue-100">
      <Link href="/" className="inline-flex items-center gap-1 text-blue-50/80 transition-colors hover:text-white">
        <Home className="h-3.5 w-3.5" />
        Beranda
      </Link>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-blue-200/60" />
          {item.href ? (
            <Link href={item.href} className="text-blue-50/80 transition-colors hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}