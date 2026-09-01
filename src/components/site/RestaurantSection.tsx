"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ChefHat,
  Clock,
  Flame,
  MessageSquare,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import { WhatsAppQrCode } from "@/components/ui/WhatsAppQrCode";
import { siteContact } from "@/lib/site-config";
import { Reveal } from "./Reveal";

const restaurantFeatures = [
  {
    icon: UtensilsCrossed,
    title: "Executive & Office Meal Boxes",
    description:
      "Freshly prepared, balanced daily lunch boxes and executive dining sets delivered directly to corporate offices and staff across Doha.",
    tag: "Daily Delivery",
  },
  {
    icon: ShoppingBag,
    title: "Cloud Kitchen & Gourmet Delivery",
    description:
      "A wide variety of authentic Middle Eastern, Asian, and International cuisines cooked to order with fast, temperature-controlled delivery.",
    tag: "Hot & Fresh",
  },
  {
    icon: Flame,
    title: "Party & Family Feast Platters",
    description:
      "Generous, artfully presented food platters and mixed grills ideal for family gatherings, weekend celebrations, and private house parties.",
    tag: "Party Specials",
  },
  {
    icon: ChefHat,
    title: "Custom Menu Planning",
    description:
      "Tailored dining menus created by our professional culinary team for VIP dinners, special dietary needs, and formal banquet hosting.",
    tag: "Tailored Cuisines",
  },
];

export function RestaurantSection() {
  return (
    <section
      id="restaurant"
      className="relative overflow-hidden border-t border-border bg-ink/70 py-24 lg:py-28"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-1/4 size-[36rem] rounded-full bg-gold/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 size-80 rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 backdrop-blur-md">
              <ChefHat className="size-4 text-gold" />
              <span className="eyebrow text-gold">Z M FAMILY KITCHEN & RESTAURANT SERVICES</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
              Authentic Restaurant & Dining Services in Qatar
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Beyond large-scale event catering, Z M FAMILY operates specialized kitchen and dining
              services — offering daily executive office meals, cloud kitchen delivery, family feast
              platters, and custom restaurant-quality dining experience across Doha.
            </p>
          </div>
        </Reveal>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {restaurantFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Reveal key={feat.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-lux transition-all duration-300 hover:border-gold/40 hover:bg-card/90"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <span className="rounded-full border border-gold/25 bg-gold/5 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-gold-soft">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-medium text-foreground transition-colors group-hover:text-gold">
                      {feat.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground font-medium">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-4">
                    <a
                      href={`https://wa.me/${siteContact.phone.whatsapp}?text=${encodeURIComponent(`Hello Z M FAMILY Kitchen, I would like to order/inquire about ${feat.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-soft"
                    >
                      Order / Inquire
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Showcase Banner with Image & WhatsApp Scanner */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-lux">
          <div className="grid lg:grid-cols-12 lg:items-center">
            <div className="p-8 sm:p-12 lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                <Sparkles className="size-4" />
                Premium Kitchen & Culinary Standards
              </div>

              <h3 className="mt-3 font-display text-2xl font-light text-foreground sm:text-3xl">
                Ready for Fresh Food Delivery or Custom Dining?
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-medium">
                Our kitchen division uses only high-grade fresh ingredients prepared under strict
                hygiene standards. Whether you need single meal deliveries, daily staff catering, or
                party feast platters, our culinary team is at your service across Doha and Qatar.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/services/catering"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-glow transition-transform hover:scale-105"
                >
                  Explore Catering & Menus
                  <ArrowRight className="size-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${siteContact.phone.whatsapp}?text=Hello%20Z%20M%20FAMILY%20Kitchen,%20I%20want%20to%20order%20restaurant%20meals.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold/20"
                >
                  <MessageSquare className="size-3.5" />
                  Order on WhatsApp
                </a>
              </div>
            </div>

            <div className="p-6 lg:col-span-5 lg:p-8">
              <WhatsAppQrCode variant="sidebar" className="bg-ink/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
