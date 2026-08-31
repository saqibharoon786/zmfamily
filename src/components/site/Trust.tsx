"use client";

import { Reveal, SectionHeading } from "./Reveal";
import { homeTrustCopy } from "@/lib/homepage-content";

export function Trust() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-ink/40 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-48 -translate-y-1/2 bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <SectionHeading fullTitle="Why Clients Work With Z M FAMILY" />
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed font-medium text-foreground/85 sm:text-lg">
            {homeTrustCopy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
