import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { companyInfo } from "@/data/company";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { BackToTop } from "@/components/layout/back-to-top";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const SITE_URL = "https://demo-companyprofile.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${companyInfo.name} | Konstruksi & Infrastruktur`,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  keywords: [
    "konstruksi",
    "kontraktor",
    "manajemen proyek",
    "konsultasi teknik",
    "infrastruktur",
    "jasa konstruksi",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: companyInfo.name,
    title: `${companyInfo.name} | Konstruksi & Infrastruktur`,
    description: companyInfo.description,
    images: [{ url: "/images/og/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body>
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}