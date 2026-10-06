import type { TeamMember, Testimonial } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "t-1",
    name: "Ir. Hendra Wijaya, M.T.",
    title: "Direktur Utama",
    photo: "/images/team/ceo.svg",
    linkedin: "https://linkedin.com/in/hendra-wijaya",
    bio: "Berpengalaman 25 tahun di industri konstruksi, fokus pada strategi pertumbuhan dan kemitraan strategis.",
  },
  {
    id: "t-2",
    name: "Andi Pratama, S.T., M.Eng.",
    title: "Direktur Teknik / CTO",
    photo: "/images/team/cto.svg",
    linkedin: "https://linkedin.com/in/andi-pratama",
    bio: "Insinyur struktur berpengalaman 18 tahun, penggerak adopsi BIM dan digitalisasi proyek.",
  },
  {
    id: "t-3",
    name: "Siti Rahayu, S.E., M.M.",
    title: "Direktur Keuangan / CFO",
    photo: "/images/team/cfo.svg",
    linkedin: "https://linkedin.com/in/siti-rahayu",
    bio: "Menjaga kesehatan finansial perusahaan dengan pengendalian biaya dan tata kelola yang transparan.",
  },
  {
    id: "t-4",
    name: "Budi Santoso, S.T.",
    title: "Direktur Operasional / COO",
    photo: "/images/team/coo.svg",
    linkedin: "https://linkedin.com/in/budi-santoso",
    bio: "Memimpin pelaksanaan operasional seluruh proyek, penguatan K3 dan mutu di lapangan.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "tm-1",
    quote:
      "PT Karya Infrastruktur Nusantara menyelesaikan pabrik kami tepat waktu tanpa mengganggu operasional existing. Koordinasinya luar biasa rapi dan selalu transparan soal progres.",
    authorName: "Bambang Kurniawan",
    authorTitle: "Direktur Operasi",
    authorCompany: "PT Cemilan Nikmat Indonesia",
    authorPhoto: "/images/team/ceo.svg",
    rating: 5,
  },
  {
    id: "tm-2",
    quote:
      "Tim manajemen proyek mereka sangat profesional. Laporan mingguan jelas, biaya terkendali, dan standar K3 di lapangan benar-benar diterapkan, bukan sekadar pajangan.",
    authorName: "Dewi Lestari",
    authorTitle: "Kepala Proyek & Pengadaan",
    authorCompany: "Bank Nusantara Sejahtera",
    authorPhoto: "/images/team/cfo.svg",
    rating: 5,
  },
  {
    id: "tm-3",
    quote:
      "Renovasi rumah sakit yang tetap beroperasi adalah tantangan besar. Mereka berhasil menahan kebisingan, menjaga privasi pasien, dan lulus akreditasi tanpa temuan mayor.",
    authorName: "dr. Ratna Sari",
    authorTitle: "Direktur Utama",
    authorCompany: "Rumah Sakit Medika Prima",
    authorPhoto: "/images/team/cto.svg",
    rating: 5,
  },
  {
    id: "tm-4",
    quote:
      "Jembatan pengganti rampung 3 minggu lebih cepat. Proses komunikasi dengan warga sekitar juga mereka kelola dengan sangat baik. Rekomendasi untuk pekerjaan pemerintah.",
    authorName: "Joko Susilo",
    authorTitle: "Kepala Dinas PU",
    authorCompany: "Kabupaten Mitra Abadi",
    authorPhoto: "/images/team/coo.svg",
    rating: 4,
  },
];