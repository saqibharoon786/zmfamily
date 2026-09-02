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
  Coffee,
  FileText,
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
  title: "Office Catering Services in Qatar | Z M FAMILY",
  description:
    "Z M FAMILY provides office catering across Doha and Qatar — lunches, meetings, breakfast and staff events, planned around your team. Get a quote.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/services/catering/office-catering/`,
  },
  openGraph: {
    title: "Office Catering in Qatar | Z M FAMILY",
    description:
      "Office catering for lunches, meetings, breakfast and staff events, planned around your team and workplace schedule.",
    type: "website",
    url: `${siteUrl}/services/catering/office-catering/`,
    images: [
      {
        url: `${siteUrl}/assets/hero-catering.jpg`,
        width: 1200,
        height: 630,
        alt: "Office catering setup by Z M FAMILY in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Catering in Qatar | Z M FAMILY",
    description:
      "Office catering for lunches, meetings, breakfast and staff events, planned around your team and workplace schedule.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Office Catering",
  name: "Office Catering Services",
  description:
    "Office catering services in Qatar for lunches, meetings, breakfast and staff events, planned around team size and schedule.",
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
  url: `${siteUrl}/services/catering/office-catering/`,
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
      name: "Office Catering",
      item: `${siteUrl}/services/catering/office-catering/`,
    },
  ],
};

