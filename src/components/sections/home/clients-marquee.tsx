import { clients } from "@/data/company";
import { SectionHeading } from "@/components/shared/section-heading";

export function ClientsMarquee() {
  const doubled = [...clients, ...clients];
  return (
    <section className="section py-14 md:py-16">
      <div className="container-page">
        <SectionHeading
          eyebrow="Klien Kami"
          title="Dipercaya oleh Institusi & Perusahaan"
        />
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {doubled.map((c, i) => (
            <div
              key={`${c.id}-${i}`}
              className="flex h-16 min-w-[180px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.logo} alt={c.name} className="h-9 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
            </div>
          ))}
        </div>
      </div>
      <div className="container-page mt-10 text-center text-xs text-slate-400">
        Logo hanya ilustrasi demo &mdash; nama klien merupakan data tiruan.
      </div>
    </section>
  );
}