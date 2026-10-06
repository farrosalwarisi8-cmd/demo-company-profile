"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabsProps {
  defaultValue: string;
  tabs: { value: string; label: string }[];
  children: (value: string) => React.ReactNode;
}

export function Tabs({ defaultValue, tabs, children }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div>
      <div
        role="tablist"
        className="inline-flex w-full max-w-full gap-1 overflow-x-auto rounded-xl bg-slate-100 p-1 no-scrollbar sm:w-auto"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={value === tab.value}
            onClick={() => setValue(tab.value)}
            className={cn(
              "flex-1 whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition-all sm:flex-none",
              value === tab.value
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">{children(value)}</div>
    </div>
  );
}