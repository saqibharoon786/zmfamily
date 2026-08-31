"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

import { siteContact } from "@/lib/site-config";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gold/5" />
      <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            One Company. Six Services.{" "}
            <span className="text-gold-gradient">One Point of Contact.</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed font-medium text-foreground/85 sm:text-lg">
            Whether you need a single service or a combination — catering for an event, ongoing
            office cleaning, laundry pickup, a rental car, property support, or facility management
            — Z M FAMILY gives you one team to coordinate with instead of several. One family, one
            standard: flawless.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-foreground/80">
            <a
              href={siteContact.phone.href}
              className="inline-flex items-center gap-2 hover:text-gold"
            >
              <Phone className="size-4 text-gold" />
              {siteContact.phone.display}
            </a>
            <span className="hidden text-border sm:inline">·</span>
            <a href={siteContact.email.href} className="hover:text-gold">
              {siteContact.email.display}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold tracking-[0.22em] text-primary-foreground uppercase shadow-glow transition-transform hover:scale-[1.03]"
            >
              Request a Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href={`https://wa.me/${siteContact.phone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-xs font-semibold tracking-[0.22em] text-foreground uppercase transition-colors hover:bg-gold/10"
            >
              <MessageCircle className="size-4 text-gold" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
