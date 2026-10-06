"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, UploadCloud } from "lucide-react";
import { zodResolver, applicationFormSchema, type ApplicationFormValues } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label, FieldError } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

export function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [fileName, setFileName] = React.useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
  });

  const onSubmit = async (values: ApplicationFormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast({
      variant: "success",
      title: "Lamaran Terkirim (Demo)",
      description: `Terima kasih, ${values.nama}. Lamaran untuk "${jobTitle}" telah kami catat.`,
    });
    reset();
    setFileName("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <Label htmlFor="nama">Nama Lengkap</Label>
        <Input id="nama" placeholder="Nama Anda" className={cn(errors.nama?.message && "border-red-400")} {...register("nama")} />
        <FieldError message={errors.nama?.message} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="nama@email.com" className={cn(errors.email?.message && "border-red-400")} {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Label htmlFor="telepon">Telepon</Label>
          <Input id="telepon" type="tel" placeholder="081234567890" className={cn(errors.telepon?.message && "border-red-400")} {...register("telepon")} />
          <FieldError message={errors.telepon?.message} />
        </div>
      </div>
      <div>
        <Label htmlFor="cv">Upload CV / Portofolio</Label>
        <label
          htmlFor="cv-file"
          className="flex h-12 w-full cursor-pointer items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3.5 text-sm text-slate-500 transition-colors hover:border-blue-400 hover:bg-blue-50"
        >
          <UploadCloud className="h-4 w-4 text-blue-600" />
          <span className="truncate">{fileName || "Klik untuk memilih file .pdf, .doc, .docx"}</span>
        </label>
        <input
          id="cv-file"
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
        <FieldError message="Di mode demo, file tidak benar-benar diunggah." />
      </div>
      <div>
        <Label htmlFor="pesan">Pesan Singkat (opsional)</Label>
        <Textarea id="pesan" placeholder="Kenapa Anda tertarik bergabung?" {...register("pesan")} />
        <FieldError message={errors.pesan?.message} />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Kirim Lamaran
          </>
        )}
      </Button>
    </form>
  );
}