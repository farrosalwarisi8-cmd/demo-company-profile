"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2 } from "lucide-react";
import { zodResolver, contactFormSchema, type ContactFormValues } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label, FieldError } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

const SUBJEK_OPTIONS = ["RFQ", "Konsultasi", "Kerjasama", "Informasi", "Lainnya"] as const;

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { subjek: "RFQ" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast({
      variant: "success",
      title: "Pesan Berhasil Dikirim!",
      description: `Terima kasih, ${values.nama}. Tim kami akan menghubungi Anda dalam 1x24 jam. (Demo — tanpa pengiriman nyata)`,
    });
    reset({ subjek: "RFQ" });
  };

  const inputClass = (hasError?: string) =>
    cn(hasError && "border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/25");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="nama">Nama Lengkap</Label>
          <Input id="nama" placeholder="Nama Anda" className={inputClass(errors.nama?.message)} {...register("nama")} />
          <FieldError message={errors.nama?.message} />
        </div>
        <div>
          <Label htmlFor="perusahaan">Perusahaan *</Label>
          <Input id="perusahaan" placeholder="Nama perusahaan/instansi" className={inputClass(errors.perusahaan?.message)} {...register("perusahaan")} />
          <FieldError message={errors.perusahaan?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="nama@perusahaan.com" className={inputClass(errors.email?.message)} {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Label htmlFor="telepon">Telepon / WhatsApp</Label>
          <Input id="telepon" type="tel" placeholder="081234567890" className={inputClass(errors.telepon?.message)} {...register("telepon")} />
          <FieldError message={errors.telepon?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="subjek">Subjek</Label>
        <select
          id="subjek"
          className={cn(
            "flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 shadow-sm transition-colors focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30",
            inputClass(errors.subjek?.message)
          )}
          {...register("subjek")}
        >
          {SUBJEK_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <FieldError message={errors.subjek?.message} />
      </div>

      <div>
        <Label htmlFor="pesan">Pesan</Label>
        <Textarea id="pesan" placeholder="Ceritakan kebutuhan proyek Anda..." className={inputClass(errors.pesan?.message)} {...register("pesan")} />
        <FieldError message={errors.pesan?.message} />
      </div>

      <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-xs leading-relaxed text-blue-800">
        <strong>Mode demo:</strong> form ini hanya mensimulasikan pengiriman. Untuk produksi, pesan akan dikirim ke email kami.
      </div>

      <Button type="submit" disabled={loading} size="lg" className="w-full sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Kirim Pesan
          </>
        )}
      </Button>
    </form>
  );
}