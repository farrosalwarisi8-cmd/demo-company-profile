"use client";

import * as React from "react";
import { CheckCircle2, Info, X, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastVariant = "success" | "info" | "warning";

interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  toast: (t: { title: string; description?: string; variant?: ToastVariant }) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}

const variantStyles: Record<ToastVariant, { icon: React.ReactNode; bar: string }> = {
  success: { icon: <CheckCircle2 className="h-5 w-5 text-green-600" />, bar: "bg-green-500" },
  info: { icon: <Info className="h-5 w-5 text-blue-600" />, bar: "bg-blue-500" },
  warning: { icon: <AlertTriangle className="h-5 w-5 text-amber-500" />, bar: "bg-amber-500" },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const remove = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback(
    (t: { title: string; description?: string; variant?: ToastVariant }) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { id, variant: "success", ...t }]);
      setTimeout(() => remove(id), 4200);
    },
    [remove]
  );

  const value = React.useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-5 inset-x-0 z-[100] flex flex-col items-center gap-2 px-4 sm:items-end sm:pr-6"
      >
        {toasts.map((t) => {
          const style = variantStyles[t.variant];
          return (
            <div
              key={t.id}
              className="pointer-events-auto relative flex w-full max-w-sm items-start gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 pl-6 shadow-lift animate-fade-in"
            >
              <span className={cn("absolute left-0 top-0 h-full w-1", style.bar)} />
              {style.icon}
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{t.title}</p>
                {t.description && (
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{t.description}</p>
                )}
              </div>
              <button
                onClick={() => remove(t.id)}
                className="-m-1 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                aria-label="Tutup notifikasi"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}