"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Building2, Home, Hotel, PartyPopper, Store, KeyRound } from "lucide-react";

import { Reveal, SectionHeading } from "./Reveal";

const industries = [
  {
    title: "Corporate & Offices",
    icon: Building2,
    body: (
      <>
        Recurring{" "}
        <Link href="/services/cleaning" className="link-gold">
          office cleaning
        </Link>
        , building upkeep through{" "}
        <Link href="/services/facility-management" className="link-gold">
          facility management
        </Link>
        , and catering for meetings or staff events, coordinated through one contact.
      </>
    ),
  },
  {
    title: "Hospitality",
    icon: Hotel,
    body: (
      <>
        Hotels and restaurants often need linen and uniform{" "}
        <Link href="/services/laundry" className="link-gold">
          laundry
        </Link>
        , housekeeping support, and additional{" "}
        <Link href="/services/catering" className="link-gold">
          catering
        </Link>{" "}
        capacity for larger events.
      </>
    ),
  },
  {
    title: "Residential",
    icon: Home,
    body: (
      <>
        Households use Z M FAMILY for{" "}
        <Link href="/services/cleaning" className="link-gold">
          cleaning
        </Link>
        ,{" "}
        <Link href="/services/laundry" className="link-gold">
          laundry pickup and delivery
        </Link>
        , and occasional property support, without managing multiple providers.
      </>
    ),
  },
  {
    title: "Events & Weddings",
    icon: PartyPopper,
    body: (
      <>
        Weddings and private events typically need{" "}
        <Link href="/services/catering" className="link-gold">
          catering
        </Link>{" "}
        and transport arranged together — our catering and{" "}
        <Link href="/services/rent-a-car" className="link-gold">
          rent a car
        </Link>{" "}
        divisions are frequently booked as a pair.
      </>
    ),
  },
  {
    title: "Commercial Properties",
    icon: Store,
    body: (
      <>
        Retail, office, and mixed-use buildings need consistent{" "}
        <Link href="/services/cleaning" className="link-gold">
          cleaning
        </Link>{" "}
        and maintenance through{" "}
        <Link href="/services/facility-management" className="link-gold">
          facility management
        </Link>
        , coordinated as one workflow.
      </>
    ),
  },
  {
    title: "Property Owners & Managers",
    icon: KeyRound,
    body: (
      <>
        Owners can combine{" "}
        <Link href="/services/real-estate" className="link-gold">
          real estate support
        </Link>{" "}
        with ongoing{" "}
        <Link href="/services/facility-management" className="link-gold">
          facility management
        </Link>{" "}
        for ownership and upkeep handled by the same company.
      </>
    ),
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28">
      <div className="pointer-events-none absolute -right-32 top-1/4 size-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Who We Serve"
          fullTitle="Industries We Serve"
          copy="Each industry connects to the relevant Z M FAMILY divisions — with one point of contact across Qatar."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 0.08} from="up">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group h-full rounded-lg border border-border bg-card/60 p-7 backdrop-blur-sm"
              >
                <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-transform duration-500 group-hover:scale-110">
                  <industry.icon className="size-5" strokeWidth={1.4} />
                </span>
                <h3 className="mt-5 text-xl font-medium tracking-tight">{industry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-medium text-foreground/80">
                  {industry.body}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
