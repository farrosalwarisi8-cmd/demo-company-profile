import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioItems, getPortfolioBySlug } from "@/data/portfolio";
import { PageHeader } from "@/components/layout/page-header";
import { CaseStudy } from "@/components/sections/portfolio/case-study";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getPortfolioBySlug(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.problem };
}

export default function PortfolioDetailPage({ params }: Props) {
  const project = getPortfolioBySlug(params.slug);
  if (!project) notFound();

  const index = portfolioItems.findIndex((p) => p.slug === params.slug);
  const prev = index > 0 ? portfolioItems[index - 1] : undefined;
  const next = index < portfolioItems.length - 1 ? portfolioItems[index + 1] : undefined;

  return (
    <>
      <PageHeader
        title="Studi Kasus Proyek"
        breadcrumb={[
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
        motif="crane"
      />
      <CaseStudy project={project} prev={prev} next={next} />
    </>
  );
}