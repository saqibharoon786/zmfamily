import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { allServiceGroups } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "All Services in Qatar | Z M Family",
  description:
    "Explore integrated business, property and mobility services across Qatar — catering, cleaning, laundry, real estate, facility management and rent a car.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-[4.25rem]">
        <section className="border-b border-border bg-ink/40 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="eyebrow mb-4">Our Services</p>
            <h1 className="font-display text-4xl font-light text-foreground md:text-5xl">
              Integrated Services Across Qatar
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              One trusted partner for catering, cleaning, laundry, real estate, facility management
              and mobility — delivered with premium standards nationwide.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <ul className="grid gap-6 sm:grid-cols-2">
              {allServiceGroups.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.slug}>
                    <Link
                      href={service.href}
                      className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/30"
                    >
                      <span className="mb-5 flex size-11 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 text-gold transition-transform duration-200 group-hover:-translate-y-0.5">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <h2 className="font-display text-2xl font-light text-foreground">
                        {service.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                        Explore {service.title}
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
