import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { FaqSection } from "@/components/sections/faq/faq-section";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Pertanyaan yang sering diajukan tentang layanan, proses pengerjaan, biaya, dan legalitas ${companyInfo.name}.`,
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="FAQ"
        description="Temukan jawaban atas pertanyaan yang paling sering diajukan tentang layanan dan cara kami bekerja."
        breadcrumb={[{ label: "FAQ" }]}
        motif="message"
      />
      <FaqSection />
    </>
  );
}