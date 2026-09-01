import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChefHat,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";

import heroCateringImg from "@/assets/hero-catering.jpg";
import svcCateringImg from "@/assets/svc-catering.jpg";
import { CateringFaqAccordion } from "@/components/catering/CateringFaqAccordion";
import { CateringQuoteForm } from "@/components/catering/CateringQuoteForm";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { siteContact } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Wedding & Corporate Catering Services in Qatar | Z M FAMILY",
  description:
    "Z M FAMILY provides catering services in Qatar for weddings, corporate events, offices and private functions, planned around your guest count. Get a quote.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/services/catering/`,
  },
  openGraph: {
    title: "Catering Services in Qatar | Z M FAMILY",
    description:
      "Professional catering for weddings, corporate events, offices and private functions across Qatar, from one Doha-based team.",
    type: "website",
    url: `${siteUrl}/services/catering/`,
    images: [
      {
        url: `${siteUrl}/assets/hero-catering.jpg`,
        width: 1200,
        height: 630,
        alt: "Catering buffet setup by Z M FAMILY in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering Services in Qatar | Z M FAMILY",
    description:
      "Professional catering for weddings, corporate events, offices and private functions across Qatar, from one Doha-based team.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Catering Services",
  name: "Catering Services",
  description:
    "Catering services for weddings, corporate events, offices and private functions across Qatar, including buffet catering and live catering stations.",
  provider: {
    "@type": "Organization",
    name: "Z M FAMILY",
    telephone: siteContact.phone.display,
    email: siteContact.email.display,
    url: `${siteUrl}/`,
  },
  areaServed: {
    "@type": "Country",
    name: "Qatar",
  },
  url: `${siteUrl}/services/catering/`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteUrl}/services/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Catering",
      item: `${siteUrl}/services/catering/`,
    },
  ],
};

const faqList = [
  {
    q: "What catering services does Z M FAMILY provide in Qatar?",
    a: "Z M FAMILY provides catering for weddings, corporate events, office functions and private gatherings across Qatar, including buffet service and live catering stations, with menus planned around your guest count and event type.",
  },
  {
    q: "Do you provide wedding catering in Qatar?",
    a: "Yes. We provide wedding catering planned around your guest count, venue and preferred service style, with on-site setup and service on the day.",
  },
  {
    q: "Do you offer corporate catering in Doha?",
    a: "Yes. We cater office lunches, staff events, meetings and other corporate functions for businesses in Doha and across Qatar, with quantities scaled to your headcount.",
  },
  {
    q: "Can you cater for office meetings and business events?",
    a: "Yes. Office and meeting catering is planned around your schedule and guest numbers so it fits into a normal working day.",
  },
  {
    q: "Do you provide catering for private parties and social events?",
    a: "Yes. We cater private and social events such as birthdays and family gatherings, with the menu and service format planned around the specific occasion.",
  },
  {
    q: "Can catering menus be planned according to guest count and event type?",
    a: "Yes. Menu quantities and service style are planned around your guest count, event type, venue and timing rather than applied from a single fixed package.",
  },
  {
    q: "Do you offer buffet and live catering stations?",
    a: "Yes. We provide both buffet service and live catering stations. Which format suits your event depends on guest count and venue, and we'll discuss this when you request a quote.",
  },
  {
    q: "Does your catering team handle setup and clear-up on the day?",
    a: "Yes. On-site setup, food service and clear-up at your venue are handled by our team as part of the catering service.",
  },
  {
    q: "Can you arrange catering for events across Qatar?",
    a: "Z M FAMILY is based in Doha and serves clients across Qatar, subject to event location and availability. Let us know your venue and date when you request a quote and we'll confirm availability.",
  },
  {
    q: "How can I request a catering quote from Z M FAMILY?",
    a: "You can request a quote through the form on this page, by calling or WhatsApping +974 5121 5226, or by emailing zmfamilykitchen@gmail.com with your event type, date, guest count and venue.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqList.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Z M FAMILY",
  telephone: siteContact.phone.display,
  email: siteContact.email.display,
  url: `${siteUrl}/`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Doha",
    addressCountry: "QA",
    streetAddress: siteContact.address.display,
  },
  areaServed: {
    "@type": "Country",
    name: "Qatar",
  },
};

