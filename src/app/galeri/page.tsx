import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { GallerySection } from "@/components/sections/gallery/gallery-section";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Galeri Proyek",
  description: `Galeri foto proyek konstruksi dan infrastruktur dari ${companyInfo.name} di berbagai sektor.`,
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        title="Galeri Proyek"
        description="Dokumentasi karya kami di lapangan — gedung, pabrik, hingga infrastruktur."
        breadcrumb={[{ label: "Galeri" }]}
        motif="frame"
      />
      <GallerySection />
    </>
  );
}