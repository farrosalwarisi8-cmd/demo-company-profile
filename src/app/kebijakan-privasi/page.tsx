import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: `Kebijakan privasi ${companyInfo.name}.`,
};

const sections = [
  {
    title: "1. Data yang Kami Kumpulkan",
    body: "Kami mengumpulkan data yang Anda berikan secara sukarela melalui formulir kontak, lamaran kerja, atau korespondensi langsung, seperti nama, perusahaan, email, nomor telepon, dan pesan. Kami juga dapat mengumpulkan data teknis terbatas (alamat IP, jenis perangkat, halaman yang dikunjungi) untuk keperluan keamanan dan analisis.",
  },
  {
    title: "2. Penggunaan Data",
    body: "Data yang kami kumpulkan digunakan untuk merespons pertanyaan, memproses permintaan penawaran, menindaklanjuti lamaran kerja, menyediakan layanan yang Anda minta, serta untuk keperluan kepatuhan hukum dan keamanan. Kami tidak menjual data pribadi Anda kepada pihak ketiga.",
  },
  {
    title: "3. Penyimpanan & Keamanan",
    body: "Data disimpan pada sistem yang dilindungi dengan kontrol akses berlapis. Dalam mode demo ini, tidak ada data yang benar-benar diproses atau disimpan oleh server; seluruh fitur hanya simulasi antarmuka.",
  },
  {
    title: "4. Hak Anda",
    body: "Sesuai UU Perlindungan Data Pribadi (UU PDP), Anda berhak mengakses, memperbaiki, dan menghapus data pribadi Anda, serta menarik persetujuan penggunaan data kapan saja dengan menghubungi kontak di bawah.",
  },
  {
    title: "5. Cookie & Teknologi Pelacakan",
    body: "Situs ini dapat menggunakan cookie untuk meningkatkan pengalaman pengguna. Anda dapat menonaktifkan cookie melalui pengaturan browser tanpa mengurangi fungsi utama situs.",
  },
  {
    title: "6. Kontak Petugas Data (DPO)",
    body: `Untuk pertanyaan terkait data pribadi, hubungi tim kami melalui email ${companyInfo.contact.email} atau telepon ${companyInfo.contact.phoneDisplay}.`,
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <>
      <PageHeader
        title="Kebijakan Privasi"
        description="Dokumen kebijakan privasi situs kami — terakhir diperbarui Januari 2025."
        breadcrumb={[{ label: "Kebijakan Privasi" }]}
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