import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ServiceListing } from "@/components/sections/products/service-listing";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Produk & Layanan",
  description: `Konstruksi bangunan, konsultasi teknik, manajemen proyek, dan pengadaan material dari ${companyInfo.name}.`,
};

export default function ProdukLayananPage() {
  return (
    <>
      <PageHeader
        title="Produk & Layanan"
        description="Empat layanan utama yang saling melengkapi — dari perencanaan hingga serah terima proyek."
        breadcrumb={[{ label: "Produk & Layanan" }]}
        motif="crane"
      />
      <ServiceListing />
    </>
  );
}