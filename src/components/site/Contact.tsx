"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

import { QuoteForm } from "@/components/site/QuoteForm";
import { siteContact } from "@/lib/site-config";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="pointer-events-none absolute -top-24 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-gold/8 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          fullTitle="Request a Quote"
          copy="Reach out by phone, WhatsApp, or the form below — tell us which service or combination you need and we'll respond with a clear quote."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal from="left">
            <QuoteForm variant="default" />
          </Reveal>

          <Reveal from="right" delay={0.15}>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-5 rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm"
              >
                <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold">
                  <Phone className="size-4" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                    {siteContact.phone.label}
                  </p>
                  <a
                    href={siteContact.phone.href}
                    className="mt-1 block font-display text-xl transition-colors hover:text-gold"
                  >
                    {siteContact.phone.display}
                  </a>
                </div>
                <a
                  href={`https://wa.me/${siteContact.phone.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="size-4" />
                </a>
              </motion.div>

              <motion.a
                href={siteContact.email.href}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-5 rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-gold/30"
              >
                <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold">
                  <Mail className="size-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Email
                  </p>
                  <p className="mt-1 break-all font-display text-xl">{siteContact.email.display}</p>
                </div>
              </motion.a>

              <motion.a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteContact.address.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.35, delay: 0.04 }}
                className="flex items-center gap-5 rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-gold/30"
              >
                <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold">
                  <MapPin className="size-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Office
                  </p>
                  <p className="mt-1 font-display text-xl leading-snug">
                    {siteContact.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.a>

              <div className="animate-float-soft rounded-lg border border-gold/30 bg-gold/5 p-7">
                <p className="eyebrow">Available</p>
                <p className="mt-3 font-display text-2xl leading-snug">{siteContact.hours}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
