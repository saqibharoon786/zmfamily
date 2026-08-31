"use client";

import { motion } from "motion/react";
import { Clock, HandCoins, Layers, MessageSquare, Network, UserCheck } from "lucide-react";

import { homeWhyItems } from "@/lib/homepage-content";
import { Reveal, SectionHeading } from "./Reveal";

const icons = [UserCheck, Layers, HandCoins, Clock, MessageSquare, Network];

export function Why() {
  return (
    <section id="why" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Z M FAMILY"
          fullTitle="Why Choose Z M FAMILY"
          copy="Practical reasons businesses and households in Qatar choose one integrated services company over multiple separate vendors."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeWhyItems.map((it, i) => {
            const Icon = icons[i] ?? UserCheck;
            return (
              <Reveal key={it.t} delay={i * 0.08} from="up">
                <motion.div
                  whileHover={{ y: -6, borderColor: "oklch(0.81 0.13 84 / 0.55)" }}
                  transition={{ duration: 0.4 }}
                  className="group h-full rounded-lg border border-border bg-card/60 p-7 backdrop-blur-sm"
                >
                  <span className="grid size-12 place-items-center rounded-full border border-gold/40 text-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-5" strokeWidth={1.4} />
                  </span>
                  <h4 className="mt-6 text-xl font-medium tracking-tight">{it.t}</h4>
                  <p className="mt-3 text-sm leading-relaxed font-medium text-foreground/80">
                    {it.d}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
