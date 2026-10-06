import { Clock, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

const items = [
  {
    Icon: MapPin,
    title: "Alamat Kantor",
    lines: [
      companyInfo.address.street,
      `${companyInfo.address.city}, ${companyInfo.address.province} ${companyInfo.address.postalCode}`,
    ],
  },
  {
    Icon: Phone,
    title: "Telepon",
    lines: [companyInfo.contact.phoneDisplay],
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    lines: [`${companyInfo.contact.whatsappDisplay} (chat)`],
    href: `https://wa.me/${companyInfo.contact.whatsapp}?text=Halo`,
  },
  {
    Icon: Mail,
    title: "Email",
    lines: [companyInfo.contact.email],
    href: `mailto:${companyInfo.contact.email}`,
  },
  {
    Icon: Clock,
    title: "Jam Operasional",
    lines: [`${companyInfo.operatingHours.days}`, `${companyInfo.operatingHours.hours}`],
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <item.Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-heading text-sm font-bold text-slate-900">{item.title}</p>
            {item.lines.map((l) =>
              item.href ? (
                <a
                  key={l}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block text-sm text-slate-600 hover:text-blue-700"
                >
                  {l}
                </a>
              ) : (
                <p key={l} className="text-sm text-slate-600">
                  {l}
                </p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}