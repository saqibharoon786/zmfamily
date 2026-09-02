import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChefHat,
  Clock,
  FileText,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  PartyPopper,
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
import { siteContact } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Event Catering Services in Qatar | Z M FAMILY",
  description:
    "Z M FAMILY provides event catering across Doha and Qatar for weddings, corporate functions and private parties, with buffet and live stations. Get a quote.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/services/catering/event-catering/`,
  },
  openGraph: {
    title: "Event Catering in Qatar | Z M FAMILY",
    description:
      "Buffet and live-station event catering for weddings, corporate functions and private parties across Doha and Qatar.",
    type: "website",
    url: `${siteUrl}/services/catering/event-catering/`,
    images: [
      {
        url: `${siteUrl}/assets/hero-catering.jpg`,
        width: 1200,
        height: 630,
        alt: "Event catering setup by Z M FAMILY in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Catering in Qatar | Z M FAMILY",
    description:
      "Buffet and live-station event catering for weddings, corporate functions and private parties across Doha and Qatar.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Event Catering",
  name: "Event Catering Services",
  description:
    "Event catering services in Qatar for weddings, corporate functions, private parties and other events, with buffet and live catering station formats.",
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
  url: `${siteUrl}/services/catering/event-catering/`,
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
    {
      "@type": "ListItem",
      position: 4,
      name: "Event Catering",
      item: `${siteUrl}/services/catering/event-catering/`,
    },
  ],
};

const faqList = [
  {
    q: "What is included in Z M FAMILY's event catering service?",
    a: "Event catering includes menu and quantity planning based on your guest count, buffet or live-station setup, on-site food service, and clear-up once service is complete. The exact scope is confirmed with you when you request a quote.",
  },
  {
    q: "What types of events does Z M FAMILY cater?",
    a: "We cater weddings and wedding receptions, corporate functions, private parties, family gatherings and other venue-based events across Qatar, with catering planned around each event's guest count and format.",
  },
  {
    q: "Do you provide event catering in Doha?",
    a: "Yes. We're based in Doha and provide event catering there, as well as to clients elsewhere in Qatar subject to venue and availability.",
  },
  {
    q: "Do you cater events across Qatar, or only in Doha?",
    a: "We serve clients across Qatar, subject to venue and availability. Share your event location when requesting a quote and we'll confirm what's possible.",
  },
  {
    q: "Can the menu be customized for my event?",
    a: "Menus are planned around your guest count, event type and preferred service format. Share your requirements when you request a quote and we'll discuss what can be arranged for your event.",
  },
  {
    q: "Do you provide buffet catering for events?",
    a: "Yes. Buffet catering is one of our two core service formats, well suited to larger guest counts and events where guests move around rather than sit for a formal seated meal.",
  },
  {
    q: "Do you provide live catering stations?",
    a: "Yes. Live catering stations are available as a service format, either on their own or alongside buffet service, and work well for events where guest experience is a priority.",
  },
  {
    q: "Can you provide setup and on-site service for my event?",
    a: "Yes. On-site setup, food service and clear-up at your venue are included as part of our event catering service.",
  },
  {
    q: "How far in advance should I request event catering?",
    a: "We don't publish a fixed minimum notice period, since it depends on your event size and date. As a general rule, contact our team as early as possible, especially for larger events or dates that fall during busy periods.",
  },
  {
    q: "How can I request an event catering quote?",
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

export default function EventCateringPage() {
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
                <li>
                  <Link href="/services/catering" className="transition-colors hover:text-gold">
                    Catering
                  </Link>
                </li>
                <li aria-hidden="true" className="text-gold/40">
                  /
                </li>
                <li className="text-gold">Event Catering</li>
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
                  <span className="eyebrow text-gold">Z M FAMILY — Event Catering in Qatar</span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-light tracking-wide text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                  Event Catering Services in Qatar
                </h1>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Z M FAMILY provides event catering across Doha and Qatar for weddings, corporate
                  functions, private parties and other gatherings. Catering is planned around your
                  guest count, venue and preferred service format — buffet or live catering stations
                  — with setup and on-site service handled by our team.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
                  >
                    Request an Event Catering Quote
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href={`https://wa.me/${siteContact.phone.whatsapp}?text=Hello%20Z%20M%20FAMILY,%20I%20would%20like%20to%20inquire%20about%20event%20catering%20services.`}
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
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Scope</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">Weddings & Parties</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Formats
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Buffet & Live Stations
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Coverage
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Doha & Across Qatar
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-lux">
                  <Image
                    src={heroCateringImg}
                    alt="Event catering setup by Z M FAMILY in Qatar"
                    priority
                    width={1024}
                    height={768}
                    className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
                  />
                  <div className="absolute inset-0 veil" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-foreground">
                    <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold backdrop-blur-md">
                      Event Catering Specialist
                    </span>
                    <p className="mt-2 font-display text-xl font-light text-white">
                      On-site setup & catering service planned around your venue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Event Catering for Every Occasion */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Occasion Types</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Event Catering for Every Occasion
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                &quot;Event catering&quot; covers a wide range of occasions, and the right approach
                depends on what you&apos;re hosting, how many guests are attending, and where the
                event is taking place.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* H3: Weddings & Wedding Receptions */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Heart className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Weddings & Wedding Receptions
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Wedding receptions typically involve larger guest counts and a schedule that needs
                  to run smoothly alongside the rest of the day. We plan catering around your guest
                  count and venue, with buffet or live-station service set up and run by our team on
                  the day.
                </p>
              </div>

              {/* H3: Corporate Functions & Conferences */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Users className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Corporate Functions & Conferences
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Company events, conferences and business functions call for catering that fits a
                  working schedule and a professional setting. Our{" "}
                  <Link href="/services/catering/corporate-catering/" className="link-gold">
                    corporate catering services
                  </Link>{" "}
                  cover this in more detail — office meetings, staff lunches and company functions
                  specifically.
                </p>
              </div>

              {/* H3: Private Parties & Family Gatherings */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <PartyPopper className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Private Parties & Family Gatherings
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Birthdays, engagements and other family or social celebrations are planned around
                  the specific occasion — guest numbers, venue and the tone of the event — rather
                  than a single standard package.
                </p>
              </div>

              {/* H3: Outdoor & Venue-Based Events */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Outdoor & Venue-Based Events
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Whether your event is at a private venue, a hired hall or an outdoor space, we
                  plan setup and service around the venue itself — access, layout and timing all
                  factor into how catering is arranged on the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Catering Formats for Your Event */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Service Formats</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Catering Formats for Your Event
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We currently offer two core event catering formats, as part of our wider{" "}
                <Link href="/services/catering/" className="link-gold">
                  catering services in Qatar
                </Link>
                . Which one suits your event depends on guest count, venue and the pace you want for
                service.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* H3: Buffet Catering */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lux">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Utensils className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Buffet Catering
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Buffet service works well for larger guest counts and gives guests choice without
                  holding up the flow of the event. It&apos;s a practical fit for weddings,
                  corporate functions and larger private gatherings where guests are moving and
                  mingling rather than seated for a formal course-by-course meal.
                </p>
              </div>

              {/* H3: Live Catering Stations */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lux">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Sparkles className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Live Catering Stations
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Live catering stations bring food preparation into view of guests rather than
                  plating everything in advance, adding an interactive element to the event. This
                  format suits events where guest experience and atmosphere matter as much as the
                  food itself, and works well alongside buffet service for larger gatherings.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-gold/20 bg-ink/70 p-6 text-center shadow-lux">
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                We don&apos;t currently offer plated multi-course service or drop-off-only catering
                as separate formats — if your event needs something outside buffet or live-station
                service, tell us the details when you request a quote and we&apos;ll let you know
                what&apos;s possible.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Event Catering Planned Around Your Guests and Venue */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">Customized Logistics</p>
                <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                  Event Catering Planned Around Your Guests and Venue
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Every event is different, so we plan catering around a set of practical details
                  rather than a fixed package:
                </p>

                <ul className="mt-8 space-y-3.5">
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Guest count</strong> —
                      determines quantities and how service is paced.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Event type</strong> — a
                      wedding reception, corporate function or private party each need a different
                      approach to timing and format.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Venue</strong> — access,
                      layout and available space affect how setup and service are arranged.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Timing</strong> — when food
                      needs to be ready and how long service should run.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Service format</strong> —
                      buffet, live stations, or a combination of both.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Setup requirements</strong>{" "}
                      — what needs to be in place before guests arrive.
                    </div>
                  </li>
                </ul>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground font-medium">
                  Share these details when you get in touch and we&apos;ll put together a catering
                  plan that fits your actual event, not a generic template.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-lux p-4">
                  <Image
                    src={svcCateringImg}
                    alt="Event catering presentation setup by Z M FAMILY"
                    width={800}
                    height={600}
                    className="h-96 w-full rounded-xl object-cover"
                  />
                  <div className="mt-4 rounded-xl border border-gold/20 bg-ink/70 p-5">
                    <p className="font-display text-lg font-light text-foreground">
                      Full On-Site Catering Management
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Our team coordinates food service logistics, equipment, setup, and clear-up at
                      your event location across Qatar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Our Event Catering Process */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Step-by-Step Workflow</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Our Event Catering Process
              </h2>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">01</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  01. Tell Us About Your Event
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Share your event type, date, guest count and venue with our team by phone,
                  WhatsApp or the quote form below.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">02</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  02. Discuss Menu & Service Format
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  We talk through buffet or live-station service and how it fits your guest count
                  and venue.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">03</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  03. Confirm Event Details
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  We confirm timing, setup requirements and any other specifics for your event.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">04</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  04. Receive Your Quote
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Based on everything discussed, we put together a quote covering the scope of your
                  event.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">05</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  05. Event Preparation
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Once confirmed, our team prepares for the event date, including what&apos;s needed
                  at your venue.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">06</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  06. Catering & On-Site Service
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  On the day, our team handles setup, service and clear-up, so you can focus on the
                  event itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Choose Z M FAMILY for Event Catering */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Key Strengths</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Why Choose Z M FAMILY for Event Catering
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
                  You work directly with our catering team from enquiry through to event day.
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
                  Catering is planned around your guest count, venue and event type rather than a
                  fixed package.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Clear Quotation Process
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You receive a quote based on your actual event details before confirming.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Utensils className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  On-Site Setup and Service
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our team handles setup, service and clear-up at your venue.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Doha-Based Team Serving Qatar
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Based in Doha, with event catering available across Qatar subject to venue and
                  availability.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Coordination With Other Z M FAMILY Services
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  For events that also need transport, catering can be coordinated with{" "}
                  <Link href="/services/rent-a-car/" className="link-gold">
                    event transport and car hire
                  </Link>{" "}
                  through Z M FAMILY&apos;s rent-a-car service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Event Catering Across Doha and Qatar */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-4xl rounded-3xl border border-gold/30 bg-card p-8 shadow-lux sm:p-12">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <p className="eyebrow">Service Reach</p>
                  <h2 className="mt-2 font-display text-3xl font-light text-foreground sm:text-4xl">
                    Event Catering Across Doha and Qatar
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Z M FAMILY is based in Doha and provides event catering to clients across Qatar,
                    subject to venue and availability. Whether your event is in Doha or elsewhere in
                    Qatar, let us know the location and date when you request a quote and we&apos;ll
                    confirm what&apos;s possible for your event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Catering for Corporate and Business Events */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-lux sm:p-12">
              <p className="eyebrow">Corporate Specialization</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Catering for Corporate and Business Events
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                If your event is specifically a business function — an office meeting, staff lunch,
                conference or company event — our dedicated{" "}
                <Link href="/services/catering/corporate-catering/" className="link-gold">
                  corporate catering services
                </Link>{" "}
                page covers this in more depth, including catering planned around business schedules
                and recurring office requirements. This event catering page covers the broader range
                of occasions, from weddings to private parties to business functions.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="eyebrow">Common Inquiries</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Everything you need to know about Z M FAMILY event catering in Qatar.
              </p>
            </div>

            <div className="mt-12">
              <CateringFaqAccordion faqs={faqList} />
            </div>
          </div>
        </section>

        {/* Section: Request an Event Catering Quote */}
        <section id="quote-form" className="py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="eyebrow">Get in Touch</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Request an Event Catering Quote
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tell us about your event and we&apos;ll get back to you with a catering plan and
                quote.
              </p>
            </div>

            <div className="mt-12">
              <CateringQuoteForm />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <a
                href={`tel:${siteContact.phone.display}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Phone className="size-4 text-gold" />
                +974 5121 5226
              </a>
              <a
                href={`mailto:${siteContact.email.display}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail className="size-4 text-gold" />
                zmfamilykitchen@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
