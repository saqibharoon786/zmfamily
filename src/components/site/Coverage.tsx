"use client";

import { MapPin } from "lucide-react";

import { homeCoverageCopy } from "@/lib/homepage-content";
import { Reveal, SectionHeading } from "./Reveal";

export function Coverage() {
  return (
    <section className="border-y border-border bg-ink/30 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="mx-auto grid size-14 place-items-center rounded-full border border-gold/40 text-gold">
            <MapPin className="size-6" strokeWidth={1.4} />
          </span>
        </Reveal>
        <SectionHeading fullTitle="Serving Clients Across Qatar" />
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed font-medium text-foreground/85 sm:text-lg">
            {homeCoverageCopy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
