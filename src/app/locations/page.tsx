import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Locations | Z M Family Qatar",
  description: "Z M Family provides integrated services across Doha and throughout Qatar.",
};

export default function LocationsPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-[4.25rem]">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <p className="eyebrow mb-4">Locations</p>
          <h1 className="font-display text-4xl font-light text-foreground">Qatar-Wide Coverage</h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Headquartered in Doha, Z M Family operates across Qatar — serving businesses, properties
            and events nationwide with consistent quality and reliability.
          </p>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
