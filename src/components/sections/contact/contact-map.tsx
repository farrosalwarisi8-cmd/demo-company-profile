import { companyInfo } from "@/data/company";

export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
      <iframe
        title="Lokasi PT Karya Infrastruktur Nusantara"
        src={companyInfo.googleMapsEmbed}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}