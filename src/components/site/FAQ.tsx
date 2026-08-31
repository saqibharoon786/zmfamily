"use client";

import { Reveal, SectionHeading } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaqs } from "@/lib/homepage-content";

export function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          fullTitle="Frequently Asked Questions"
          copy="Common questions about our integrated services company and six specialist divisions across Qatar."
        />

        <Reveal delay={0.1} className="mt-14">
          <Accordion type="single" collapsible className="w-full">
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline sm:text-[1.05rem]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed font-medium text-foreground/80 sm:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
