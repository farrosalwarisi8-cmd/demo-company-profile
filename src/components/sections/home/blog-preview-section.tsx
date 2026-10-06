"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function BlogPreviewSection() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog & Artikel"
          title="Wawasan dari Tim Kami"
          description="Berbagi pengetahuan industri konstruksi, tips, dan tren terkini."
        />
        <RevealStagger className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <RevealItem key={p.id}>
              <Link href={`/blog/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <PlaceholderImage
                    src={p.coverImage}
                    alt={p.title}
                    className="aspect-[16/10] transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge variant="primary" className="absolute left-4 top-4 capitalize">
                    {p.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-500">
                    {formatDate(p.publishedAt)} &middot; {p.readingTime} menit baca
                  </p>
                  <h3 className="mt-2 text-base font-bold leading-snug group-hover:text-blue-700">
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
        <Reveal className="mt-10 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">
            Lihat Semua Artikel
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}