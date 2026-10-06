import { Download, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function CtaSection() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 px-6 py-16 text-center shadow-lift md:px-16 md:py-20">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.3) 0, transparent 35%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Siap Memulai Proyek Bersama Kami?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-blue-100">
                Konsultasikan kebutuhan proyek Anda dengan tim kami. Kami siap memberikan penawaran yang transparan dan terukur.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/kontak" size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </ButtonLink>
                <ButtonLink
                  href="/pdfs/company-profile.pdf"
                  size="lg"
                  className="border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Profile
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}