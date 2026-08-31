"use client";

import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/site/Logo";
import {
  allServiceGroups,
  businessServicesColumn,
  mainNavLinks,
  propertyMobilityColumn,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

function ServiceAccordionGroups({
  columnHeading,
  serviceSlugs,
  onClose,
}: {
  columnHeading: string;
  serviceSlugs: string[];
  onClose: () => void;
}) {
  const groups = allServiceGroups.filter((g) => serviceSlugs.includes(g.slug));

  return (
    <div className="mb-4">
      <p className="eyebrow mb-2 px-1">{columnHeading}</p>
      {groups.map((group) => (
        <AccordionItem key={group.slug} value={group.slug} className="border-gold/10">
          <AccordionTrigger className="py-4 text-[0.875rem] font-medium text-foreground hover:no-underline">
            {group.title}
          </AccordionTrigger>
          <AccordionContent className="pb-2">
            <Link
              href={group.href}
              onClick={onClose}
              className="mb-3 block rounded-lg border border-gold/15 bg-gold/5 px-4 py-3 text-[0.8125rem] text-gold"
            >
              View all {group.title} services →
            </Link>
            <ul className="space-y-1">
              {group.subServices.map((sub) => (
                <li key={sub.href}>
                  <Link
                    href={sub.href}
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3.5 text-[0.875rem] text-muted-foreground transition-colors active:bg-white/[0.04] active:text-foreground"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </div>
  );
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-gold/15 bg-ink shadow-2xl">
        <div className="flex items-center justify-between border-b border-gold/10 px-5 py-4">
          <Logo variant="mobile" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-3.5 text-[0.8125rem] font-medium tracking-[0.14em] text-foreground/90 uppercase transition-colors active:bg-white/[0.04]"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-[0.8125rem] font-medium tracking-[0.14em] text-gold uppercase transition-colors active:bg-white/[0.04]"
              >
                Services
                <ChevronDown
                  className={cn(
                    "size-4 text-gold/60 transition-transform duration-200",
                    servicesOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-1 pt-2 pb-4">
                    <Accordion type="single" collapsible className="w-full">
                      <ServiceAccordionGroups
                        columnHeading={businessServicesColumn.heading}
                        serviceSlugs={businessServicesColumn.groups.map((g) => g.slug)}
                        onClose={onClose}
                      />
                      <ServiceAccordionGroups
                        columnHeading={propertyMobilityColumn.heading}
                        serviceSlugs={propertyMobilityColumn.groups.map((g) => g.slug)}
                        onClose={onClose}
                      />
                    </Accordion>
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="mt-2 block rounded-lg border border-gold/25 px-4 py-3.5 text-center text-[0.8125rem] font-medium text-gold"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="border-t border-gold/10 p-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full bg-gold-gradient px-6 py-4 text-[0.75rem] font-medium tracking-[0.16em] text-ink uppercase transition-opacity hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
