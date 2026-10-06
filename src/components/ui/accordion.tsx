import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  value: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const id = React.useId();
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
        >
          {question}
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300",
              open && "rotate-180 text-blue-700"
            )}
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}