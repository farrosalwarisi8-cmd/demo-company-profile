"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { stats } from "@/data/company";
import { Reveal } from "@/components/shared/reveal";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="relative z-10 -mt-10 bg-transparent">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-card lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center gap-1 bg-white px-6 py-10 text-center">
                <p className="font-heading text-4xl font-extrabold tracking-tight text-blue-700 lg:text-5xl">
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm font-medium text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}