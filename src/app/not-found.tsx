import { Construction } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-white">
        <Construction className="h-10 w-10" />
      </span>
      <p className="mt-8 font-heading text-7xl font-extrabold text-white">404</p>
      <h1 className="mt-3 text-2xl font-bold text-white md:text-3xl">Halaman Tidak Ditemukan</h1>
      <p className="mt-3 max-w-md text-slate-400">
        Sepertinya halaman yang Anda cari sedang &ldquo;dalam konstruksi&rdquo; atau telah dipindahkan.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Kembali ke Beranda</ButtonLink>
      </div>
    </section>
  );
}