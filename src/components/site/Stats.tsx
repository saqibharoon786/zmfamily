"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const stats = [
  { value: 1200, suffix: "+", label: "Events Served" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "", label: "Service Divisions" },
  { value: 98, suffix: "%", label: "Happy Clients" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setV(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-5xl text-gold-gradient sm:text-6xl">
      {v}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24">
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-gold/5 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.12} from="scale" className="text-center">
            <Counter to={s.value} suffix={s.suffix} />
            <p className="mt-3 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
