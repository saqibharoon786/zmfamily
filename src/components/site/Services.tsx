"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import catering from "@/assets/svc-catering.jpg";
import restaurant from "@/assets/svc-restaurant.jpg";
import cleaning from "@/assets/svc-cleaning.jpg";
import realestate from "@/assets/svc-realestate.jpg";
import laundry from "@/assets/svc-laundry.jpg";
import car from "@/assets/svc-car.jpg";
import facilities from "@/assets/svc-facilities.jpg";

import { homeServices } from "@/lib/homepage-content";
import { Reveal, SectionHeading } from "./Reveal";

const images: Record<string, typeof catering> = {
  catering,
  restaurant,
  cleaning,
  laundry,
  "rent-a-car": car,
  "real-estate": realestate,
  "facility-management": facilities,
};

function ServiceCopy({ service }: { service: (typeof homeServices)[number] }) {
  if (service.slug === "restaurant") {
    return (
      <>
        Daily executive office lunch boxes, gourmet cloud kitchen food delivery, family feast
        platters, and custom banquet dining prepared fresh by our culinary chefs in Doha.
      </>
    );
  }

  if (service.slug === "catering") {
    return (
      <>
        Our catering division handles weddings, private functions, and corporate events across
        Qatar, with buffet setups, live counters, and plated service. Menus are planned around guest
        count and event style — often booked alongside{" "}
        <Link href="/services/rent-a-car" className="link-gold">
          rent a car in Qatar
        </Link>{" "}
        for weddings and functions.
      </>
    );
  }

  if (service.slug === "cleaning") {
    return (
      <>
        Our cleaning division covers homes, offices, and commercial spaces — separate from laundry.
        Services include scheduled cleaning, deep cleans, and move-in or move-out work. Buildings
        needing both cleaning and upkeep often pair this with{" "}
        <Link href="/services/facility-management" className="link-gold">
          facility management services
        </Link>
        .
      </>
    );
  }

  if (service.slug === "laundry") {
    return (
      <>
        Our laundry division handles everyday laundry, dry cleaning, and commercial linen or uniform
        laundry with pickup and delivery. Kept fully separate from our{" "}
        <Link href="/services/cleaning" className="link-gold">
          cleaning services in Qatar
        </Link>
        .
      </>
    );
  }

  if (service.slug === "rent-a-car") {
    return (
      <>
        Daily and monthly vehicle rental with chauffeur-driven options for personal transport,
        corporate travel, and wedding car hire — frequently booked alongside{" "}
        <Link href="/services/catering" className="link-gold">
          catering services
        </Link>{" "}
        for events across Qatar.
      </>
    );
  }

  if (service.slug === "real-estate") {
    return (
      <>
        Residential and commercial property support for owners, tenants, and managers — practical
        coordination focused on Doha and wider Qatar. Can be paired with{" "}
        <Link href="/services/facility-management" className="link-gold">
          facility management
        </Link>{" "}
        for ongoing building upkeep.
      </>
    );
  }

  if (service.slug === "facility-management") {
    return (
      <>
        Building housekeeping, maintenance coordination, and recurring upkeep for commercial and
        residential properties. Works closely with our{" "}
        <Link href="/services/cleaning" className="link-gold">
          cleaning division
        </Link>{" "}
        when buildings need both.
      </>
    );
  }

  return <>{service.copy}</>;
}

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="pointer-events-none absolute top-1/3 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Services"
          fullTitle="Seven Services. One Standard."
          copy="Seven specialist divisions under one integrated services company — each with its own team, one point of contact for you across Qatar."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {homeServices.map((s, i) => {
            const img = images[s.slug] ?? catering;
            return (
              <Reveal key={s.slug} delay={(i % 2) * 0.1} from={i % 2 === 0 ? "left" : "right"}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full overflow-hidden rounded-lg border border-border bg-card shadow-lux"
                >
                  <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                    <div className="relative h-52 overflow-hidden md:h-full md:min-h-[18rem]">
                      <Image
                        src={img}
                        alt={s.imageAlt}
                        loading="lazy"
                        width={1024}
                        height={1280}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-ink/45 transition-opacity duration-700 group-hover:opacity-20" />
                      <span className="absolute top-4 left-5 font-display text-4xl text-gold/70">
                        {s.n}
                      </span>
                    </div>
                    <div className="flex flex-col p-7">
                      <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{s.h3}</h3>
                      <div className="mt-3 h-px w-12 bg-gold-gradient transition-all duration-700 group-hover:w-24" />
                      <p className="mt-4 flex-1 text-sm leading-relaxed font-medium text-foreground/80">
                        <ServiceCopy service={s} />
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="rounded-full border border-border px-3 py-1 text-[0.65rem] tracking-[0.14em] text-gold-soft uppercase"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={s.href}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-gold uppercase transition-colors hover:text-gold-soft"
                      >
                        {s.cta}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
