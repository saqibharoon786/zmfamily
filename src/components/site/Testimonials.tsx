"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const quotes = [
  {
    q: "Z M Family catered my daughter's wedding — 600 guests, zero complaints. The presentation was outstanding.",
    n: "Farhan Siddiqui",
    r: "Wedding Client, Doha",
  },
  {
    q: "They manage facilities for our office building. Housekeeping and maintenance are both top class.",
    n: "Ayesha Malik",
    r: "Admin Head, Corporate Plaza",
  },
  {
    q: "We hired four luxury cars for a wedding — professional drivers and spotless vehicles throughout.",
    n: "Bilal Ahmed",
    r: "Event Client, Qatar",
  },
];

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Clients" title="What our" accent="clients say" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.14} from="scale">
              <motion.blockquote
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45 }}
                className="h-full rounded-lg border border-border bg-card p-8 shadow-lux"
              >
                <Quote className="size-7 text-gold/70" strokeWidth={1.2} />
                <p className="mt-5 font-display text-lg leading-relaxed text-foreground/90">
                  &ldquo;{t.q}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-5">
                  <p className="text-sm text-gold-soft">{t.n}</p>
                  <p className="mt-1 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {t.r}
                  </p>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
