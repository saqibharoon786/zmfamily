import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Blog | Z M Family Qatar",
  description: "Insights on facilities, hospitality and integrated services in Qatar.",
};

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-[4.25rem]">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <p className="eyebrow mb-4">Blog</p>
          <h1 className="font-display text-4xl font-light text-foreground">Insights & News</h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Articles on corporate services, property management and hospitality trends in Qatar —
            coming soon.
          </p>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
