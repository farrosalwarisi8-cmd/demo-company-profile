"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Copy, Share2, XIcon } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/brand-icons";
import type { BlogPost } from "@/types";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";
import { formatDate } from "@/lib/utils";

function headingSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function BlogArticle({ post }: { post: BlogPost }) {
  const pathname = usePathname();
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);
  const [headings, setHeadings] = React.useState<{ text: string; id: string }[]>([]);

  const processedContent = React.useMemo(() => {
    const found: { text: string; id: string }[] = [];
    const html = post.content.replace(/<h2>([^<]+)<\/h2>/g, (_m, text: string) => {
      const id = headingSlug(text);
      found.push({ text: text.replace(/&amp;/g, "&"), id });
      return `<h2 id="${id}">${text}</h2>`;
    });
    setHeadings(found);
    return html;
  }, [post.content]);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const shareUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`
    : url;

  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      Icon: LinkedinIcon,
    },
    {
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      Icon: XIcon,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({ variant: "success", title: "Link disalin!", description: "Tautan artikel telah disalin ke clipboard." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ variant: "warning", title: "Tidak dapat menyalin", description: "Salin tautan secara manual." });
    }
  };

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <section className="section">
      <div className="container-page max-w-6xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="primary" className="capitalize">{post.category}</Badge>
          {post.tags.map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">{post.title}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">{post.author.name[0]}{post.author.name.split(" ")[1]?.[0] ?? ""}</span>
            {post.author.name} &middot; {post.author.role}
          </span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime} menit baca</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <article
            className="prose-demo max-w-none"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {headings.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-900">Daftar Isi</h2>
                <nav className="mt-4 space-y-2">
                  {headings.map((h) => (
                    <a key={h.id} href={`#${h.id}`} className="block text-sm text-slate-600 transition-colors hover:text-blue-700">
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-slate-900">
                <Share2 className="h-4 w-4" /> Bagikan Artikel
              </h2>
              <div className="mt-4 flex gap-2">
                {shareLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Bagikan ke ${s.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-blue-500 hover:text-blue-700"
                  >
                    <s.Icon className="h-4 w-4" />
                  </a>
                ))}
                <button
                  onClick={handleCopy}
                  aria-label="Salin tautan"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-blue-500 hover:text-blue-700"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-900">Artikel Terkait</h2>
              <div className="mt-4 space-y-4">
                {related.map((r) => (
                  <Link key={r.id} href={`/blog/${r.slug}`} className="group block">
                    <p className="text-xs text-slate-400">{formatDate(r.publishedAt)}</p>
                    <p className="mt-0.5 text-sm font-semibold leading-snug text-slate-800 group-hover:text-blue-700">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}