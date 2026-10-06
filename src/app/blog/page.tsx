import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { BlogListing } from "@/components/sections/blog/blog-listing";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Blog & Artikel",
  description: `Artikel dan wawasan industri konstruksi dari ${companyInfo.name}.`,
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog & Artikel"
        description="Wawasan, tips, dan tren terbaru seputar industri konstruksi Indonesia."
        breadcrumb={[{ label: "Blog" }]}
        motif="document"
      />
      <BlogListing />
    </>
  );
}