"use client";

import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { RevealItem, RevealStagger } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function BlogListing() {
  const [featured, ...rest] = blogPosts;
  return (
    <section className="section">
      <div className="container-page">
        {/* Featured */}
        <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:shadow-lift lg:grid-cols-2">
          <div className="relative overflow-hidden">
            <PlaceholderImage src={featured.coverImage} alt={featured.title} className="aspect-[16/10] h-full transition-transform duration-500 group-hover:scale-105" />
            <Badge variant="primary" className="absolute left-5 top-5 capitalize">{featured.category}</Badge>
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs text-slate-500">
              {formatDate(featured.publishedAt)} &middot; {featured.readingTime} menit baca
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-snug group-hover:text-blue-700 md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">{featured.excerpt}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <User className="h-4 w-4" />
                </span>
                {featured.author.name}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                Baca Artikel
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-3">
          {rest.map((p) => (
            <RevealItem key={p.id}>
              <Link href={`/blog/${p.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <PlaceholderImage src={p.coverImage} alt={p.title} className="aspect-[16/10] transition-transform duration-500 group-hover:scale-105" />
                  <Badge variant="primary" className="absolute left-4 top-4 capitalize">{p.category}</Badge>
                </div>
                <div className="flex h-full flex-col p-5">
                  <p className="text-xs text-slate-500">
                    {formatDate(p.publishedAt)} &middot; {p.readingTime} menit baca
                  </p>
                  <h3 className="mt-2 flex-1 text-base font-bold leading-snug group-hover:text-blue-700">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                    Baca Artikel
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}