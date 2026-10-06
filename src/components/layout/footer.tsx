import Link from "next/link";
import { services } from "@/data/services";
import { companyInfo, primaryNavigation } from "@/data/company";
import { Logo } from "@/components/layout/logo";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/shared/brand-icons";

const socials = [
  { label: "LinkedIn", href: companyInfo.socialMedia.linkedin ?? "", Icon: LinkedinIcon },
  { label: "Instagram", href: companyInfo.socialMedia.instagram ?? "", Icon: InstagramIcon },
  { label: "Facebook", href: companyInfo.socialMedia.facebook ?? "", Icon: FacebookIcon },
  { label: "YouTube", href: companyInfo.socialMedia.youtube ?? "", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{companyInfo.tagline}.</p>
          <p className="mt-3 text-sm text-slate-400">{companyInfo.description}</p>
          <div className="mt-5 flex gap-2">
            {socials
              .filter((s) => s.href)
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-blue-700 hover:text-white"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Kontak
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
              <span>
                {companyInfo.address.street}
                <br />
                {companyInfo.address.city}, {companyInfo.address.province} {companyInfo.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-blue-400" />
              <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-white">
                {companyInfo.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-blue-400" />
              <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white">
                {companyInfo.contact.email}
              </a>
            </li>
            <li className="text-slate-400">
              {companyInfo.operatingHours.days}, {companyInfo.operatingHours.hours}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Layanan
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/produk-layanan/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Perusahaan
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {primaryNavigation
              .filter((n) => !n.isButton && n.label !== "Produk & Layanan")
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/kebijakan-privasi" className="hover:text-white">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="/syarat-ketentuan" className="hover:text-white">
                Syarat & Ketentuan
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <p>
            NIB: {companyInfo.legal.nib} &middot; {companyInfo.legal.ahu}
          </p>
        </div>
      </div>
    </footer>
  );
}