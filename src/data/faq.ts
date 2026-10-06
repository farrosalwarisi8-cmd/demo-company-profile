import type { FaqCategory } from "@/types";

export const faqCategories: FaqCategory[] = [
  {
    id: "layanan-proyek",
    title: "Layanan & Proyek",
    description:
      "Jenis layanan, cakupan area kerja, dan hal-hal teknis yang sering ditanyakan pelanggan.",
    items: [
      {
        question: "Layanan apa saja yang ditawarkan?",
        answer:
          "Kami menyediakan empat layanan utama yang saling melengkapi: Konstruksi Bangunan (hunian, komersial, industri), Konsultasi Teknik (analisis struktur, supervisi, audit), Manajemen Proyek (sebagai penyedia jasa MK), dan Pengadaan Material. Klien juga dapat menggunakan kombinasi layanan dalam satu paket terpadu.",
      },
      {
        question: "Apakah menerima proyek di luar Jabodetabek?",
        answer:
          "Ya, kami menerima proyek di seluruh Indonesia. Untuk area yang lebih jauh, tim kami akan menyesuaikan rencana mobilisasi tenaga kerja, peralatan, dan pengiriman material agar tetap efisien dari sisi biaya dan waktu.",
      },
      {
        question: "Apakah menyediakan jasa perancangan (desain)?",
        answer:
          "Ya. Kami bekerja sama dengan konsultan arsitek dan struktur untuk menyediakan desain lengkap satu paket bersama pengerjaan konstruksi, sehingga proses desain-ke-pelaksanaan berjalan lebih cepat dan terkoordinasi.",
      },
      {
        question: "Apa bedanya jasa manajemen konstruksi dengan kontraktor?",
        answer:
          "Sebagai penyedia jasa manajemen konstruksi (MK), kami mewakili kepentingan pemilik proyek untuk mengawasi dan mengendalikan jalannya proyek — mulai dari perencanaan, pengendalian biaya dan jadwal, hingga koordinasi antarkontraktor. Kami tidak mengerjakan konstruksinya secara langsung.",
      },
      {
        question: "Apakah dapat menangani proyek berskala besar?",
        answer:
          "Ya. Kami berpengalaman menangani proyek bernilai miliaran rupiah seperti pabrik, gedung bertingkat, jalan tol, hingga jembatan. Dengan kualifikasi BUJK Gred 7 (unlimited), kami dapat mengerjakan proyek berbagai skala dan kompleksitas.",
      },
    ],
  },
  {
    id: "proses-waktu",
    title: "Proses & Waktu Pengerjaan",
    description:
      "Bagaimana alur kerja kami berjalan, bagaimana progres dipantau, dan berapa lama pengerjaan umumnya memakan waktu.",
    items: [
      {
        question: "Bagaimana alur kerja dari konsultasi hingga serah terima?",
        answer:
          "Alur standar kami: (1) konsultasi dan survei lapangan, (2) estimasi biaya dan penawaran, (3) kesepakatan kontrak dan jadwal, (4) pelaksanaan dengan pengawasan mutu dan K3, (5) commissioning dan serah terima, lalu (6) masa garansi purna jual.",
      },
      {
        question: "Berapa lama waktu pengerjaan rata-rata?",
        answer:
          "Tergantung luas dan kompleksitas proyek. Rumah tinggal 2 lantai umumnya memakan waktu 4-6 bulan, gedung komersial 8-14 bulan, sedangkan proyek infrastruktur besar dapat mencapai 18 bulan atau lebih sesuai ruang lingkup.",
      },
      {
        question: "Bagaimana progres proyek dipantau?",
        answer:
          "Klien menerima laporan progres secara berkala (mingguan/bulanan) yang mencakup capaian fisik (persentase), realisasi biaya terhadap anggaran, foto dokumentasi, serta temuan dan rencana tindak lanjut. Untuk proyek tertentu, kami juga menyediakan monitor progres secara digital.",
      },
      {
        question: "Apakah konsultasi teknik bisa dilakukan jarak jauh?",
        answer:
          "Ya. Untuk pekerjaan analisis, desain, dan penyusunan laporan dapat dilakukan jarak jauh. Kunjungan lapangan akan dijadwalkan sesuai kebutuhan agar hasil tetap akurat dan terverifikasi.",
      },
      {
        question: "Apakah proyek bisa dikerjakan tanpa menghentikan operasional existing?",
        answer:
          "Bisa. Kami kerap mengerjakan renovasi atau perluasan pada fasilitas yang tetap beroperasi, seperti rumah sakit dan pabrik, dengan menerapkan metode zoning, pengaturan jadwal bising, dan pengendalian debu agar gangguan diminimalkan.",
      },
    ],
  },
  {
    id: "biaya-kontrak",
    title: "Biaya, Penawaran & Kontrak",
    description:
      "Seputar estimasi biaya, proses penawaran, skema pembayaran, dan hal-hal terkait kontrak.",
    items: [
      {
        question: "Bagaimana cara mendapatkan penawaran (RAB)?",
        answer:
          "Silakan isi formulir di halaman Kontak atau hubungi kami melalui WhatsApp/telepon. Tim kami akan menjadwalkan diskusi kebutuhan dan survei lokasi, kemudian menyusun RAB rinci beserta jadwal kerja — biasanya dalam 3-7 hari kerja setelah data lengkap.",
      },
      {
        question: "Apakah konsultasi awal dikenakan biaya?",
        answer:
          "Tidak. Konsultasi dan survei awal untuk penyusunan penawaran tidak dipungut biaya. Biaya baru muncul apabila Anda melanjutkan ke tahap desain terperinci atau pelaksanaan proyek.",
      },
      {
        question: "Bagaimana skema pembayaran umumnya?",
        answer:
          "Skema pembayaran mengikuti tahapan progres pekerjaan (termijn). Umumnya terdiri dari uang muka (mobilisasi) di awal kontrak, lalu pembayaran berkala berdasarkan persentase progres yang disepakati, dan retensi akhir yang dicairkan setelah masa pemeliharaan selesai.",
      },
      {
        question: "Apakah angkanya sudah termasuk material dan tenaga kerja?",
        answer:
          "Ya. Penawaran yang kami berikan bersifat menyeluruh dan mencakup tenaga kerja, material, peralatan, serta biaya tidak langsung sesuai ruang lingkup yang disepakati. Kami menghindari biaya tersembunyi di luar kesepakatan.",
      },
      {
        question: "Bagaimana jika terjadi perubahan pekerjaan di tengah proyek?",
        answer:
          "Perubahan lingkup ditangani melalui prosedur addendum atau change order yang terdokumentasi. Setiap penambahan/pengurangan pekerjaan akan disepakati bersama sebelum dieksekusi agar tidak ada kejutan biaya di akhir.",
      },
    ],
  },
  {
    id: "mutu-legalitas",
    title: "K3, Mutu & Legalitas",
    description:
      "Komitmen kami terhadap keselamatan kerja, kualitas hasil, dan kredibilitas legal perusahaan.",
    items: [
      {
        question: "Bagaimana standar keselamatan kerja (K3) di proyek?",
        answer:
          "Kami menerapkan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) serta CSMS. Setiap proyek memiliki petugas K3, induction untuk seluruh pekerja, alat pelindung diri yang memadai, dan prosedur inspeksi rutin. Target kami adalah zero accident di setiap proyek.",
      },
      {
        question: "Bagaimana menjamin kualitas hasil dan material?",
        answer:
          "Kami berpegang pada standar SNI dan sistem manajemen mutu ISO 9001. Material yang masuk diinspeksi dengan sertifikat mutu dan uji lab, pekerjaan diperiksa oleh tim quality control di setiap tahap, dan metode pelaksanaan disusun sesuai spesifikasi yang disepakati.",
      },
      {
        question: "Apakah perusahaan tersertifikasi?",
        answer:
          "Ya, kami memegang sertifikasi ISO 9001:2015 (mutu), ISO 14001:2015 (lingkungan), BUJK Gred 7 (kualifikasi tidak terbatas), serta CSMS dan SMK3 untuk keselamatan kerja. Legalitas perusahaan lengkap dan terdaftar resmi (NIB, SK AHU, NPWP).",
      },
      {
        question: "Apakah saya dapat memverifikasi legalitas perusahaan?",
        answer:
          "Tentu. Seluruh data legalitas seperti NIB, SK AHU Kemenkumham, NPWP, dan klasifikasi usaha dapat kami tunjukkan pada saat penawaran. Informasi ringkasnya juga tersedia di halaman Tentang Kami.",
      },
      {
        question: "Bagaimana jika hasil pekerjaan bermasalah setelah serah terima?",
        answer:
          "Setiap proyek kami berikan masa pemeliharaan dan garansi sesuai kesepakatan kontrak. Dalam masa tersebut, kami akan memperbaiki setiap kerusakan atau cacat yang menjadi tanggung jawab kami tanpa biaya tambahan.",
      },
    ],
  },
  {
    id: "lainnya",
    title: "Kerja Sama & Lainnya",
    description:
      "Cara menghubungi kami, kerja sama instansi, serta pertanyaan umum lainnya.",
    items: [
      {
        question: "Bagaimana cara terbaik untuk menghubungi tim kami?",
        answer:
          "Anda dapat mengisi formulir di halaman Kontak, menghubungi WhatsApp (+62 812-3456-7890), telepon (+62 21 1234 5678), atau email info@karyainfrastruktur.co.id. Tim kami merespons dalam 1x24 jam pada hari kerja.",
      },
      {
        question: "Apakah melayani kerja sama dengan instansi pemerintah?",
        answer:
          "Ya. Kami berpengalaman mengerjakan proyek pemerintah, termasuk jalan tol dan jembatan, dengan kepatuhan penuh terhadap regulasi pengadaan dan pelaporan berkala sesuai ketentuan yang berlaku.",
      },
      {
        question: "Apakah menerima mahasiswa magang atau kandidat kerja?",
        answer:
          "Ya, kami membuka peluang magang dan rekrutmen. Silakan lihat halaman Karir untuk melihat lowongan yang tersedia, atau kirim CV lamaran spontan ke email resmi kami.",
      },
      {
        question: "Mengapa situs ini menggunakan logo dan foto ilustrasi?",
        answer:
          "Website ini adalah demo company profile. Seluruh nama klien, data proyek, foto, dan logo yang ditampilkan merupakan data tiruan untuk tujuan presentasi, bukan keterangan resmi perusahaan.",
      },
    ],
  },
];

export const getFaqByCategoryId = (id: string): FaqCategory | undefined =>
  faqCategories.find((c) => c.id === id);