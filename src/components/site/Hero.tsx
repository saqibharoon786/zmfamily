"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ChefHat,
  Building2,
  Shirt,
  Car,
  Wrench,
  ArrowRight,
  MessageCircle,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import heroCatering from "@/assets/hero-catering.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";
import heroRealEstate from "@/assets/hero-realestate.jpg";
import heroLaundry from "@/assets/hero-laundry.jpg";
import heroCar from "@/assets/hero-car.jpg";
import heroFacilities from "@/assets/hero-facilities.jpg";
import { QuoteForm } from "@/components/site/QuoteForm";
import { siteContact } from "@/lib/site-config";

const rotating = [
  {
    label: "Catering Services",
    icon: ChefHat,
    img: heroCatering,
    alt: "Z M FAMILY catering setup for a corporate event in Doha, Qatar",
  },
  {
    label: "Restaurant & Kitchen",
    icon: UtensilsCrossed,
    img: heroRestaurant,
    alt: "Z M FAMILY restaurant and kitchen food delivery in Doha, Qatar",
  },
  {
    label: "Cleaning Services",
    icon: Sparkles,
    img: heroCleaning,
    alt: "Professional office cleaning service by Z M FAMILY in Qatar",
  },
  {
    label: "Laundry Services",
    icon: Shirt,
    img: heroLaundry,
    alt: "Commercial linen and laundry pickup service by Z M FAMILY in Doha",
  },
  {
    label: "Rent a Car",
    icon: Car,
    img: heroCar,
    alt: "Luxury wedding and corporate car rental from Z M FAMILY in Qatar",
  },
  {
    label: "Real Estate",
    icon: Building2,
    img: heroRealEstate,
    alt: "Residential and commercial property support by Z M FAMILY in Doha",
  },
  {
    label: "Facility Management",
    icon: Wrench,
    img: heroFacilities,
    alt: "Building facility management and housekeeping by Z M FAMILY in Qatar",
  },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % rotating.length), 4200);
    return () => clearInterval(id);
  }, []);

  const current = rotating[active]!;
  const Current = current.icon;

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={active}
            src={current.img.src}
            alt={current.alt}
            width={1920}
            height={1088}
            initial={{ opacity: 0, scale: 1.14, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1.02, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
            transition={{
              opacity: { duration: 1.6 },
              scale: { duration: 5.6, ease: "linear" },
              filter: { duration: 1.4 },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 veil" />
        <div className="absolute inset-0 bg-ink/30" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto grid min-h-screen max-w-[88rem] items-center gap-12 px-6 pt-28 pb-24 lg:grid-cols-[1fr_minmax(480px,560px)] xl:gap-16"
      >
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.9em" }}
            animate={{ opacity: 1, letterSpacing: "0.32em" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="eyebrow"
          >
            Z M FAMILY — INTEGRATED SERVICES ACROSS QATAR
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-[2rem] leading-[1.08] font-medium tracking-tight text-white sm:text-[2.65rem] lg:text-[3.1rem] xl:text-[3.45rem]"
          >
            Integrated Services in Qatar.{" "}
            <span className="text-gold-gradient">One Company. Seven Specialist Services.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-5 flex items-center gap-4"
          >
            <div className="h-px w-16 bg-gold-gradient" />
            <div className="relative h-9 overflow-hidden">
              <motion.div
                key={active}
                initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 text-base font-medium text-white/95 sm:text-lg"
              >
                <Current className="size-5 text-gold" strokeWidth={1.4} />
                <span className="font-display">{current.label}</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.75 }}
            className="mt-6 max-w-xl text-base leading-relaxed font-medium text-white/90 sm:text-[1.05rem]"
          >
            Z M FAMILY is an integrated services company in Qatar — providing professional catering,
            restaurant & kitchen, cleaning, laundry, rent a car, real estate, and facility
            management under one roof. Based in Doha, we give clients across Qatar a single point of
            contact instead of seven separate vendors. Planning a wedding that needs{" "}
            <Link
              href="/services/catering"
              className="text-gold-soft underline-offset-4 hover:text-gold hover:underline"
            >
              catering
            </Link>{" "}
            with{" "}
            <Link
              href="/services/rent-a-car"
              className="text-gold-soft underline-offset-4 hover:text-gold hover:underline"
            >
              car hire
            </Link>
            , running an office that needs{" "}
            <Link
              href="/services/restaurant"
              className="text-gold-soft underline-offset-4 hover:text-gold hover:underline"
            >
              daily meal delivery
            </Link>
            ,{" "}
            <Link
              href="/services/cleaning"
              className="text-gold-soft underline-offset-4 hover:text-gold hover:underline"
            >
              cleaning
            </Link>{" "}
            and{" "}
            <Link
              href="/services/facility-management"
              className="text-gold-soft underline-offset-4 hover:text-gold hover:underline"
            >
              building upkeep
            </Link>{" "}
            on one schedule, or simply want{" "}
            <Link
              href="/services/laundry"
              className="text-gold-soft underline-offset-4 hover:text-gold hover:underline"
            >
              laundry pickup and delivery
            </Link>{" "}
            handled reliably, Z M FAMILY is built to coordinate it as one team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold tracking-[0.22em] text-primary-foreground uppercase shadow-glow transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Quote <ArrowRight className="size-4" />
              </span>
              <span className="absolute inset-y-0 -left-1/3 z-0 w-1/3 animate-shimmer bg-background/30 blur-md" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-xs font-semibold tracking-[0.22em] text-foreground/90 uppercase transition-colors hover:bg-gold/10"
            >
              Explore Our Services
            </a>
            <a
              href={`https://wa.me/${siteContact.phone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-xs font-semibold tracking-[0.22em] text-white/90 uppercase transition-colors hover:bg-white/10"
            >
              <MessageCircle className="size-4 text-gold" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
            {rotating.map((s, i) => (
              <motion.button
                type="button"
                onClick={() => setActive(i)}
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={
                  "flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.65rem] tracking-[0.14em] uppercase backdrop-blur-sm transition-colors " +
                  (i === active
                    ? "border-gold/70 bg-gold/15 text-gold-soft"
                    : "border-border bg-background/25 text-muted-foreground")
                }
              >
                <s.icon className="size-3" strokeWidth={1.5} />
                {s.label}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:max-w-none lg:justify-self-stretch"
        >
          <QuoteForm variant="hero" />
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 h-12 w-px -translate-x-1/2 bg-gold-gradient"
      />
    </section>
  );
}
