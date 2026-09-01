"use client";

import { motion } from "motion/react";
import { BadgeCheck, ShieldCheck } from "lucide-react";

import { homeCertifications, homeCertificationsCopy } from "@/lib/homepage-content";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="ISO and HACCP certifications"
      className="relative overflow-hidden border-y border-gold/15 bg-ink/50 py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.81_0.13_84/0.06),transparent_70%)]" />
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-gradient"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Quality & Compliance"
          title="Internationally"
          accent="Certified"
          copy={homeCertificationsCopy}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeCertifications.map((cert, i) => (
            <Reveal key={cert.code} delay={i * 0.08} from="up">
              <motion.article
                whileHover={{ y: -5, borderColor: "oklch(0.81 0.13 84 / 0.5)" }}
                transition={{ duration: 0.35 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/70 p-7 backdrop-blur-sm"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-gold/5 blur-2xl transition-opacity duration-500 group-hover:bg-gold/10" />

                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                    <ShieldCheck className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    <BadgeCheck className="size-3.5" strokeWidth={2} />
                    Certified
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl tracking-tight text-gold-gradient">
                  {cert.code}
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-foreground/90">
                  {cert.title}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed font-medium text-foreground/75">
                  {cert.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed font-medium text-muted-foreground">
            These certifications reflect our commitment to safe operations, consistent service
            quality, and responsible practices across every Z M FAMILY division in Qatar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
