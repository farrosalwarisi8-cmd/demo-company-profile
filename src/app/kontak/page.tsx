import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactMap } from "@/components/sections/contact/contact-map";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${companyInfo.name} — tim kami siap membantu kebutuhan proyek konstruksi Anda.`,
};

export default function KontakPage() {
  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        description="Konsultasikan kebutuhan proyek Anda — tim kami akan merespons dalam 1x24 jam kerja."
        breadcrumb={[{ label: "Kontak" }]}
        motif="compass"
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr]">
          <ContactInfo />
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card md:p-10">
            <h2 className="text-2xl font-extrabold">Kirim Pesan</h2>
            <p className="mt-2 text-sm text-slate-500">
              Isi formulir di bawah ini. Di mode demo, dilakukan simulasi pengiriman.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="container-page mt-12">
          <ContactMap />
        </div>
      </section>
    </>
  );
}