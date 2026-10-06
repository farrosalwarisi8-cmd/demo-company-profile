import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CareerListing } from "@/components/sections/career/career-listing";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Karir",
  description: `Lowongan kerja di ${companyInfo.name} — bergabunglah membangun infrastruktur Indonesia bersama kami.`,
};

export default function KarirPage() {
  return (
    <>
      <PageHeader
        title="Karir"
        description="Bergabunglah bersama tim yang membangun fondasi Indonesia. Kami mencari talenta terbaik."
        breadcrumb={[{ label: "Karir" }]}
        motif="network"
      />
      <CareerListing />
    </>
  );
}