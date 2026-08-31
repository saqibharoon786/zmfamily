import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Industries We Serve | Z M Family Qatar",
  description:
    "Z M Family serves hospitality, corporate, residential, retail and industrial sectors across Qatar.",
};

export default function IndustriesPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-[4.25rem]">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <p className="eyebrow mb-4">Industries</p>
          <h1 className="font-display text-4xl font-light text-foreground">Industries We Serve</h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            From five-star hospitality and corporate offices to residential communities and
            commercial developments — we deliver tailored service programmes across Qatar.
          </p>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
