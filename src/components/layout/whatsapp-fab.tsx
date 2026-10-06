"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { companyInfo, whatsappMessage } from "@/data/company";
import { cn } from "@/lib/utils";

export function WhatsAppFab() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-all duration-500 hover:scale-105 no-print",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}