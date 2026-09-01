import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChefHat,
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Presentation,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";

import heroCateringImg from "@/assets/hero-catering.jpg";
import svcCateringImg from "@/assets/svc-catering.jpg";
import { CateringFaqAccordion } from "@/components/catering/CateringFaqAccordion";
import { CorporateCateringQuoteForm } from "@/components/catering/CorporateCateringQuoteForm";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { siteContact } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Corporate Catering Services in Qatar | Z M FAMILY",
  description:
    "Z M FAMILY provides corporate catering in Doha and across Qatar for office meetings, staff lunches, events and conferences. Request a quote today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/services/catering/corporate-catering/`,
  },
  openGraph: {
    title: "Corporate Catering in Qatar | Z M FAMILY",
    description:
      "Professional corporate catering for offices, meetings, staff lunches and company events across Doha and Qatar.",
    type: "website",
    url: `${siteUrl}/services/catering/corporate-catering/`,
    images: [
      {
        url: `${siteUrl}/assets/hero-catering.jpg`,
        width: 1200,
        height: 630,
        alt: "Corporate catering setup for a business event in Qatar by Z M FAMILY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Catering in Qatar | Z M FAMILY",
    description:
      "Professional corporate catering for offices, meetings, staff lunches and company events across Doha and Qatar.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Catering",
  name: "Corporate Catering Services",
  description:
    "Corporate catering services in Qatar for office meetings, business lunches, staff meals, company events and conferences.",
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
  url: `${siteUrl}/services/catering/corporate-catering/`,
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
      name: "Corporate Catering",
      item: `${siteUrl}/services/catering/corporate-catering/`,
    },
  ],
};

