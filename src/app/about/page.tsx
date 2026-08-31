import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "About Us | Z M Family Qatar",
  description:
    "Learn about Z M Family — Qatar's integrated services partner for catering, property, facilities and mobility.",
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-[4.25rem]">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <p className="eyebrow mb-4">About</p>
          <h1 className="font-display text-4xl font-light text-foreground">About Z M Family</h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Z M Family is a Qatar-based integrated services company delivering premiums catering,
            cleaning, laundry, real estate, facility management and rent a car solutions under one
            trusted brand.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block text-sm text-gold transition-colors hover:text-gold-soft"
          >
            Get in touch →
          </Link>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