const childServices = [
  {
    title: "Wedding Catering",
    href: "/services/catering/wedding-catering",
    description:
      "Elegant wedding menus with full service staff, buffet setups or live stations planned around your hall and guest count.",
  },
  {
    title: "Corporate Catering",
    href: "/services/catering/corporate-catering",
    description:
      "Executive dining, boardroom lunches, and corporate hospitality for events and business functions in Doha.",
  },
  {
    title: "Office Catering",
    href: "/services/catering/office-catering",
    description:
      "Daily or recurring office lunches, breakfast spreads, and staff catering scheduled to fit your working hours.",
  },
  {
    title: "Event Catering",
    href: "/services/catering/event-catering",
    description:
      "Galas, launches, and large-scale social or commercial event food service with complete setup and management.",
  },
];

export default function CateringPillarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema]),
        }}
      />

      <main className="min-h-screen bg-background pt-[4.25rem]">
        {/* Breadcrumb Navigation Bar */}
        <div className="border-b border-border bg-ink/70">
          <div className="mx-auto max-w-6xl px-6 py-3.5">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-gold">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-gold/40">
                  /
                </li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-gold">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-gold/40">
                  /
                </li>
                <li className="text-gold">Catering</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-ink/60 py-20 lg:py-24">
          <div className="pointer-events-none absolute -top-40 right-0 size-[32rem] rounded-full bg-gold/10 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-10 size-80 rounded-full bg-gold/5 blur-[100px]" />

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 backdrop-blur-md">
                  <ChefHat className="size-4 text-gold" />
                  <span className="eyebrow text-gold">Z M FAMILY — Catering Services in Qatar</span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-light tracking-wide text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                  Professional Catering Services in Qatar
                </h1>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Z M FAMILY provides catering for weddings, corporate events, office functions and
                  private gatherings across Qatar. We plan each menu and service style around your
                  guest count, event format and venue, so the food and the service match the
                  occasion — from an intimate family gathering to a full corporate function.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
                  >
                    Request a Catering Quote
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href={`https://wa.me/${siteContact.phone.whatsapp}?text=Hello%20Z%20M%20FAMILY,%20I%20would%20like%20to%20inquire%20about%20catering%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold/15"
                  >
                    <MessageSquare className="size-4" />
                    Chat on WhatsApp — +974 5121 5226
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">Doha & Nationwide</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Service Types
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Buffet & Live Counters
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Planning
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Tailored per Guest Count
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-lux">
                  <Image
                    src={heroCateringImg}
                    alt="Catering buffet setup by Z M FAMILY in Qatar"
                    priority
                    width={1024}
                    height={768}
                    className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
                  />
                  <div className="absolute inset-0 veil" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-foreground">
                    <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold backdrop-blur-md">
                      On-Site Qatar Service
                    </span>
                    <p className="mt-2 font-display text-xl font-light text-white">
                      Full-service setup & dedicated food service team on-site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Catering Services for Every Occasion */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Tailored Service Styles</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Catering Services for Every Occasion
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every event has a different rhythm, guest mix and service expectation. Z M
                FAMILY&apos;s catering service is built around that — rather than a single fixed
                menu for every booking, we plan the food and service style to fit what you&apos;re
                actually hosting.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* H3: Wedding Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Sparkles className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Wedding Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Weddings in Qatar range from close family celebrations to large
                  multi-hundred-guest events, and the catering has to keep pace with the day rather
                  than slow it down. We plan wedding catering around your guest count, hall or venue
                  layout, and preferred service style — buffet service or live catering stations —
                  and coordinate setup so food is ready and presented in time with the rest of the
                  event. If you&apos;re arranging vendors for the same day, our team can also
                  connect wedding catering with{" "}
                  <Link href="/services/rent-a-car/" className="link-gold">
                    event transport and car hire
                  </Link>{" "}
                  through Z M FAMILY&apos;s rent-a-car service, so guest and family transport is
                  handled by the same company you&apos;re already working with.
                </p>
                <div className="mt-6 border-t border-border/60 pt-5">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-soft"
                  >
                    Plan Your Wedding Catering
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* H3: Corporate & Office Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Users className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Corporate & Office Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Office lunches, staff events, meetings and internal functions all need catering
                  that&apos;s reliable and easy to plan around a work schedule. Z M FAMILY provides
                  corporate and office catering for businesses in Doha and across Qatar — from a
                  recurring office lunch to a one-off staff event or company gathering. Menus and
                  quantities are scaled to your headcount and the format of the event, and service
                  is planned to fit around your working hours rather than disrupt them.
                </p>
                <div className="mt-6 border-t border-border/60 pt-5">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-soft"
                  >
                    Request Corporate Catering
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* H3: Private & Social Event Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Utensils className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Private & Social Event Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  For birthdays, family gatherings, private parties and other social occasions,
                  catering needs to feel personal rather than mass-produced. We work with you on
                  guest numbers, timing and venue to put together a catering plan for the specific
                  event you&apos;re hosting, with on-site setup and service handled by our team so
                  you&apos;re not managing the food yourself on the day.
                </p>
              </div>

              {/* H3: Buffet & Live Catering Stations */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <ChefHat className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Buffet & Live Catering Stations
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Buffet service suits larger guest counts and gives guests choice without slowing
                  down service — it&apos;s a practical fit for weddings, corporate functions and
                  larger private events. Live catering stations bring an interactive element to the
                  event, with food prepared and served in front of guests rather than plated in
                  advance. Which format suits your event depends on guest count, venue and how
                  formal the occasion is, and we&apos;ll talk through the right fit when you request
                  a quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Catering Planned Around Your Event */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">Customized Planning</p>
                <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                  Catering Planned Around Your Event
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  There&apos;s no single &quot;default&quot; catering package that works for every
                  event, so we plan each booking around a few core factors:
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Guest count</strong> — menu
                      quantities and service format are scaled to the number of people you&apos;re
                      hosting.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Event type</strong> — a
                      wedding, corporate function, office lunch and private party each call for a
                      different pace of service.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Service style</strong> —
                      buffet or live catering stations, depending on the occasion and venue.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Venue</strong> — where the
                      event is taking place affects setup, service space and timing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Timing</strong> — when food
                      needs to be ready and how long service needs to run for.
                    </div>
                  </li>
                </ul>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground font-medium">
                  Tell us these details when you get in touch and we&apos;ll put together a catering
                  plan and quote that actually fits the event, rather than a generic package.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-lux p-4">
                  <Image
                    src={svcCateringImg}
                    alt="Catering presentation setup by Z M FAMILY"
                    width={800}
                    height={600}
                    className="h-96 w-full rounded-xl object-cover"
                  />
                  <div className="mt-4 rounded-xl border border-gold/20 bg-ink/70 p-5">
                    <p className="font-display text-lg font-light text-foreground">
                      Transparent & Practical Catering Logistics
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      From guest headcount planning to clear-up after service, our Doha catering
                      team delivers end-to-end execution across all 8 municipalities of Qatar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: How Our Catering Service Works */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Clear 5-Step Booking</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                How Our Catering Service Works
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A simple, predictable process from your initial enquiry to clean up on event day.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {/* Step 1 */}
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">01</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    01. Tell Us About Your Event
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Share your event type, date, guest count and venue with our team by phone,
                    WhatsApp or the quote form below.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">02</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    02. Plan Your Menu & Service Style
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    We discuss buffet or live-station service, timing and any specific requirements
                    for the event, so the plan matches what you&apos;re hosting.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">03</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    03. Receive Your Quote
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Based on your event details, we put together a catering quote covering the
                    service and scope discussed.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">04</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    04. Event Preparation
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Once confirmed, our team prepares for the event date, including the setup
                    required at your venue.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">05</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    05. Catering & On-Site Service
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    On the day, our team handles setup, food service and clear-up at your venue, so
                    you can focus on the event rather than the catering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Choose Z M FAMILY Catering */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Our Advantage</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Why Choose Z M FAMILY Catering
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Phone className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  One Point of Contact
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You deal directly with our catering team from enquiry through to event day, rather
                  than being passed between departments.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Calendar className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Event-Specific Planning
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Menus and service are planned around your guest count and event type instead of a
                  single fixed package.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">Clear Process</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You know what happens at each stage, from your first enquiry to the quote and the
                  event itself.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Utensils className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  On-Site Service Included
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our team handles setup, service and clear-up at your venue as part of the
                  catering.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <ChefHat className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Flexible Service Formats
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Buffet or live catering stations, chosen to fit your event rather than applied by
                  default.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Part of an Integrated Qatar Services Company
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Z M FAMILY also operates rent-a-car, cleaning and facility management services,
                  which can be coordinated alongside catering for events or commercial clients that
                  need more than one service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Who We Serve */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Clients & Venues</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Who We Serve
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Weddings & Families
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Catering for wedding celebrations and family events, planned around your guests
                  and venue.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Corporate Offices & Businesses
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Office catering, staff events and corporate functions across Qatar.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Private Event Hosts
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Catering for birthdays, private parties and social gatherings.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Commercial & Event Venues
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Venues and businesses that need catering support for their own events or clients,
                  alongside services like{" "}
                  <Link href="/services/cleaning/" className="link-gold">
                    professional cleaning services
                  </Link>{" "}
                  to keep the space guest-ready before and after service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Catering Services Across Qatar */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-4xl rounded-3xl border border-gold/30 bg-card p-8 shadow-lux sm:p-12">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <p className="eyebrow">Nationwide Coverage</p>
                  <h2 className="mt-2 font-display text-3xl font-light text-foreground sm:text-4xl">
                    Catering Services Across Qatar
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Z M FAMILY is based in Doha and provides catering services to clients across
                    Qatar, subject to event location and availability. Whether you&apos;re arranging
                    catering for a home, a private hall, an office or a commercial venue, our team
                    plans service around your specific location and event date. Commercial clients
                    managing their own premises alongside regular catering needs — such as offices,
                    venues or business premises — can also make use of Z M FAMILY&apos;s{" "}
                    <Link href="/services/facility-management/" className="link-gold">
                      facility management services
                    </Link>{" "}
                    for ongoing building support, coordinated through the same company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Related Catering Child Services */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 font-display text-2xl font-light text-foreground">
              Specialized Catering Solutions
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {childServices.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/40 hover:bg-card/90"
                >
                  <div>
                    <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-gold">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {sub.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-gold">
                    Explore {sub.title}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        <section className="border-t border-border bg-ink/30 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Everything you need to know about booking Z M FAMILY catering services in Qatar.
              </p>
            </div>

            <div className="mt-12">
              <CateringFaqAccordion faqs={faqList} />
            </div>
          </div>
        </section>

        {/* Section: Request a Catering Quote (Form & Direct Contacts) */}
        <section id="quote-form" className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow">Get Started</p>
                <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                  Request a Catering Quote
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Tell us about your event and we&apos;ll get back to you with a catering plan and
                  quote.
                </p>

                <div className="mt-8 space-y-6 rounded-2xl border border-border bg-card p-6 shadow-lux">
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Direct Line / WhatsApp
                      </p>
                      <a
                        href={siteContact.phone.href}
                        className="text-base font-semibold text-foreground transition-colors hover:text-gold"
                      >
                        {siteContact.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Email Enquiry
                      </p>
                      <a
                        href={siteContact.email.href}
                        className="text-base font-semibold text-foreground transition-colors hover:text-gold"
                      >
                        {siteContact.email.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Operating Hours
                      </p>
                      <p className="text-sm font-medium text-foreground">{siteContact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <CateringQuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
