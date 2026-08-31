import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Projects | Z M Family Qatar",
  description: "Explore selected projects delivered by Z M Family across Qatar.",
};

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-[4.25rem]">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <p className="eyebrow mb-4">Projects</p>
          <h1 className="font-display text-4xl font-light text-foreground">Our Projects</h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A showcase of corporate events, facility management contracts, property services and
            hospitality programmes delivered for clients across Qatar.
          </p>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
