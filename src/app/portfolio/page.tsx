import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { PortfolioFilter } from "@/components/sections/portfolio/portfolio-filter";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Portofolio proyek ${companyInfo.name} — konstruksi, infrastruktur, renovasi, dan konsultasi di seluruh Indonesia.`,
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        description="Bukti karya kami dalam berbagai sektor — dari gedung, pabrik, hingga infrastruktur."
        breadcrumb={[{ label: "Portfolio" }]}
        motif="crane"
      />
      <PortfolioFilter />
    </>
  );
}