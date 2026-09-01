import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Clock,
  Flame,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import heroRestaurantImg from "@/assets/hero-restaurant.jpg";
import svcRestaurantImg from "@/assets/svc-restaurant.jpg";
import { CateringFaqAccordion } from "@/components/catering/CateringFaqAccordion";
import { RestaurantQuoteForm } from "@/components/restaurant/RestaurantQuoteForm";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { siteContact } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Restaurant & Kitchen Services in Qatar | Z M FAMILY",
  description:
    "Z M FAMILY operates authentic restaurant & kitchen services in Doha, offering daily executive meal boxes, cloud kitchen delivery, family feast platters, and custom dining.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/services/restaurant/`,
  },
  openGraph: {
    title: "Restaurant & Dining Services in Qatar | Z M FAMILY",
    description:
      "Gourmet food delivery, executive office meal boxes, family platters, and custom restaurant dining across Doha and Qatar.",
    type: "website",
    url: `${siteUrl}/services/restaurant/`,
    images: [
      {
        url: `${siteUrl}/assets/hero-restaurant.jpg`,
        width: 1200,
        height: 630,
        alt: "Z M FAMILY Restaurant and Dining Kitchen Services in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant & Dining Services in Qatar | Z M FAMILY",
    description:
      "Gourmet food delivery, executive office meal boxes, family platters, and custom restaurant dining across Doha and Qatar.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Restaurant & Kitchen Services",
  name: "Restaurant Services",
  description:
    "Restaurant and kitchen dining services in Qatar including executive office meals, cloud kitchen food delivery, family platters, and custom dining.",
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
  url: `${siteUrl}/services/restaurant/`,
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
      name: "Restaurant & Kitchen",
      item: `${siteUrl}/services/restaurant/`,
    },
  ],
};

const faqList = [
  {
    q: "What restaurant and dining services does Z M FAMILY offer in Qatar?",
    a: "Z M FAMILY offers authentic dining and kitchen services including daily executive office meal boxes, cloud kitchen gourmet food delivery, family feast platters, and custom banquet menus across Doha and Qatar.",
  },
  {
    q: "Do you deliver executive lunch boxes to offices in Doha?",
    a: "Yes. We prepare and deliver fresh executive office lunch boxes and team meal sets daily for businesses, meetings, and corporate staff in Doha.",
  },
  {
    q: "Can I order family food platters for home celebrations?",
    a: "Yes. We offer generous Arabic, Asian, and International food platters specially curated for family gatherings, weekend dinners, and private house parties.",
  },
  {
    q: "How does the Z M FAMILY Cloud Kitchen service work?",
    a: "Our cloud kitchen prepares authentic meals cooked fresh to order. Orders can be placed via phone or WhatsApp with fast temperature-controlled delivery to your doorstep.",
  },
  {
    q: "Are custom dietary menus available?",
    a: "Yes. Our culinary chefs can customize dining menus for specific dietary requirements, vegetarian choices, or custom regional recipes.",
  },
  {
    q: "What cuisines do you specialize in?",
    a: "Our kitchen specializes in authentic Middle Eastern / Qatari dishes, Asian specialties, International classics, and fresh grilled platters.",
  },
  {
    q: "Can restaurant services be combined with catering or events?",
    a: "Yes. Clients organizing events can combine daily restaurant meal support with full banquet catering, cleaning, and transport services through Z M FAMILY.",
  },
  {
    q: "What areas of Qatar do you deliver to?",
    a: "We are based in Doha and serve major business districts, offices, and residential areas across Doha, Lusail, West Bay, Al Khor, and surrounding municipalities.",
  },
  {
    q: "How far in advance should I place meal or platter orders?",
    a: "Daily meal orders and standard platters can be scheduled with short notice. For large group orders or custom menus, we recommend contacting us a day in advance.",
  },
  {
    q: "How can I place an order or request a restaurant quote?",
    a: "You can send an inquiry through the form on this page, call or WhatsApp us at +974 5121 5226, or email zmfamilykitchen@gmail.com.",
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

export default function RestaurantPage() {
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
                <li className="text-gold">Restaurant & Kitchen</li>
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
                  <UtensilsCrossed className="size-4 text-gold" />
                  <span className="eyebrow text-gold">Z M FAMILY — Kitchen & Dining Services</span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-light tracking-wide text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                  Authentic Restaurant & Kitchen Services in Qatar
                </h1>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Z M FAMILY operates professional kitchen and dining services in Doha. We provide
                  daily executive office meal boxes, cloud kitchen delivery, generous family feast
                  platters, and custom culinary menus — bringing authentic food prepared fresh daily
                  to your workplace or home.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#order-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
                  >
                    Order / Inquire Food Service
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href={`https://wa.me/${siteContact.phone.whatsapp}?text=Hello%20Z%20M%20FAMILY%20Kitchen,%20I%20would%20like%20to%20order%20food/restaurant%20services.`}
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
                      Kitchen Concept
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Cloud & Dining Kitchen
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Specialties
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Arabic, Asian & Int&apos;l
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Delivery
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
                    src={svcRestaurantImg}
                    alt="Authentic restaurant dining setup by Z M FAMILY Kitchen"
                    priority
                    width={1024}
                    height={768}
                    className="h-80 w-full object-cover sm:h-96 lg:h-[28rem]"
                  />
                  <div className="absolute inset-0 veil" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-foreground">
                    <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold backdrop-blur-md">
                      Freshly Cooked Daily
                    </span>
                    <p className="mt-2 font-display text-xl font-light text-white">
                      High hygiene standards & gourmet taste delivered fresh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Restaurant Services Offerings */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Our Dining Categories</p>
              <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                Restaurant & Kitchen Offerings
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tailored dining solutions whether you need daily staff lunches, gourmet delivery, or
                family feast platters.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <UtensilsCrossed className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Executive Office Meal Delivery
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Balanced, nutritious daily lunch boxes designed specifically for office staff,
                  executives, and boardroom meetings. Scaled to employee headcount with scheduled
                  hot delivery right before your break.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <ShoppingBag className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Cloud Kitchen & Takeaway Delivery
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Gourmet dishes cooked fresh to order by our culinary chef team. Enjoy rapid,
                  temperature-preserved delivery for lunch or dinner across homes and business
                  offices in Qatar.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Flame className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Family Feast & Weekend Platters
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Generous Arabic mixed grills, biryanis, seafood platters, and international feast
                  trays perfect for family gatherings, weekend get-togethers, and home parties.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lux transition-all duration-300 hover:border-gold/30">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <ChefHat className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  Custom Culinary Menus & VIP Banquets
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Personalized menu consultation for private hall banquets, VIP hosting, and special
                  dietary needs. Our chefs craft customized courses matching your taste and
                  occasion.
                </p>
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
                Common questions about Z M FAMILY Restaurant & Kitchen services in Qatar.
              </p>
            </div>

            <div className="mt-12">
              <CateringFaqAccordion faqs={faqList} />
            </div>
          </div>
        </section>

        {/* Section: Order / Inquiry Form */}
        <section id="order-form" className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow">Order Fresh Food</p>
                <h2 className="mt-3 font-display text-3xl font-light text-foreground sm:text-4xl">
                  Inquire & Order Kitchen Services
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Contact our kitchen team for meal boxes, feast platters, or custom restaurant food
                  inquiries.
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
                        Email Inquiry
                      </p>
                      <a
                        href={siteContact.email.href}
                        className="text-base font-semibold text-foreground transition-colors hover:text-gold"
                      >
                        {siteContact.email.display}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <RestaurantQuoteForm />
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
