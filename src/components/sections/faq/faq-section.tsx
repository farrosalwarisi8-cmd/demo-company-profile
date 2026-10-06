"use client";

import * as React from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { faqCategories } from "@/data/faq";
import { companyInfo } from "@/data/company";
import { AccordionItem } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealItem, RevealStagger } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

const quickContact = [
  {
    Icon: Phone,
    label: "Telepon",
    value: companyInfo.contact.phoneDisplay,
    href: `tel:${companyInfo.contact.phone}`,
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: companyInfo.contact.whatsappDisplay,
    href: `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(
      "Halo, saya ingin bertanya seputar layanan."
    )}`,
  },
  {
    Icon: Mail,
    label: "Email",
    value: companyInfo.contact.email,
    href: `mailto:${companyInfo.contact.email}`,
  },
];

export function FaqSection() {
  const [activeId, setActiveId] = React.useState<string>(faqCategories[0].id);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`faq-group-${id}`);
    setActiveId(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pusat Bantuan"
            title="Pertanyaan yang Sering Diajukan"
            description="Jawaban lengkap seputar layanan, proses pengerjaan, biaya, hingga legalitas perusahaan."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {quickContact.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <item.Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                    {item.label}
                  </span>
                  <span className="block text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 pt-4 md:pt-4">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr]">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:hidden">
            {faqCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => scrollTo(c.id)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeId === c.id
                    ? "bg-blue-700 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                )}
              >
                {c.title}
                <span className={cn("ml-1.5 text-xs font-bold", activeId === c.id ? "text-white/70" : "text-slate-400")}>
                  {c.items.length}
                </span>
              </button>
            ))}
          </div>

          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
              <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                Topik
              </p>
              <ul className="space-y-1">
                {faqCategories.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(c.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                        activeId === c.id
                          ? "bg-blue-700 text-white"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      )}
                    >
                      {c.title}
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-bold",
                          activeId === c.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        )}
                      >
                        {c.items.length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div id={`faq-group-${category.id}`} key={category.id} className="scroll-mt-24">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">{category.title}</h2>
                  <span className="hidden text-sm font-semibold text-slate-400 sm:block">
                    {category.items.length} pertanyaan
                  </span>
                </div>
                {category.description && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{category.description}</p>
                )}
                <RevealStagger className="mt-5 space-y-3">
                  {category.items.map((f, i) => (
                    <RevealItem key={f.question}>
                      <AccordionItem
                        value={`${category.id}-${i}`}
                        question={f.question}
                        answer={f.answer}
                        defaultOpen={i === 0 && category.id === faqCategories[0].id}
                      />
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center md:px-16">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.5) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.35) 0, transparent 40%)",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Masih Ada Pertanyaan Lain?
              </h2>
              <p className="mt-4 text-blue-100">
                Tim kami siap membantu menjawab kebutuhan proyek Anda — konsultasi awal sepenuhnya gratis.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/kontak" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/${companyInfo.contact.whatsapp}`}
                  size="lg"
                  className="border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}