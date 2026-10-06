import { certifications } from "@/data/company";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";

export function CertificationsSection() {
  return (
    <section className="section py-14 md:py-16">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Disertifikasi & Berstandar Nasional
          </p>
        </Reveal>
        <RevealStagger className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {certifications.map((c) => (
            <RevealItem key={c.id}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt={c.name} className="h-12 w-12 object-contain opacity-80 transition-opacity group-hover:opacity-100" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{c.name}</p>
                  <p className="text-xs text-slate-400">{c.issuer}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}