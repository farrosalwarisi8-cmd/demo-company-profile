import {
  type Certification,
  type Client,
  type CompanyInfo,
  type NavigationItem,
  type Stat,
  type TimelineEvent,
} from "@/types";

export const companyInfo: CompanyInfo = {
  name: "PT Karya Infrastruktur Nusantara",
  legalName: "PT Karya Infrastruktur Nusantara",
  tagline: "Membangun Fondasi Indonesia yang Lebih Kuat",
  description:
    "PT Karya Infrastruktur Nusantara adalah perusahaan konstruksi dan manajemen proyek Indonesia yang berpengalaman lebih dari 15 tahun. Kami menyediakan layanan konstruksi bangunan, konsultasi teknik, manajemen proyek, dan pengadaan material untuk sektor infrastruktur, industri, dan komersial.",
  foundedYear: 2010,
  heroImage: "/images/hero/hero-banner-1.jpg",
  address: {
    street: "Jl. Raya Industri Raya No. 45, Kawasan Industri Pulogadung",
    city: "Jakarta Timur",
    province: "DKI Jakarta",
    postalCode: "13210",
    country: "Indonesia",
  },
  contact: {
    phone: "+622112345678",
    phoneDisplay: "+62 21 1234 5678",
    email: "info@karyainfrastruktur.co.id",
    whatsapp: "6281234567890",
    whatsappDisplay: "+62 812-3456-7890",
  },
  operatingHours: {
    days: "Senin – Jumat",
    hours: "08.00 – 17.00 WIB",
    timezone: "WIB (UTC+7)",
  },
  socialMedia: {
    linkedin: "https://linkedin.com/company/karya-infrastruktur",
    instagram: "https://instagram.com/karyainfrastruktur",
    facebook: "https://facebook.com/karyainfrastruktur",
    youtube: "https://youtube.com/@karyainfrastruktur",
  },
  legal: {
    nib: "1234567890123",
    ahu: "AHU-0012345.AH.01.01.Tahun 2010",
    npwp: "01.234.567.8-012.000",
    klasifikasiUsaha: "K38415 — Konstruksi Bangunan Sipil",
    bentukBadanHukum: "Perseroan Terbatas (PT)",
  },
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.9!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNTQnMDAuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  {
    label: "Produk & Layanan",
    href: "/produk-layanan",
    children: [
      { label: "Konstruksi Bangunan", href: "/produk-layanan/konstruksi-bangunan" },
      { label: "Konsultasi Teknik", href: "/produk-layanan/konsultasi-teknik" },
      { label: "Manajemen Proyek", href: "/produk-layanan/manajemen-proyek" },
      { label: "Pengadaan Material", href: "/produk-layanan/pengadaan-material" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Galeri", href: "/galeri" },
  { label: "Blog", href: "/blog" },
  { label: "Karir", href: "/karir" },
  { label: "FAQ", href: "/faq" },
  { label: "Mitra", href: "/mitra" },
  { label: "Kontak", href: "/kontak", isButton: true },
];

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Tahun Pengalaman" },
  { value: 200, suffix: "+", label: "Proyek Selesai" },
  { value: 50, suffix: "+", label: "Klien Institusi" },
  { value: 98, suffix: "%", label: "Tingkat Kepuasan" },
];

export const timeline: TimelineEvent[] = [
  { year: 2010, title: "Pendirian Perusahaan", description: "PT Karya Infrastruktur Nusantara didirikan di Jakarta dengan 12 karyawan dan fokus pada proyek konstruksi skala kecil-menengah." },
  { year: 2013, title: "Sertifikasi ISO 9001", description: "Memperoleh sertifikasi ISO 9001:2008 untuk sistem manajemen mutu, menandai komitmen terhadap standar internasional." },
  { year: 2016, title: "Ekspansi Infrastruktur", description: "Merambah proyek infrastruktur jalan dan jembatan, serta membuka divisi konsultasi teknik dan manajemen proyek." },
  { year: 2019, title: "200+ Proyek Selesai", description: "Mencapai 200 proyek selesai dan membangun kemitraan strategis dengan BUMN maupun swasta." },
  { year: 2022, title: "Sertifikasi CSMS & SMK3", description: "Memperoleh sertifikasi CSMS (Contractor Safety Management System) dan SMK3 untuk memperkuat standar K3." },
  { year: 2024, title: "Ekspansi Digital", description: "Meluncurkan konfigurasi layanan digital, pelacakan proyek real-time, dan peremajaan brand perusahaan." },
];

export const clients: Client[] = [
  { id: "client-1", name: "PT Bumi Perkasa Energi", logo: "/images/clients/client-1.svg", industry: "Energi" },
  { id: "client-2", name: "Bank Nusantara Sejahtera", logo: "/images/clients/client-2.svg", industry: "Perbankan" },
  { id: "client-3", name: "PT Sarana Logistik Global", logo: "/images/clients/client-3.svg", industry: "Logistik" },
  { id: "client-4", name: "Grupa Makan & Minum Cemerlang", logo: "/images/clients/client-4.svg", industry: "FMCG" },
  { id: "client-5", name: "Rumah Sakit Medika Prima", logo: "/images/clients/client-5.svg", industry: "Kesehatan" },
  { id: "client-6", name: "Universitas Nusantara 45", logo: "/images/clients/client-1.svg", industry: "Pendidikan" },
  { id: "client-7", name: "PT Datacenter Indonesia", logo: "/images/clients/client-2.svg", industry: "Teknologi" },
  { id: "client-8", name: "Pemkot Mitra Abadi", logo: "/images/clients/client-4.svg", industry: "Pemerintah" },
];

export const certifications: Certification[] = [
  { id: "cert-1", name: "ISO 9001:2015", issuer: "Quality Management", logo: "/images/certifications/iso-9001.svg", validUntil: "2027" },
  { id: "cert-2", name: "ISO 14001:2015", issuer: "Environmental Management", logo: "/images/certifications/iso-14001.svg", validUntil: "2027" },
  { id: "cert-3", name: "BUJK Kualifikasi Gred 7", issuer: "Badan Usaha Jasa Konstruksi", logo: "/images/certifications/bujk.svg", validUntil: "2028" },
  { id: "cert-4", name: "CSMS & SMK3", issuer: "Keselamatan Kerja", logo: "/images/certifications/csms.svg", validUntil: "2026" },
];

export const whatsappMessage = "Halo PT Karya Infrastruktur Nusantara, saya ingin bertanya tentang layanan Anda.";