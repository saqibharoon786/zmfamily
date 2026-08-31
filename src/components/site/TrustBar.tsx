"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Award, Layers, MapPin } from "lucide-react";

import { Reveal } from "./Reveal";

const highlights = [
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    sub: "Serving clients across Qatar",
    icon: Award,
  },
  {
    value: 6,
    suffix: "",
    label: "Specialist Services",
    sub: "One integrated company",
    icon: Layers,
  },
  {
    value: 1,
    suffix: "",
    label: "Point of Contact",
    sub: "Doha · Qatar",
    icon: MapPin,
  },
] as const;

function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-4xl text-gold-gradient tabular-nums sm:text-5xl">
      {value}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section
      aria-label="Z M FAMILY company highlights"
      className="relative overflow-hidden border-y border-gold/20 bg-ink/90 py-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-gold/[0.04]" />
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-gradient"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3 sm:gap-6">
        {highlights.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.1} from="up">
            <div className="flex items-center gap-5 sm:flex-col sm:items-center sm:text-center md:flex-row md:items-center md:text-left lg:flex-col lg:items-center lg:text-center">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/35 bg-gold/10 text-gold">
                <item.icon className="size-5" strokeWidth={1.5} />
              </span>
              <div>
                <AnimatedCounter to={item.value} suffix={item.suffix} />
                <p className="mt-1.5 text-[0.7rem] font-semibold tracking-[0.2em] text-foreground uppercase">
                  {item.label}
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
