import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ClientShowcase } from "@/components/sections/clients/client-showcase";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Klien & Mitra",
  description: `Klien dan mitra ${companyInfo.name} dari berbagai sektor industri di seluruh Indonesia.`,
};

export default function MitraPage() {
  return (
    <>
      <PageHeader
        title="Klien & Mitra"
        description="Kepercayaan ratusan institusi dan perusahaan dari berbagai sektor — jadilah bagian dari cerita kami."
        breadcrumb={[{ label: "Klien & Mitra" }]}
        motif="network"
      />
      <ClientShowcase />
    </>
  );
}