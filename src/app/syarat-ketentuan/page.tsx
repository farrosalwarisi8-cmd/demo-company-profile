import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: `Syarat dan ketentuan penggunaan situs web ${companyInfo.name}.`,
};

const sections = [
  {
    title: "1. Penerimaan Ketentuan",
    body: "Dengan mengakses atau menggunakan situs web ini, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku. Jika Anda tidak menyetujui sebagian atau seluruh ketentuan ini, mohon untuk tidak menggunakan situs web ini.",
  },
  {
    title: "2. Sifat Situs Demo",
    body: "Situs ini merupakan demonstrasi company profile. Seluruh data — termasuk nama klien, proyek, foto, logo, angka statistik, dan isi dokumen — merupakan data tiruan yang digunakan untuk tujuan presentasi dan bukan merupakan keterangan resmi perusahaan.",
  },
  {
    title: "3. Penggunaan Konten",
    body: "Seluruh konten di situs ini, termasuk teks, gambar, logo, dan struktur halaman, dilindungi hak cipta. Anda tidak diperbolehkan menyalin, menyebarluaskan, memodifikasi, atau menggunakan kembali konten ini untuk keperluan komersial tanpa izin tertulis terlebih dahulu.",
  },
  {
    title: "4. Informasi Non-Komersial",
    body: `Informasi yang tersedia di situs ini disediakan "sebagaimana adanya" dan tidak dimaksudkan sebagai penawaran resmi atas jasa konstruksi yang bersifat mengikat secara hukum. Untuk kebutuhan resmi, silakan hubungi ${companyInfo.contact.email}.`,
  },
  {
    title: "5. Bentuk Hukum & Legalitas",
    body: `Seluruh layanan yang ditampilkan di situs ini direpresentasikan oleh ${companyInfo.legal.bentukBadanHukum} ${companyInfo.name} yang terdaftar secara resmi dengan NIB ${companyInfo.legal.nib}.`,
  },
  {
    title: "6. Perubahan Ketentuan",
    body: "Kami dapat memperbarui syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Perubahan akan berlaku efektif sejak dipublikasikan pada halaman ini. Kami menyarankan Anda untuk meninjau halaman ini secara berkala.",
  },
  {
    title: "7. Pembatasan Tanggung Jawab",
    body: "Dalam batas maksimum yang diizinkan oleh hukum, kami tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan, ketidaktersediaan, atau ketergantungan Anda terhadap informasi pada situs ini.",
  },
  {
    title: "8. Hukum yang Berlaku",
    body: "Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan secara musyawarah terlebih dahulu, dan jika tidak tercapai kesepakatan, diselesaikan di pengadilan yang berwenang sesuai ketentuan yang berlaku.",
  },
];

export default function SyaratKetentuanPage() {
  return (
    <>
      <PageHeader
        title="Syarat & Ketentuan"
        description="Ketentuan penggunaan situs web ini — mohon dibaca dengan saksama."
        breadcrumb={[{ label: "Syarat & Ketentuan" }]}
        motif="document"
      />
      <section className="section">
        <div className="container-page max-w-4xl">
          <div className="prose-demo">
            {sections.map((s) => (
              <div key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}