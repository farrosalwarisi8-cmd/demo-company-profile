export interface CompanyAddress {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface CompanyContact {
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
}

export interface CompanyLegal {
  nib: string;
  ahu: string;
  npwp: string;
  klasifikasiUsaha: string;
  bentukBadanHukum: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  foundedYear: number;
  heroImage: string;
  address: CompanyAddress;
  contact: CompanyContact;
  operatingHours: { days: string; hours: string; timezone: string };
  socialMedia: { linkedin?: string; instagram?: string; facebook?: string; youtube?: string };
  legal: CompanyLegal;
  googleMapsEmbed: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
  isButton?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  specifications: { label: string; value: string }[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedPortfolioSlugs: string[];
  downloadUrl?: string;
}

export type PortfolioCategory =
  | "konstruksi"
  | "infrastruktur"
  | "renovasi"
  | "konsultasi"
  | "lainnya";

export const PORTFOLIO_CATEGORIES: { value: PortfolioCategory | "semua"; label: string }[] = [
  { value: "semua", label: "Semua" },
  { value: "konstruksi", label: "Konstruksi" },
  { value: "infrastruktur", label: "Infrastruktur" },
  { value: "renovasi", label: "Renovasi" },
  { value: "lainnya", label: "Lainnya" },
];

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  client: string;
  location: string;
  year: number;
  duration: string;
  value?: string;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  problem: string;
  solution: string;
  impact: string[];
  relatedServiceSlug: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  linkedin?: string;
  bio?: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  authorPhoto: string;
  rating: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  logo: string;
  validUntil?: string;
}

export type BlogCategory = "industri" | "tips" | "berita" | "teknologi";

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  isFeatured?: boolean;
}

export type JobType = "full-time" | "part-time" | "contract" | "internship";

export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  salary: string;
  deadline: string;
  isNew: boolean;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  description?: string;
  items: { question: string; answer: string }[];
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  location: string;
  category: PortfolioCategory;
  projectSlug: string;
}

export interface ContactFormValues {
  nama: string;
  perusahaan: string;
  email: string;
  telepon: string;
  subjek: "RFQ" | "Konsultasi" | "Kerjasama" | "Informasi" | "Lainnya";
  pesan: string;
}