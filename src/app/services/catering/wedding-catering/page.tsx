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
  title: "Wedding Catering Services in Qatar | Z M FAMILY",
  description:
    "Z M FAMILY provides wedding catering across Doha and Qatar, planned around your guest count, venue and service style. Request a wedding catering quote.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/services/catering/wedding-catering/`,
  },
  openGraph: {
    title: "Wedding Catering in Qatar | Z M FAMILY",
    description:
      "Wedding catering planned around your guest count, venue and reception timeline, across Doha and Qatar.",
    type: "website",
    url: `${siteUrl}/services/catering/wedding-catering/`,
    images: [
      {
        url: `${siteUrl}/assets/hero-catering.jpg`,
        width: 1200,
        height: 630,
        alt: "Wedding catering setup by Z M FAMILY in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Catering in Qatar | Z M FAMILY",
    description:
      "Wedding catering planned around your guest count, venue and reception timeline, across Doha and Qatar.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Catering",
  name: "Wedding Catering Services",
  description:
    "Wedding catering services in Qatar, planned around guest count, venue and reception timing, with buffet and live catering station formats.",
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
  url: `${siteUrl}/services/catering/wedding-catering/`,
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
      name: "Wedding Catering",
      item: `${siteUrl}/services/catering/wedding-catering/`,
    },
  ],
};

