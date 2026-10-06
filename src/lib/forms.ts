import { z } from "zod";

/**
 * Resolver sederhana untuk react-hook-form tanpa dependensi tambahan.
 * Menggunakan Zod untuk validasi dan menerjemahkannya ke format RHF.
 */
export function zodResolver<T extends z.ZodTypeAny>(schema: T) {
  return async (values: unknown) => {
    const result = schema.safeParse(values);
    if (result.success) {
      return { values: result.data, errors: {} };
    }
    const errors: Record<string, { type: string; message: string }> = {};
    for (const issue of result.error.issues) {
      const path = issue.path.join(".");
      if (!errors[path]) {
        errors[path] = { type: issue.code, message: issue.message };
      }
    }
    return { values: {}, errors };
  };
}

export const contactFormSchema = z.object({
  nama: z.string().min(2, "Nama lengkap minimal 2 karakter").max(100, "Maksimal 100 karakter"),
  perusahaan: z.string().min(2, "Nama perusahaan minimal 2 karakter").max(100, "Maksimal 100 karakter"),
  email: z.email("Format email tidak valid"),
  telepon: z
    .string()
    .regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, "Gunakan format Indonesia, contoh: 081234567890"),
  subjek: z.enum(["RFQ", "Konsultasi", "Kerjasama", "Informasi", "Lainnya"], {
    message: "Pilih salah satu subjek",
  }),
  pesan: z.string().min(10, "Pesan minimal 10 karakter").max(1000, "Maksimal 1000 karakter"),
});

export const applicationFormSchema = z.object({
  nama: z.string().min(2, "Nama lengkap minimal 2 karakter"),
  email: z.email("Format email tidak valid"),
  telepon: z
    .string()
    .regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, "Gunakan format Indonesia, contoh: 081234567890"),
  pesan: z.string().max(1000, "Maksimal 1000 karakter").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;