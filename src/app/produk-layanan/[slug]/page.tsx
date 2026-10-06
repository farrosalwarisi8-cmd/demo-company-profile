import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import { PageHeader } from "@/components/layout/page-header";
import { ServiceDetail } from "@/components/sections/products/service-detail";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = portfolioItems
    .filter((p) => service.relatedPortfolioSlugs.includes(p.slug))
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.shortDescription}
        breadcrumb={[
          { label: "Produk & Layanan", href: "/produk-layanan" },
          { label: service.title },
        ]}
        motif="building"
      />
      <ServiceDetail service={service} related={related} />
    </>
  );
}