import type { BlogPost } from "@/types";
import { readingTime } from "@/lib/utils";

const baseAuthor = {
  name: "Andi Pratama",
  role: "Direktur Teknik",
  avatar: "/images/team/cto.svg",
};

export const blogPosts: BlogPost[] = [
  {
    id: "p-1",
    slug: "tren-konstruksi-2025",
    title: "5 Tren Konstruksi 2025 yang Wajib Diperhatikan Pelaku Industri",
    excerpt:
      "Dari Building Information Modeling (BIM) hingga konstruksi modular — inilah arah masa depan industri konstruksi Indonesia dan bagaimana perusahaan bisa beradaptasi.",
    content: `
      <p>Industri konstruksi Indonesia terus bertransformasi seiring dengan pertumbuhan infrastruktur dan digitalisasi. Memahami tren yang berkembang bukan lagi pilihan, melainkan kebutuhan agar perusahaan tetap kompetitif.</p>
      <h2>1. Adopsi BIM yang Lebih Masif</h2>
      <p>Building Information Modeling (BIM) kini menjadi standar pada proyek pemerintah dan swasta besar. BIM memungkinkan kolaborasi antarstakeholder dalam satu model 3D sehingga mengurangi rework dan meningkatkan akurasi perencanaan.</p>
      <h2>2. Konstruksi Modular & Prefabrikasi</h2>
      <p>Metode prefabrikasi memangkas waktu pembangunan secara signifikan. Elemen dibuat di workshop dengan toleransi ketat, kemudian dirakit di lokasi — mengurangi limbah dan risiko kecelakaan kerja.</p>
      <h2>3. Material Ramah Lingkungan</h2>
      <p>Tuntutan green construction semakin kuat. Penggunaan beton ramah lingkungan, material daur ulang, dan sertifikasi greenship menjadi nilai jual utama proyek komersial.</p>
      <h2>4. Digitalisasi Pengelolaan Proyek</h2>
      <p>Software manajemen proyek, pelacakan real-time, dan drone survey menjadi perangkat wajib untuk memantau progres secara akurat dan transparan.</p>
      <h2>5. K3 Berbasis Data</h2>
      <p>Keselamatan kerja kini dikelola dengan data — pemantauan workforce, sensor lingkungan, dan digital safety reporting menekan angka kecelakaan kerja mendekati nol.</p>
      <p>Kami di PT Karya Infrastruktur Nusantara telah mengadopsi tren di atas dalam setiap proyek untuk memastikan hasil berkualitas, tepat waktu, dan aman.</p>
    `,
    coverImage: "/images/blog/article-1.jpg",
    category: "industri",
    author: baseAuthor,
    publishedAt: "2025-05-18",
    readingTime: 6,
    tags: ["Konstruksi", "BIM", "Tren 2025", "Infrastruktur"],
    isFeatured: true,
  },
  {
    id: "p-2",
    slug: "tips-memilih-kontraktor",
    title: "7 Hal yang Harus Diperiksa Sebelum Memilih Kontraktor",
    excerpt:
      "Memilih kontraktor yang tepat adalah kunci sukses proyek. Simak checklist praktis untuk menilai legalitas, track record, hingga sistem K3 kontraktor Anda.",
    content: `
      <p>Kesalahan memilih kontraktor adalah biaya termahal dalam sebuah proyek. Karena itu, lakukan verifikasi menyeluruh sebelum menandatangani kontrak.</p>
      <h2>1. Legalitas & Izin Usaha</h2>
      <p>Pastikan perusahaan memiliki NIB, SK Kementerian PUPR, dan sertifikat kualifikasi gred yang sesuai dengan skala proyek Anda.</p>
      <h2>2. Track Record Proyek</h2>
      <p>Minta portofolio proyek serupa, lengkap dengan referensi klien. Kunjungi langsung salah satu proyek yang sedang atau telah berjalan.</p>
      <h2>3. Tim & Tenaga Ahli</h2>
      <p>Periksa kualifikasi site manager, insinyur, hingga mandor — pastikan tersertifikasi dan berpengalaman.</p>
      <h2>4. Sistem Manajemen Mutu</h2>
      <p>Kontraktor profesional memiliki prosedur quality control terdokumentasi, bukan sekadar janji.</p>
      <h2>5. Komitmen K3</h2>
      <p>Pastikan ada personel K3 dan dokumentasi SMK3/CSMS. Statistik kecelakaan kerja yang rendah adalah indikator manajemen yang baik.</p>
      <h2>6. Kejelasan RAB</h2>
      <p>RAB yang rinci dan transparan adalah tanda profesionalisme. Waspadai penawaran jauh di bawah harga pasar.</p>
      <h2>7. Jaminan & Garansi</h2>
      <p>Pastikan ada garansi pemeliharaan tertulis, biasanya 3-12 bulan setelah serah terima.</p>
    `,
    coverImage: "/images/blog/article-2.jpg",
    category: "tips",
    author: { name: "Siti Rahayu", role: "Manajer Proyek", avatar: "/images/team/cfo.svg" },
    publishedAt: "2025-04-02",
    readingTime: 5,
    tags: ["Tips", "Kontraktor", "Proyek"],
  },
  {
    id: "p-3",
    slug: "pentingnya-k3-proyek",
    title: "Mengapa K3 Bukan Biaya, Melainkan Investasi Proyek",
    excerpt:
      "Banyak yang memandang keselamatan kerja sebagai beban anggaran. Padahal, K3 yang baik menekan kerugian, meningkatkan produktivitas, dan menjaga reputasi perusahaan.",
    content: `
      <p>Budaya K3 (Keselamatan dan Kesehatan Kerja) sering disalahpahami sebagai biaya tambahan. Data menunjukkan sebaliknya: setiap rupiah yang diinvestasikan untuk K3 menghasilkan penghematan berganda.</p>
      <h2>Biaya Tersembunyi Kecelakaan Kerja</h2>
      <p>Kecelakaan membawa biaya langsung (medis, kompensasi) dan tidak langsung (penghentian kerja, penurunan moral, klaim asuransi, hingga sanksi hukum) yang umumnya 4-10 kali lipat biaya langsung.</p>
      <h2>Rasio Investasi vs Manfaat</h2>
      <p>Studi global menunjukkan rasio manfaat-biaya program K3 berkisar 1:2 hingga 1:3. Artinya, investasi K3 mengembalikan 2-3 kali lipat nilainya.</p>
      <h2>K3 Meningkatkan Produktivitas</h2>
      <p>Lingkungan kerja yang aman meningkatkan moral dan produktivitas pekerja. Pekerja yang merasa aman bekerja lebih fokus dan efisien.</p>
      <h2>Reputasi & Kemenangan Tender</h2>
      <p>Pemilik proyek — terutama BUMN dan korporasi — kini menjadikan rekam jejak K3 sebagai syarat kualifikasi tender.</p>
      <h2>Strategi K3 yang Efektif</h2>
      <ul>
        <li>Komitmen manajemen puncak yang terlihat nyata</li>
        <li>Identifikasi bahaya dan penilaian risiko berkala</li>
        <li>Pelatihan, toolbox meeting, dan safety induction rutin</li>
        <li>Pelaporan & investigasi insiden secara transparan</li>
        <li>Audit internal dan eksternal terjadwal</li>
      </ul>
      <p>Di PT Karya Infrastruktur Nusantara, kami mencatat lebih dari 2.000.000 jam kerja aman — bukti bahwa K3 adalah fondasi kesuksesan proyek.</p>
    `,
    coverImage: "/images/blog/article-3.jpg",
    category: "berita",
    author: { name: "Budi Santoso", role: "Kepala Divisi K3", avatar: "/images/team/coo.svg" },
    publishedAt: "2025-03-10",
    readingTime: 4,
    tags: ["K3", "Keselamatan", "Manajemen Risiko"],
  },
  {
    id: "p-4",
    slug: "mengenal-bim",
    title: "Mengenal BIM: Teknologi yang Mengubah Wajah Konstruksi",
    excerpt:
      "Apa itu Building Information Modeling (BIM), apa manfaatnya bagi pemilik proyek, dan mengapa sekarang menjadi standar wajib di proyek besar?",
    content: `
      <p>Building Information Modeling (BIM) adalah pendekatan digital yang menyatukan seluruh informasi proyek — geometri, jadwal, biaya, dan spesifikasi — dalam satu model 3D yang hidup. Berikut penjelasan lengkapnya.</p>
      <h2>Apa Itu BIM?</h2>
      <p>BIM bukan sekadar model 3D. Ia adalah proses kolaboratif yang memungkinkan semua pihak (arsitek, insinyur, kontraktor, pemilik) bekerja dalam satu sumber informasi tunggal.</p>
      <h2>Manfaat Bagi Pemilik Proyek</h2>
      <ul>
        <li>Visualisasi desain sebelum bangunan dibangun</li>
        <li>Deteksi konflik antar-disiplin lebih awal (clash detection)</li>
        <li>Estimasi biaya dan volume yang lebih akurat</li>
        <li>Simulasi jadwal konstruksi (4D) dan biaya (5D)</li>
        <li>Dokumen as-built yang akurat untuk pemeliharaan</li>
      </ul>
      <h2>Level BIM</h2>
      <p>Dari BIM Level 0 (2D CAD) hingga Level 3 (fully integrated). Mayoritas proyek besar di Indonesia kini menargetkan Level 2 — kolaborasi melalui model 3D bersama (federated model).</p>
      <h2>Masa Depan BIM di Indonesia</h2>
      <p>Dengan mandat pemerintah untuk proyek strategis dan meningkatnya kesadaran swasta, BIM akan menjadi standar wajib. Perusahaan yang menguasai BIM sejak sekarang berada di garis depan persaingan.</p>
    `,
    coverImage: "/images/blog/article-4.jpg",
    category: "teknologi",
    author: baseAuthor,
    publishedAt: "2025-02-14",
    readingTime: 5,
    tags: ["BIM", "Teknologi", "Digitalisasi"],
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  const post = blogPosts.find((p) => p.slug === slug);
  if (post && post.readingTime === 0) {
    return { ...post, readingTime: readingTime(post.content) };
  }
  return post;
};