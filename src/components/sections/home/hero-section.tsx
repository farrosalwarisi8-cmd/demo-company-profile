"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { companyInfo } from "@/data/company";
import { ButtonLink } from "@/components/ui/button-link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function HeroSection() {
  const reduce = useReducedMotion();

  const content = (
    <div className="container-page flex min-h-screen flex-col justify-center py-32 text-left">
      <motion.div variants={item} initial="hidden" animate="visible">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Berpengalaman {new Date().getFullYear() - companyInfo.foundedYear}+ Tahun
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        initial="hidden"
        animate="visible"
        className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        Membangun Infrastruktur Berkualitas untuk{" "}
        <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
          Indonesia yang Lebih Baik
        </span>
      </motion.h1>

      <motion.p
        variants={item}
        initial="hidden"
        animate="visible"
        className="mt-6 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg"
      >
        {companyInfo.description}
      </motion.p>

      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="mt-9 flex flex-col gap-3 sm:flex-row"
      >
        <ButtonLink href="/kontak" size="lg">
          Minta Penawaran
        </ButtonLink>
        <ButtonLink href="/tentang-kami" size="lg" className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white hover:border-white/40">
          Pelajari Selengkapnya
        </ButtonLink>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="mt-16 flex items-center gap-6 text-sm text-blue-100"
      >
        <div>
          <p className="font-heading text-xl font-bold text-white">15+</p>
          <p className="text-xs text-blue-200">Tahun Pengalaman</p>
        </div>
        <div className="h-8 w-px bg-white/20" />
        <div>
          <p className="font-heading text-xl font-bold text-white">200+</p>
          <p className="text-xs text-blue-200">Proyek Selesai</p>
        </div>
        <div className="h-8 w-px bg-white/20" />
        <div>
          <p className="font-heading text-xl font-bold text-white">50+</p>
          <p className="text-xs text-blue-200">Klien Institusi</p>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={companyInfo.heroImage} alt="" aria-hidden className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
      </div>

      {reduce ? (
        content
      ) : (
        <motion.div variants={container} initial="hidden" animate="visible">
          {content}
        </motion.div>
      )}

      <motion.a
        href="#stats"
        aria-label="Gulir ke bawah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/60 transition-colors hover:text-white md:block"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </motion.a>
    </section>
  );
}