"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  q: string;
  a: string;
};

export function CateringFaqAccordion({ faqs }: { faqs: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          value={`faq-${i}`}
          className="rounded-xl border border-border bg-card px-6 shadow-lux"
        >
          <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-foreground transition-colors hover:text-gold hover:no-underline sm:text-[1.1rem]">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