const faqList = [
  {
    q: "What does office catering with Z M FAMILY include?",
    a: "Office catering includes menu and quantity planning based on your headcount, a catering format suited to your event (buffet, meeting platter or breakfast spread), and coordination around your schedule. Exact scope is confirmed when you request a quote.",
  },
  {
    q: "Do you provide office catering in Doha?",
    a: "Yes. We're based in Doha and provide office catering there, as well as to businesses elsewhere in Qatar subject to location and availability.",
  },
  {
    q: "Can you cater for corporate meetings?",
    a: "Yes. We plan catering for business and client meetings around your meeting time and guest count, so it's ready without disrupting the agenda.",
  },
  {
    q: "Do you provide office lunch catering?",
    a: "Yes. Office lunch catering is scaled to your headcount and planned around your schedule, whether for a small team or a larger office lunch.",
  },
  {
    q: "Can you cater for staff events and office parties?",
    a: "Yes. Staff events and office celebrations are typically catered buffet-style for larger groups, planned around your guest count and venue.",
  },
  {
    q: "Do you offer breakfast catering for offices?",
    a: "Yes. Breakfast and morning meeting catering can be arranged around your start time and guest count.",
  },
  {
    q: "What catering formats are available for offices?",
    a: "Depending on your event and requirements, we can arrange buffet catering, meeting platters/lunch spreads, or breakfast spreads. Tell us about your event and we'll confirm what fits.",
  },
  {
    q: "Can you accommodate dietary requirements?",
    a: "Share your dietary requirements when you request a quote so they can be factored into menu planning for your event.",
  },
  {
    q: "How do I request an office catering quote?",
    a: "You can request a quote through the form on this page, by calling or WhatsApping +974 5121 5226, or by emailing zmfamilykitchen@gmail.com with your event type, date, guest count and office location.",
  },
  {
    q: "Can Z M FAMILY provide catering for recurring office needs?",
    a: "Recurring office catering can be discussed directly with our team. Share what you're looking for — frequency, typical headcount and format — and we'll confirm what can be arranged.",
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

export default function OfficeCateringPage() {
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
                <li className="text-gold">Office Catering</li>
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
                  <span className="eyebrow text-gold">Z M FAMILY — Office Catering in Qatar</span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-light tracking-wide text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                  Office Catering Services in Qatar
                </h1>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  If you&apos;re arranging lunch for a meeting, feeding a team during a training
                  day, or organizing catering for a staff event, the details matter — guest numbers,
                  timing, menu and how the food fits into the working day. Z M FAMILY provides office
                  catering across Doha and Qatar, planned around your team size and schedule.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
                  >
                    Request an Office Catering Quote
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href={`https://wa.me/${siteContact.phone.whatsapp}?text=Hello%20Z%20M%20FAMILY,%20I%20would%20like%20to%20inquire%20about%20office%20catering%20services.`}
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
                      Workplace & Team Meals
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Formats
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Lunches, Meetings, Breakfast
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
                    alt="Office catering setup by Z M FAMILY in Qatar"
                    priority
                    width={1024}
                    height={768}
                    className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
                  />
                  <div className="absolute inset-0 veil" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-foreground">
                    <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold backdrop-blur-md">
                      Workplace Catering Specialist
                    </span>
                    <p className="mt-2 font-display text-xl font-light text-white">
                      Timed to match your business schedule & team headcount.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Office Catering for Qatar Businesses */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Workplace Solutions</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Office Catering for Qatar Businesses
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Office catering covers a wide range of everyday workplace situations — a working
                lunch, refreshments for a meeting, breakfast before a training session, or catering for
                a staff event — and each one has a different timing and format requirement. As part of
                our wider{" "}
                <Link href="/services/catering/" className="link-gold">
                  catering services in Qatar
                </Link>
                , we plan office catering around your headcount, schedule and the type of occasion,
                rather than applying one fixed menu to every booking.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Office Catering Services We Provide */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Services Breakdown</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Office Catering Services We Provide
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* H3: Office Lunch Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Utensils className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Office Lunch Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Working lunches need to be ready at a set time and scaled to the number of people in
                  the room, whether that&apos;s a small team meeting or a larger office lunch. We plan
                  quantities and timing around your headcount and schedule.
                </p>
              </div>

              {/* H3: Corporate Meeting Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Users className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Corporate Meeting Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Client meetings, internal meetings and executive meetings often need light catering or
                  refreshments alongside the meeting itself. We plan this around your meeting time so
                  it&apos;s ready without disrupting the agenda.
                </p>
              </div>

              {/* H3: Breakfast & Morning Meeting Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Coffee className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Breakfast & Morning Meeting Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  For early meetings, training sessions or events that start in the morning, breakfast
                  catering can be arranged around your start time and guest count.
                </p>
              </div>

              {/* H3: Staff Events & Office Celebrations */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <PartyPopper className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Staff Events & Office Celebrations
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Staff events, office celebrations and other internal gatherings are typically less
                  time-pressured than a working meeting, and can be planned around a buffet-style
                  format for larger groups.
                </p>
              </div>

              {/* H3: Recurring Office Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30 md:col-span-2 lg:col-span-2">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Calendar className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Recurring Office Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Some businesses need catering more than once — a regular team lunch, or catering for a
                  recurring meeting. This can be discussed directly with our team; we don&apos;t publish a
                  fixed program or schedule here, so share what you&apos;re looking for and we&apos;ll
                  confirm what can be arranged.
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  For larger, one-off business events such as conferences, seminars or company
                  functions, our dedicated{" "}
                  <Link href="/services/catering/corporate-catering/" className="link-gold">
                    corporate catering services
                  </Link>{" "}
                  page covers that ground in more depth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Catering Options for Different Office Needs */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Flexible Formats</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Catering Options for Different Office Needs
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Depending on your event and requirements, office catering can be arranged as:
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <h3 className="font-display text-xl font-medium text-foreground">Buffet Catering</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Suited to larger staff events or office celebrations where guests serve themselves.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <h3 className="font-display text-xl font-medium text-foreground">
                  Meeting Platters / Lunch Spreads
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Suited to smaller meetings where food needs to be ready with minimal disruption.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <h3 className="font-display text-xl font-medium text-foreground">
                  Breakfast Spreads
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Suited to morning meetings or early-start events.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-gold/20 bg-ink/70 p-6 text-center shadow-lux">
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                We don&apos;t currently offer individually portioned meal delivery or a separate staffed
                live-station format for office bookings — if your event needs something specific, tell us
                the details when you request a quote and we&apos;ll confirm what&apos;s possible.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Office Catering Planned Around Your Team */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">Practical Factors</p>
                <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                  Office Catering Planned Around Your Team
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Every office catering booking is planned around a few practical details:
                </p>

                <ul className="mt-8 space-y-3.5">
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">
                        Number of employees/guests
                      </strong>{" "}
                      — determines quantities.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Event type</strong> — a
                      working lunch, meeting, breakfast or staff celebration each need a different
                      approach.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Office location</strong> —
                      where in Doha or Qatar the catering needs to arrive.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Schedule</strong> — when
                      food needs to be ready.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">
                        Menu preferences & dietary requirements
                      </strong>{" "}
                      — share these with us when you get in touch so they can be factored into
                      planning.
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-foreground font-semibold">Service format</strong> —
                      buffet, platters or breakfast spread, depending on the occasion.
                    </div>
                  </li>
                </ul>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground font-medium">
                  Share these details when you request a quote and we&apos;ll put together a plan that
                  fits your office, not a generic package.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-lux p-4">
                  <Image
                    src={svcCateringImg}
                    alt="Office catering presentation setup by Z M FAMILY"
                    width={800}
                    height={600}
                    className="h-96 w-full rounded-xl object-cover"
                  />
                  <div className="mt-4 rounded-xl border border-gold/20 bg-ink/70 p-5">
                    <p className="font-display text-lg font-light text-foreground">
                      Reliable Workplace Delivery & Setup
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Our Doha catering team ensures timely arrival and professional setup for your office
                      meetings, lunches, and staff events across Qatar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Corporate Catering for Meetings, Events & Staff Gatherings */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-lux sm:p-12">
              <p className="eyebrow">Workplace Occasions</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Corporate Catering for Meetings, Events & Staff Gatherings
              </h2>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                <li className="rounded-xl border border-border/60 bg-ink/50 p-5">
                  <strong className="text-foreground font-semibold">Business meetings:</strong> Light
                  catering or refreshments planned around your meeting schedule.
                </li>
                <li className="rounded-xl border border-border/60 bg-ink/50 p-5">
                  <strong className="text-foreground font-semibold">Client meetings:</strong> Catering
                  that fits discreetly around the meeting rather than dominating it.
                </li>
                <li className="rounded-xl border border-border/60 bg-ink/50 p-5">
                  <strong className="text-foreground font-semibold">Staff lunches:</strong> Regular or
                  one-off, scaled to your team size.
                </li>
                <li className="rounded-xl border border-border/60 bg-ink/50 p-5">
                  <strong className="text-foreground font-semibold">Corporate celebrations:</strong>{" "}
                  Office celebrations and milestones, typically buffet-style for larger groups.
                </li>
                <li className="rounded-xl border border-border/60 bg-ink/50 p-5 sm:col-span-2">
                  <strong className="text-foreground font-semibold">
                    Conferences and training sessions:
                  </strong>{" "}
                  For full-day or multi-session events, our{" "}
                  <Link href="/services/catering/corporate-catering/" className="link-gold">
                    corporate catering services
                  </Link>{" "}
                  page covers catering planned around a longer agenda.
                </li>
                <li className="rounded-xl border border-border/60 bg-ink/50 p-5 sm:col-span-2">
                  <strong className="text-foreground font-semibold">Office parties:</strong> Staff
                  gatherings and end-of-period celebrations, planned around guest count and venue.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: How Our Office Catering Service Works */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">5-Step Process</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                How Our Office Catering Service Works
              </h2>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">01</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    01. Tell Us About Your Office Event
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Share your event type, date, guest count and office location with our team by phone,
                    WhatsApp or the quote form below.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">02</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    02. Discuss Menu & Requirements
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    We talk through catering format, timing and any dietary requirements, so the plan
                    fits your event.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">03</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    03. Confirm the Catering Plan
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Once you&apos;re happy with the plan, we confirm the details and provide your
                    quote.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">04</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    04. Prepare & Coordinate
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Our team prepares ahead of your event date, based on what&apos;s been confirmed.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">05</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    05. Deliver / Serve at Your Office
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    On the day, catering arrives at your office in line with your schedule, whether
                    that&apos;s a lunch delivery or a staffed setup for a larger event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Businesses Choose Z M FAMILY for Office Catering */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">B2B Advantages</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Why Businesses Choose Z M FAMILY for Office Catering
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
                  You work directly with our catering team from enquiry through to your event.
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
                  Menus and timing are planned around your office schedule rather than a fixed package.
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
                  Buffet, meeting platters or breakfast spreads, chosen to fit the occasion.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <MessageSquare className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Clear Communication
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You know what&apos;s confirmed and what&apos;s still being discussed at each stage.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Clock className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Office-Friendly Scheduling
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Catering is planned to fit around your working day rather than disrupt it.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Integrated Business Services When Relevant
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Offices that also need ongoing venue cleanliness can make use of Z M FAMILY&apos;s{" "}
                  <Link href="/services/cleaning/" className="link-gold">
                    professional cleaning services
                  </Link>
                  , coordinated through the same company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Office Catering Across Doha & Qatar */}
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
                    Office Catering Across Doha & Qatar
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Based in Doha, Z M FAMILY provides office and corporate catering across Qatar,
                    subject to event location and availability. Whether your office is in Doha or
                    elsewhere in Qatar, let us know your location and event date when you request a
                    quote and we&apos;ll confirm what&apos;s possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="eyebrow">Common Workplace Questions</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Everything you need to know about Z M FAMILY office catering in Qatar.
              </p>
            </div>

            <div className="mt-12">
              <CateringFaqAccordion faqs={faqList} />
            </div>
          </div>
        </section>

        {/* Section: Request an Office Catering Quote */}
        <section id="quote-form" className="py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="eyebrow">Get a Quote</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Request an Office Catering Quote
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tell us about your office event and we&apos;ll get back to you with a catering plan
                and quote.
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
