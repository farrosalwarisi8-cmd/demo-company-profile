import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    slug: "konstruksi-bangunan",
    title: "Konstruksi Bangunan",
    shortDescription:
      "Eksekusi konstruksi bangunan hunian, komersial, dan industri dengan standar mutu, keselamatan, dan ketepatan waktu yang terukur.",
    fullDescription:
      "Divisi konstruksi bangunan kami menangani pembangunan gedung hunian, ruko, perkantoran, gudang, hingga pabrik. Kami bekerja dengan metode pelaksanaan yang terstruktur, mulai dari pekerjaan struktur, arsitektur, hingga mekanikal-elektrikal dan plumbing (MEP). Setiap tahap dipantau oleh site engineer dan diawasi penuh oleh tim quality control untuk memastikan hasil sesuai spesifikasi dan regulasi.",
    icon: "Building2",
    image: "/images/products/product-konstruksi.jpg",
    features: [
      "Penyediaan tenaga kerja terlatih & bersertifikat K3",
      "Metode pelaksanaan & shop drawing terperinci",
      "Rencana mutu kontrak (RMK) & jadwal Barchart",
      "Pemantauan progres mingguan via laporan terdokumentasi",
      "Kepatuhan penuh terhadap regulasi PBG & K3",
    ],
    specifications: [
      { label: "Jenis Pekerjaan", value: "Struktur, arsitektur, MEP" },
      { label: "Kualifikasi", value: "Gred 7 (unlimited)" },
      { label: "Standar", value: "SNI, ISO 9001, SMK3" },
      { label: "Tenaga Kerja", value: "Sertifikasi BNSP & K3" },
      { label: "Waktu Pengerjaan", value: "Sesuai ruang lingkup proyek" },
    ],
    process: [
      { step: 1, title: "Konsultasi & Survey", description: "Diskusi kebutuhan, survey lokasi, dan analisis kelayakan teknis." },
      { step: 2, title: "Estimasi & Penawaran", description: "RAB rinci, metode pelaksanaan, dan jadwal kerja." },
      { step: 3, title: "Pelaksanaan Konstruksi", description: "Eksekusi lapangan dengan pengawasan mutu & K3 ketat." },
      { step: 4, title: "Serah Terima & Garansi", description: "Commissioning, serah terima, dan garansi purna jual." },
    ],
    faq: [
      { question: "Apakah menerima proyek di luar Jabodetabek?", answer: "Ya, kami menerima proyek di seluruh Indonesia dengan menyesuaikan mobilisasi tenaga dan material." },
      { question: "Berapa lama waktu pengerjaan rata-rata?", answer: "Tergantung luas dan kompleksitas. Rumah tinggal 2 lantai umumnya 4-6 bulan, sedangkan gedung komersial 8-14 bulan." },
      { question: "Apakah menyediakan jasa perancangan (desain)?", answer: "Ya, kami bekerja sama dengan konsultan arsitek dan struktur untuk menyediakan desain lengkap satu paket." },
    ],
    relatedPortfolioSlugs: ["pabrik-makanan", "kantor-bank", "gudang-logistik"],
  },
  {
    id: "svc-2",
    slug: "konsultasi-teknik",
    title: "Konsultasi Teknik",
    shortDescription:
      "Pendampingan teknis dari tahap perencanaan hingga pelaksanaan, termasuk kajian struktur, pengawasan, dan audit bangunan.",
    fullDescription:
      "Layanan konsultasi teknik kami menjembatani kebutuhan pemilik proyek dengan sisi teknis pelaksanaan. Tim insinyur kami menyediakan analisis struktur, desain teknis, perencanaan anggaran, feasibility study, hingga supply sebagai supervisi pengawas. Layanan ini ideal untuk pemilik proyek yang ingin memastikan kualitas, efisiensi biaya, dan kepatuhan regulasi sejak tahap awal.",
    icon: "PenTool",
    image: "/images/products/product-konsultasi.jpg",
    features: [
      "Feasibility study & kajian kelayakan proyek",
      "Analisis struktur & desain teknis (SAP2000, Etabs)",
      "Penyusunan RAB, jadwal, dan spesifikasi teknis",
      "Supervisi & pengawasan konstruksi (TPK/CK)",
      "Audit bangunan & investigasi kelayakan",
    ],
    specifications: [
      { label: "Layanan Utama", value: "Analisis struktur, supervisi, audit" },
      { label: "Insinyur", value: "Ir. / S.T., bersertifikat IPM / PII" },
      { label: "Perangkat", value: "Etabs, SAP2000, AutoCAD, Revit" },
      { label: "Deliverable", value: "Laporan, gambar, dokumen teknis" },
    ],
    process: [
      { step: 1, title: "Brief & Data Collect", description: "Pengumpulan data, dokumen, dan kebutuhan pemilik proyek." },
      { step: 2, title: "Analisis & Desain", description: "Pemodelan, perhitungan, dan penyusunan desain teknis." },
      { step: 3, title: "Laporan & Rekomendasi", description: "Penyusunan laporan lengkap dengan rekomendasi." },
      { step: 4, title: "Pendampingan", description: "Dampingan pelaksanaan atau supervisi berkala." },
    ],
    faq: [
      { question: "Apakah konsultasi bisa dilakukan jarak jauh?", answer: "Ya, untuk analisis dan laporan dapat dilakukan jarak jauh, dengan kunjungan lapangan sesuai kebutuhan." },
      { question: "Apakah menyediakan tenaga ahli berstempel?", answer: "Ya, tim kami terdiri dari insinyur profesional (Ir./S.T.) yang mensupervisi seluruh laporan kerja." },
    ],
    relatedPortfolioSlugs: ["jalan-tol-perkotaan", "rumah-sakit", "kantor-bank"],
  },
  {
    id: "svc-3",
    slug: "manajemen-proyek",
    title: "Manajemen Proyek",
    shortDescription:
      "Pengelolaan proyek konstruksi menyeluruh: jadwal, biaya, mutu, dan HSE — dipimpin project manager berpengalaman.",
    fullDescription:
      "Kami mengelola proyek Anda dari konsep hingga serah terima sebagai penyedia jasa manajemen konstruksi (MK). Tim project management kami menangani perencanaan, pengendalian biaya dan jadwal, koordinasi kontraktor, pengendalian mutu, serta penerapan K3. Dengan pendekatan berbasis data, klien dapat memantau progres secara transparan melalui laporan berkala dan rapat koordinasi terjadwal.",
    icon: "ClipboardList",
    image: "/images/products/product-manajemen.jpg",
    features: [
      "Pengelolaan anggaran proyek (cost plan & controlling)",
      "Penyusunan & pengendalian jadwal (CPM/PERT)",
      "Koordinasi antarkontraktor & konsultan",
      "Pengendalian mutu & inspeksi berkala",
      "Pelaporan progres bulanan kepada pemilik proyek",
    ],
    specifications: [
      { label: "Standar", value: "PMBOK & SMK3" },
      { label: "Tim", value: "Project Manager + Site Engineer" },
      { label: "Pelaporan", value: "Mingguan / bulanan" },
      { label: "Tools", value: "MS Project, cost control database" },
    ],
    process: [
      { step: 1, title: "Review Dokumen", description: "Review gambar, spesifikasi, dan kontrak kerja." },
      { step: 2, title: "Rencana Induk", description: "Master schedule, cost plan, dan organisasi proyek." },
      { step: 3, title: "Pengendalian", description: "Monitoring progres, biaya, mutu, dan K3." },
      { step: 4, title: "Serah Terima", description: "Dokumentasi as-built dan laporan akhir proyek." },
    ],
    faq: [
      { question: "Apa bedanya jasa MK dengan kontraktor?", answer: "Kami mewakili kepentingan pemilik proyek dalam mengawasi dan mengendalikan jalannya proyek, bukan mengerjakan konstruksinya secara langsung." },
      { question: "Berapa besar komitmen waktu yang dibutuhkan?", answer: "Ditentukan oleh skala proyek, umumnya dengan inspeksi rutin 2-3 kali dalam sepekan." },
    ],
    relatedPortfolioSlugs: ["gudang-logistik", "jembatan-kali-ciyokot", "pabrik-makanan"],
  },
  {
    id: "svc-4",
    slug: "pengadaan-material",
    title: "Pengadaan Material",
    shortDescription:
      "Rantai pasok material konstruksi terverifikasi dengan harga kompetitif, ketepatan pengiriman, dan kontrol kualitas.",
    fullDescription:
      "Divisi pengadaan kami mengelola rantai pasok material konstruksi — mulai dari agregat, baja, semen, hingga material finish MEP. Kami membangun jaringan pemasok terverifikasi dan melakukan kontrol kualitas masuk (incoming inspection) untuk setiap pengiriman. Dengan sistem logistik terpadu, material tiba tepat waktu di lokasi proyek, mengurangi waktu tunggu dan meminimalkan pemborosan di lapangan.",
    icon: "Package",
    image: "/images/products/product-pengadaan.jpg",
    features: [
      "Sumber material terverifikasi & sertifikasi mutu",
      "Harga kompetitif melalui pemasok langsung",
      "Kontrol mutu masuk per pengiriman",
      "Manajemen stok & jadwal pengiriman tepat waktu",
      "Negosiasi kontrak & administrasi pengadaan",
    ],
    specifications: [
      { label: "Material", value: "Struktur, arsitektur, MEP, scaffolding" },
      { label: "Jaminan Mutu", value: "Surat izin / sertifikat & hasil uji lab" },
      { label: "Pemasok", value: "Mitra terverifikasi di 12 provinsi" },
      { label: "Sistem", value: "Purchase order & delivery tracking" },
    ],
    process: [
      { step: 1, title: "Kebutuhan Material", description: "Revisi gambar & bill of quantity untuk menentukan kebutuhan." },
      { step: 2, title: "Sourcing & Quotation", description: "Penawaran dari beberapa pemasok, klarifikasi mutu & harga." },
      { step: 3, title: "Order & Delivery", description: "Penerbitan PO dan penjadwalan pengiriman bertahap." },
      { step: 4, title: "Inspeksi & Kontrol", description: "Pemeriksaan kualitas masuk dan pelaporan penerimaan." },
    ],
    faq: [
      { question: "Apakah dapat menangani pembelian proyek besar?", answer: "Ya, kami berpengalaman menangani kebutuhan material proyek bernilai miliaran rupiah secara bertahap." },
      { question: "Bagaimana menjamin kualitas material?", answer: "Setiap pengiriman disertai sertifikat mutu dan dilakukan inspeksi oleh tim QC kami." },
    ],
    relatedPortfolioSlugs: ["jembatan-kali-ciyokot", "gudang-logistik", "jalan-tol-perkotaan"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);