const faqList = [
  {
    q: "What corporate catering services does Z M FAMILY provide in Qatar?",
    a: "We provide corporate catering for office meetings, business lunches, staff meals, company events and conferences/seminars/workshops across Qatar, with menus and quantities planned around your guest count and schedule.",
  },
  {
    q: "Do you provide corporate catering in Doha?",
    a: "Yes. We're based in Doha and provide corporate catering to businesses in Doha and, subject to venue and availability, across Qatar.",
  },
  {
    q: "Can you cater office meetings and business lunches?",
    a: "Yes. We plan food and refreshments for internal and client meetings and business lunches around your meeting time and guest count, so catering fits your schedule.",
  },
  {
    q: "Do you provide staff lunch catering for companies?",
    a: "Yes. Staff meal catering is scaled to your employee numbers for the specific booking. Share your headcount and requirements when you request a quote and we'll confirm what's possible.",
  },
  {
    q: "Can you provide catering for corporate events and company functions?",
    a: "Yes. We cater company celebrations, staff events and other business functions, typically with buffet service or live catering stations depending on guest count and venue.",
  },
  {
    q: "Do you cater conferences, seminars and workshops?",
    a: "Yes. We plan catering around a conference or workshop agenda — including breaks and lunch service — based on guest numbers and schedule.",
  },
  {
    q: "Can corporate catering be arranged on a recurring schedule?",
    a: "Corporate catering can be discussed as a one-time booking or a more regular arrangement. Get in touch with your requirements and our team will confirm what can be arranged.",
  },
  {
    q: "Can menus be planned according to guest count and event requirements?",
    a: "Yes. Menu quantities and service format are planned around your guest count, event type, schedule and venue rather than a single fixed package.",
  },
  {
    q: "Do you provide on-site setup and catering service?",
    a: "Yes. On-site setup, food service and clear-up at your venue are part of the corporate catering service.",
  },
  {
    q: "How can a company request a corporate catering quote?",
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

export default function CorporateCateringPage() {
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
                <li className="text-gold">Corporate Catering</li>
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
                  <Briefcase className="size-4 text-gold" />
                  <span className="eyebrow text-gold">
                    Z M FAMILY — Corporate Catering in Qatar
                  </span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-light tracking-wide text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                  Corporate Catering Services in Qatar
                </h1>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Z M FAMILY provides corporate catering for offices, meetings, staff lunches,
                  company functions and business events across Doha and Qatar. Menus and service are
                  planned around your guest count, schedule and venue, so catering fits your
                  business day rather than working against it.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
                  >
                    Request a Corporate Catering Quote
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href={`https://wa.me/${siteContact.phone.whatsapp}?text=Hello%20Z%20M%20FAMILY,%20I%20would%20like%20to%20inquire%20about%20corporate%20catering%20services.`}
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
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Focus</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      B2B & Office Events
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Formats
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Meetings, Buffets, Meals
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
                    alt="Corporate catering setup for a business event in Qatar"
                    priority
                    width={1024}
                    height={768}
                    className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
                  />
                  <div className="absolute inset-0 veil" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-foreground">
                    <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold backdrop-blur-md">
                      B2B Specialist Catering
                    </span>
                    <p className="mt-2 font-display text-xl font-light text-white">
                      Planned around work schedules & corporate agendas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Corporate Catering for Every Business Occasion */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Business Use Cases</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Corporate Catering for Every Business Occasion
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Corporate catering covers a wide range of situations, from a five-person client
                meeting to a full company event, and each one has different requirements for timing,
                quantity and service style. Z M FAMILY plans corporate catering around the specific
                occasion rather than a single fixed menu.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* H3: Office Meetings & Business Lunches */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Users className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Office Meetings & Business Lunches
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Internal meetings, client meetings and executive lunches all run on a schedule, so
                  catering needs to be ready at the right time without disrupting the meeting
                  itself. We plan food and refreshments for business lunches and meetings around
                  your start time, guest count and meeting format, whether that&apos;s a working
                  lunch at the boardroom table or refreshments served alongside a longer meeting.
                </p>
              </div>

              {/* H3: Staff Meals & Office Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Utensils className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Staff Meals & Office Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Companies that need to feed staff — whether as a one-off office lunch or on a more
                  regular basis — can arrange catering scaled to employee numbers. We plan
                  quantities around your headcount for each booking; we don&apos;t publish fixed
                  minimum order sizes or set contract terms here, so get in touch with your specific
                  numbers and we&apos;ll confirm what&apos;s possible.
                </p>
              </div>

              {/* H3: Corporate Events & Company Functions */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <ChefHat className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Corporate Events & Company Functions
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Company celebrations, staff events, product or milestone events and other business
                  functions call for a different pace of catering than a working lunch — usually
                  buffet-style service or live catering stations, depending on guest count and
                  venue. We plan the catering for the event around your format and timing, in the
                  same way we would for any larger gathering.
                </p>
              </div>

              {/* H3: Conferences, Seminars & Workshops */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Presentation className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Conferences, Seminars & Workshops
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Conferences, seminars, training sessions and workshops often involve catering
                  across a full day — breaks, lunch, and sometimes refreshments between sessions. We
                  work with your schedule to plan catering that keeps pace with the agenda, based on
                  your guest numbers and venue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Corporate Catering Planned Around Your Business */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">Practical Factors</p>
                <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                  Corporate Catering Planned Around Your Business
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Every corporate catering booking is planned around a few practical factors, not a
                  generic package:
                </p>

                <ul className="mt-8 space-y-3.5">
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">
                        Guest/employee count
                      </strong>{" "}
                      — quantities are scaled to how many people you&apos;re catering for.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Event type</strong> — a
                      meeting, staff lunch, company event or conference each need a different
                      approach.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Schedule</strong> — when
                      food needs to be ready, and how long service should run for.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Venue</strong> — your
                      office, a meeting room, a hired venue or an event space.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Service format</strong> —
                      buffet, live catering stations, or refreshment/lunch service depending on the
                      occasion.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">
                        One-time or recurring
                      </strong>{" "}
                      — a single booking or an ongoing arrangement.
                    </div>
                  </li>
                </ul>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground font-medium">
                  Share these details when you request a quote and we&apos;ll put together a plan
                  that matches what your business actually needs.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-lux p-4">
                  <Image
                    src={svcCateringImg}
                    alt="Corporate meeting catering by Z M FAMILY in Doha"
                    width={800}
                    height={600}
                    className="h-96 w-full rounded-xl object-cover"
                  />
                  <div className="mt-4 rounded-xl border border-gold/20 bg-ink/70 p-5">
                    <p className="font-display text-lg font-light text-foreground">
                      Service Scope Included
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Menu planning, buffet setup, live counters, on-site service, and clear-up upon
                      completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: What Our Corporate Catering Service Includes */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Comprehensive Scope</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                What Our Corporate Catering Service Includes
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <FileText className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                  Menu & Quantity Planning
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Based on your guest count and event type.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <ChefHat className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                  Buffet Setup
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  For larger corporate events and functions.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <Sparkles className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                  Live Catering Stations
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Where the event and venue suit that format.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <Users className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                  On-Site Food Service
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">At your venue on the day.</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <CheckCircle2 className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                  Event Clear-Up
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">Once service is complete.</p>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground font-medium">
              We plan each of the above around what you tell us about your event — we don&apos;t
              quote fixed staffing ratios, delivery windows or equipment lists in advance, as these
              depend on the specific booking. Confirm exact details for your event when you request
              a quote.
            </p>
          </div>
        </section>

        {/* Section: How Corporate Catering Works */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">5-Step Workflow</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                How Corporate Catering Works
              </h2>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">01</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  01. Tell Us About Your Requirements
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Share your event type, date, guest/employee count and venue with our team by
                  phone, WhatsApp or the quote form below.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">02</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  02. Plan Your Menu & Service
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  We discuss the right service format — buffet, live stations, or meeting/lunch
                  service — along with timing, based on your business schedule.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">03</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  03. Receive Your Quote
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Based on your requirements, we put together a corporate catering quote covering
                  the scope discussed.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">04</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  04. Confirm the Schedule
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Once you confirm, we lock in the date, timing and any setup requirements at your
                  venue.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <span className="font-display text-3xl text-gold/70">05</span>
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  05. Catering & On-Site Service
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  On the day, our team handles setup, food service and clear-up, so your meeting or
                  event runs on schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Businesses Choose Z M FAMILY */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">B2B Advantages</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Why Businesses Choose Z M FAMILY
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
                  Your business deals directly with our catering team from enquiry to event day.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Briefcase className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Corporate-Focused Planning
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Menus and service are planned around business schedules, not adapted from a
                  wedding or party package.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">Clear Quotes</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You receive a quote based on your actual requirements before confirming.
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
                  Meeting/lunch service, buffet or live catering stations, chosen to fit the
                  occasion.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Calendar className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  One-Time or Recurring Bookings
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Corporate catering can be arranged for a single event or on a more regular basis,
                  discussed directly with our team.
                </p>
              </div>

              {/* Link #2: facility management services */}
              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Building2 className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Part of an Integrated Qatar Services Company
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Alongside catering, Z M FAMILY also provides{" "}
                  <Link href="/services/facility-management/" className="link-gold">
                    facility management services
                  </Link>
                  , useful for offices and commercial premises that need ongoing building support in
                  addition to catering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Who We Serve */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Client Profile</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Who We Serve
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Corporate Offices
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  From small teams to larger businesses arranging meetings, lunches or staff events.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Meeting & Conference Organizers
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Catering planned around a fixed schedule and agenda.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Training & Workshop Organizers
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Catering across single or multi-day sessions.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Businesses Requiring Staff Meals
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Office catering scaled to employee numbers, one-off or ongoing.
                </p>
              </div>

              {/* Link #3: professional cleaning services */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux">
                <h3 className="font-display text-xl font-light text-foreground">
                  Commercial Premises & Venues
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Businesses managing their own office or event space, where{" "}
                  <Link href="/services/cleaning/" className="link-gold">
                    professional cleaning services
                  </Link>{" "}
                  may also be useful alongside catering to keep the venue guest-ready.
                </p>
              </div>
            </div>

            {/* Link #1: catering services in Qatar */}
            <div className="mt-12 rounded-2xl border border-gold/25 bg-card/60 p-6 text-center shadow-lux">
              <p className="text-sm font-medium text-foreground">
                For weddings, private parties or other social events, see our main{" "}
                <Link href="/services/catering/" className="link-gold">
                  catering services in Qatar
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Corporate Catering Across Doha & Qatar */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-4xl rounded-3xl border border-gold/30 bg-card p-8 shadow-lux sm:p-12">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <p className="eyebrow">Service Locations</p>
                  <h2 className="mt-2 font-display text-3xl font-light text-foreground sm:text-4xl">
                    Corporate Catering Across Doha & Qatar
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Z M FAMILY is based in Doha and provides corporate catering to businesses across
                    Qatar, subject to venue and availability. Whether you&apos;re catering an office
                    meeting in Doha, a company event at a hired venue, or a conference elsewhere in
                    Qatar, we plan service around your specific location, date and schedule — let us
                    know your venue when you request a quote and we&apos;ll confirm availability.
                  </p>
                </div>
              </div>
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
                Common questions about booking corporate catering for your business in Doha and
                Qatar.
              </p>
            </div>

            <div className="mt-12">
              <CateringFaqAccordion faqs={faqList} />
            </div>
          </div>
        </section>

        {/* Section: Request a Corporate Catering Quote */}
        <section id="quote-form" className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow">Get Started</p>
                <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                  Request a Corporate Catering Quote
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Tell us about your business event and we&apos;ll get back to you with a catering
                  plan and quote.
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
                <CorporateCateringQuoteForm />
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
