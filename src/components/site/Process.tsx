"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { homeProcessSteps } from "@/lib/homepage-content";
import { Reveal, SectionHeading } from "./Reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Process"
          fullTitle="How We Work"
          align="left"
          copy="From first enquiry to follow-up — a clear four-step process for one service or several coordinated together."
        />
        <div ref={ref} className="relative mt-16 pl-10">
          <div className="absolute top-0 left-[3px] h-full w-px bg-border" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-0 w-[7px] rounded-full bg-gold-gradient shadow-glow"
          />
          <div className="space-y-14">
            {homeProcessSteps.map((s, i) => (
              <Reveal key={s.t} from="left" delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute top-2 -left-10 grid size-[13px] place-items-center rounded-full border border-gold bg-background" />
                  <span className="eyebrow">Step {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-3xl tracking-tight">{s.t}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed font-medium text-foreground/80">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
