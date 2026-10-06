import { HeroSection } from "@/components/sections/home/hero-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { AboutPreview } from "@/components/sections/home/about-preview";
import { ClientsMarquee } from "@/components/sections/home/clients-marquee";
import { PortfolioPreview } from "@/components/sections/home/portfolio-preview";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { CertificationsSection } from "@/components/sections/home/certifications-section";
import { BlogPreviewSection } from "@/components/sections/home/blog-preview-section";
import { CtaSection } from "@/components/sections/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutPreview />
      <ClientsMarquee />
      <PortfolioPreview />
      <TestimonialsSection />
      <CertificationsSection />
      <BlogPreviewSection />
      <CtaSection />
    </>
  );
}