const faqList = [
  {
    q: "What does wedding catering in Qatar with Z M FAMILY include?",
    a: "Wedding catering includes menu planning based on your guest count, buffet or live-station setup, on-site food service through the reception, and clear-up once service is complete. The exact scope is confirmed with you when you request a quote.",
  },
  {
    q: "Do you provide wedding catering in Doha?",
    a: "Yes. We're based in Doha and provide wedding catering there, as well as to clients elsewhere in Qatar subject to venue and availability.",
  },
  {
    q: "Can you cater for both small and large weddings?",
    a: "Yes. We plan catering around your guest count, whether that's a smaller family celebration or a larger reception, rather than applying a fixed minimum or maximum.",
  },
  {
    q: "Can the wedding menu be customized?",
    a: "Menus are planned around your guest count, reception format and any dietary requirements you share with us. Tell us your requirements when you request a quote and we'll discuss what can be arranged.",
  },
  {
    q: "Do you provide buffet catering for weddings?",
    a: "Yes. Buffet service is one of our two core wedding catering formats and works well for receptions with a full programme and larger guest counts.",
  },
  {
    q: "Do you offer live catering stations for wedding receptions?",
    a: "Yes. Live catering stations are available on their own or alongside buffet service, for receptions where guest experience and interaction with the food are part of the occasion.",
  },
  {
    q: "Can you accommodate dietary requirements for wedding guests?",
    a: "Share your dietary requirements when you request a quote so we can factor them into menu planning for your reception.",
  },
  {
    q: "Can you cater at private homes as well as wedding venues?",
    a: "Yes. We cater at private homes, wedding halls and other event venues across Qatar. Let us know your venue when you get in touch so we can plan setup around it.",
  },
  {
    q: "How does the wedding catering quotation process work?",
    a: "Share your wedding date, guest count, venue and any specific requirements, and we'll put together a catering plan and quote based on those details rather than a generic package.",
  },
  {
    q: "How do I request wedding catering for my Qatar wedding?",
    a: "You can request a quote through the form on this page, by calling or WhatsApping +974 5121 5226, or by emailing zmfamilykitchen@gmail.com with your wedding date, guest count and venue.",
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

export default function WeddingCateringPage() {
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
                <li className="text-gold">Wedding Catering</li>
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
                  <Heart className="size-4 text-gold" />
                  <span className="eyebrow text-gold">Z M FAMILY — Wedding Catering in Qatar</span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-light tracking-wide text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                  Wedding Catering Services in Qatar
                </h1>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Z M FAMILY provides wedding catering across Doha and Qatar, planned around your
                  guest count, venue and reception timeline. From an intimate family celebration to
                  a larger reception, we work out the right service format — buffet or live catering
                  stations — and handle setup and service so the food keeps pace with the rest of
                  your day.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
                  >
                    Request a Wedding Catering Quote
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href={`https://wa.me/${siteContact.phone.whatsapp}?text=Hello%20Z%20M%20FAMILY,%20I%20would%20like%20to%20inquire%20about%20wedding%20catering%20services.`}
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
                      Weddings & Receptions
                    </p>
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
                    alt="Wedding catering setup by Z M FAMILY in Qatar"
                    priority
                    width={1024}
                    height={768}
                    className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
                  />
                  <div className="absolute inset-0 veil" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-foreground">
                    <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold backdrop-blur-md">
                      Wedding Catering Specialist
                    </span>
                    <p className="mt-2 font-display text-xl font-light text-white">
                      Planned around your reception timeline & venue layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Wedding Catering Planned Around Your Day */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Custom Timeline & Planning</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Wedding Catering Planned Around Your Day
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A wedding reception has its own rhythm — arrivals, speeches, photos, dancing — and
                catering needs to move with it rather than against it. We plan wedding catering
                around a few practical factors specific to your day, as part of our wider{" "}
                <Link href="/services/catering/" className="link-gold">
                  catering services in Qatar
                </Link>
                :
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border/60 bg-card/60 p-6 shadow-lux">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Users className="size-5" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">Guest Count</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Shapes both quantities and how service is paced through the reception.
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/60 p-6 shadow-lux">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="size-5" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">Venue Layout</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  A private home, a wedding hall or an event space each have different layouts and
                  access, which affects how we set up.
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/60 p-6 shadow-lux">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Clock className="size-5" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">Event Timing</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  When guests arrive, when the meal is served, and how the rest of the programme
                  runs alongside it.
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/60 p-6 shadow-lux">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <ChefHat className="size-5" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">Service Style</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Buffet or live catering stations, chosen to suit your guest count and venue.
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/60 p-6 shadow-lux md:col-span-2 lg:col-span-2">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">
                  Guest Experience
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  How formal or relaxed the reception is, and how much of the food service guests
                  should see and interact with.
                </p>
              </div>
            </div>

            <p className="mt-8 text-center text-sm font-medium leading-relaxed text-muted-foreground">
              Tell us these details and we&apos;ll put together a wedding catering plan built around
              your actual day, not a fixed package.
            </p>
          </div>
        </section>

        {/* Section: Wedding Catering Services We Provide */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Service Offerings</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Wedding Catering Services We Provide
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* H3: Wedding Reception Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <PartyPopper className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Wedding Reception Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Catering for the reception itself — the part of the day where most guests are
                  seated or mingling and food service needs to run smoothly around speeches, photos
                  and other programme elements. We plan quantities and timing around your guest
                  count and reception schedule.
                </p>
              </div>

              {/* H3: Buffet Wedding Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Utensils className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Buffet Wedding Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Buffet service suits larger guest counts and lets guests move at their own pace,
                  which works well once the formal parts of the reception (speeches, cutting the
                  cake, first dance) are underway. It&apos;s the most flexible format for a
                  reception with a full programme.
                </p>
              </div>

              {/* H3: Live Catering Stations */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Sparkles className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Live Catering Stations
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Live catering stations bring an interactive element to the reception, with food
                  prepared and served in view of guests rather than plated in advance. This suits
                  receptions where guest experience is part of the atmosphere, and can be run
                  alongside buffet service for larger weddings.
                </p>
              </div>

              {/* H3: Private & Family Wedding Catering */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Heart className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Private & Family Wedding Catering
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Smaller, more private wedding celebrations — held at a family home or a smaller
                  venue — are planned the same way as larger receptions, just scaled to a smaller
                  guest count and a more personal setting.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-gold/20 bg-ink/70 p-6 text-center shadow-lux">
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                We don&apos;t currently offer plated multi-course service or a separate
                canapé/passed-item menu as standalone formats. If your reception needs something
                beyond buffet or live-station service, tell us the details when you request a quote
                and we&apos;ll let you know what can be arranged.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Planning Your Wedding Menu */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">Menu & Dietary Customization</p>
                <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                  Planning Your Wedding Menu
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The menu is planned around your guest count, the format of the reception (buffet
                  or live stations), and the timing of service on the day. If you or your guests
                  have dietary requirements, let us know when you get in touch so this can be
                  factored into planning — share the specifics with our team rather than assuming a
                  standard menu will cover it.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We don&apos;t publish a fixed menu list here, since what&apos;s available depends
                  on your event&apos;s scale and requirements; the clearest way to find out
                  what&apos;s possible for your wedding is to share your guest count and event
                  details when you request a quote.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-lux p-4">
                  <Image
                    src={svcCateringImg}
                    alt="Wedding food presentation by Z M FAMILY"
                    width={800}
                    height={600}
                    className="h-96 w-full rounded-xl object-cover"
                  />
                  <div className="mt-4 rounded-xl border border-gold/20 bg-ink/70 p-5">
                    <p className="font-display text-lg font-light text-foreground">
                      Tailored Menu Creation
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Every menu is constructed specifically for your guest count, dietary
                      preferences, and reception timeline in Doha and across Qatar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: How Wedding Catering Works */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">5-Step Reception Process</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                How Wedding Catering Works
              </h2>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">01</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    01. Tell Us About Your Wedding
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Share your wedding date, guest count and venue with our team by phone, WhatsApp
                    or the quote form below.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">02</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    02. Discuss Guest Count, Venue & Requirements
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    We talk through your reception layout, timing and any dietary requirements, so
                    we understand how the day will run.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">03</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    03. Plan Menu & Service Style
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    We work out whether buffet, live stations, or a combination suits your guest
                    count and venue.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">04</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    04. Confirm the Catering Plan
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Once you&apos;re happy with the plan, we confirm the details and provide your
                    quote.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-lux flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl text-gold/70">05</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                    05. Event-Day Catering & Service
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    On the day, our team handles setup, food service and clear-up, so catering runs
                    alongside the rest of your reception without you having to manage it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Couples Choose Z M FAMILY for Wedding Catering */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Our Commitment</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Why Couples Choose Z M FAMILY for Wedding Catering
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
                  You work directly with our catering team from your first enquiry through to the
                  wedding day itself.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Calendar className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Planning Built Around Your Reception
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Guest count, venue and timing shape the catering plan, rather than a fixed package
                  being applied regardless of your day.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Clear Quotation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You receive a quote based on your actual wedding details before confirming
                  anything.
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
                  Buffet or live catering stations, chosen to fit your reception rather than
                  defaulted to one format.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Utensils className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  On-Site Setup and Service Included
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our team sets up, serves and clears up at your venue as part of the service.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-lux">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  Coordination With Wedding-Day Transport
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  For couples who also need transport on the day, catering can be coordinated with{" "}
                  <Link href="/services/rent-a-car/" className="link-gold">
                    wedding car rental in Qatar
                  </Link>{" "}
                  through Z M FAMILY&apos;s rent-a-car service, since both are arranged through the
                  same company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Wedding Catering Across Qatar */}
        <section className="border-t border-border bg-ink/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-4xl rounded-3xl border border-gold/30 bg-card p-8 shadow-lux sm:p-12">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <p className="eyebrow">Nationwide Venues</p>
                  <h2 className="mt-2 font-display text-3xl font-light text-foreground sm:text-4xl">
                    Wedding Catering Across Qatar
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Z M FAMILY is based in Doha and provides wedding catering to clients across
                    Qatar, subject to venue and availability. Wedding catering can be arranged at a
                    range of locations — private homes, wedding halls, event venues or hotel
                    function spaces — depending on where your reception is being held. Let us know
                    your venue and date when you request a quote and we&apos;ll confirm what&apos;s
                    possible for your wedding.
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
              <p className="eyebrow">Common Questions</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Everything you need to know about Z M FAMILY wedding catering in Qatar.
              </p>
            </div>

            <div className="mt-12">
              <CateringFaqAccordion faqs={faqList} />
            </div>
          </div>
        </section>

        {/* Section: Request a Wedding Catering Quote */}
        <section id="quote-form" className="py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="eyebrow">Get Started</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Request a Wedding Catering Quote
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tell us about your wedding and we&apos;ll get back to you with a catering plan and
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
