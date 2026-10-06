import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/data/blog-posts";
import { PageHeader } from "@/components/layout/page-header";
import { BlogArticle } from "@/components/sections/blog/blog-article";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogArticlePage({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader
        title="Artikel"
        breadcrumb={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        motif="document"
      />
      <BlogArticle post={post} />
    </>
  );
}