import type { Metadata } from "next";
import { Suspense } from "react";

import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import { FormSentNotice } from "@/components/site/FormSentNotice";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Marquee } from "@/components/site/Marquee";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { RestaurantSection } from "@/components/site/RestaurantSection";
import { Why } from "@/components/site/Why";
import { Certifications } from "@/components/site/Certifications";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { Coverage } from "@/components/site/Coverage";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { homeSeo } from "@/lib/homepage-content";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  authors: [{ name: "Z M FAMILY" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: homeSeo.ogTitle,
    description: homeSeo.ogDescription,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.ogTitle,
    description: homeSeo.ogDescription,
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <main className="overflow-x-hidden bg-background">
        <Suspense fallback={null}>
          <FormSentNotice />
        </Suspense>
        <Hero />
        <TrustBar />
        <Marquee />
        <Trust />
        <Services />
        <RestaurantSection />
        <Why />
        <Certifications />
        <Industries />
        <Process />
        <Coverage />
        <FAQ />
        <FinalCTA />
        <Contact />
        <Footer />
        <Toaster />
      </main>
    </>
  );
}
