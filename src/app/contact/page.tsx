import type { Metadata } from "next";
import { Suspense } from "react";

import { Contact } from "@/components/site/Contact";
import { FormSentNotice } from "@/components/site/FormSentNotice";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Contact Us | Z M Family Qatar",
  description: "Request a quote for integrated services across Qatar. Contact Z M Family today.",
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-[4.25rem]">
        <section className="border-b border-border bg-ink/40 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <Suspense fallback={null}>
              <FormSentNotice />
            </Suspense>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="font-display text-4xl font-light text-foreground md:text-5xl">
              Request a Quote
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us about your requirements — our Qatar team will respond with a tailored
              proposal.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
