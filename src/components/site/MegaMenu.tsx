"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

import heroCatering from "@/assets/hero-catering.jpg";
import {
  businessServicesColumn,
  propertyMobilityColumn,
  type ServiceGroup,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function ServiceGroupBlock({ group, onClose }: { group: ServiceGroup; onClose: () => void }) {
  const Icon = group.icon;

  return (
    <div className="mb-6 last:mb-0">
      <Link
        href={group.href}
        onClick={onClose}
        className="group/service mb-2.5 flex items-start gap-3 rounded-lg px-2 py-2 transition-colors duration-200 hover:bg-white/[0.04]"
      >
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-gold transition-all duration-200 group-hover/service:-translate-y-0.5 group-hover/service:border-gold/50 group-hover/service:bg-gold/15">
          <Icon className="size-3.5" strokeWidth={1.5} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className="text-[0.8125rem] font-medium tracking-wide text-foreground transition-colors group-hover/service:text-gold-soft">
              {group.title}
            </span>
            <ArrowRight className="size-3 text-gold/40 opacity-0 transition-all duration-200 group-hover/service:translate-x-0.5 group-hover/service:opacity-100 group-hover/service:text-gold" />
          </span>
          <span className="mt-0.5 block text-[0.6875rem] leading-relaxed text-muted-foreground">
            {group.description}
          </span>
        </span>
      </Link>
      <ul className="space-y-0.5 pl-[2.75rem]">
        {group.subServices.map((sub) => (
          <li key={sub.href}>
            <Link
              href={sub.href}
              onClick={onClose}
              className="group/sub block rounded-md px-2 py-1.5 text-[0.75rem] text-muted-foreground transition-colors duration-200 hover:bg-white/[0.04] hover:text-foreground"
            >
              <span className="flex items-center justify-between gap-2">
                {sub.label}
                <ArrowRight className="size-2.5 shrink-0 text-gold/30 opacity-0 transition-all duration-200 group-hover/sub:translate-x-0.5 group-hover/sub:opacity-100 group-hover/sub:text-gold" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavColumnBlock({
  heading,
  groups,
  onClose,
}: {
  heading: string;
  groups: ServiceGroup[];
  onClose: () => void;
}) {
  return (
    <div>
      <p className="eyebrow mb-5">{heading}</p>
      {groups.map((group) => (
        <ServiceGroupBlock key={group.slug} group={group} onClose={onClose} />
      ))}
    </div>
  );
}

export function MegaMenu({ open, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 top-[4.25rem] z-40 bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />

      {/* Full-width panel — fixed to viewport, NOT inside the nav li */}
      <div
        role="region"
        aria-label="Services navigation"
        aria-hidden={!open}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(
          "fixed inset-x-0 top-[4.25rem] z-50 px-4 transition-all duration-300 sm:px-6",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        {/* Invisible hover bridge between header and panel */}
        <div className="absolute inset-x-0 -top-3 h-3" aria-hidden />
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-b-2xl border border-gold/15 border-t-0 bg-ink/95 shadow-lux backdrop-blur-xl">
            <div className="grid gap-0 lg:grid-cols-[1fr_1fr_minmax(240px,0.85fr)]">
              {/* Column 1 */}
              <div className="border-b border-gold/10 px-7 py-7 lg:border-r lg:border-b-0 lg:px-8 lg:py-8">
                <NavColumnBlock
                  heading={businessServicesColumn.heading}
                  groups={businessServicesColumn.groups}
                  onClose={onClose}
                />
              </div>

              {/* Column 2 */}
              <div className="border-b border-gold/10 px-7 py-7 lg:border-r lg:border-b-0 lg:px-8 lg:py-8">
                <NavColumnBlock
                  heading={propertyMobilityColumn.heading}
                  groups={propertyMobilityColumn.groups}
                  onClose={onClose}
                />
              </div>

              {/* Column 3 — Featured */}
              <div className="relative flex flex-col justify-between bg-card/50 p-7 lg:p-8">
                <div>
                  <p className="eyebrow mb-4">Featured Services</p>
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl border border-gold/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={heroCatering.src}
                      alt="Integrated business services across Qatar"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  </div>
                  <h3 className="font-display text-xl leading-snug font-light text-foreground">
                    Integrated Services.
                    <br />
                    <span className="text-gold-gradient">One Trusted Partner.</span>
                  </h3>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    Professional business, property and lifestyle services across Qatar.
                  </p>
                </div>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="group/cta mt-6 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-wide text-gold transition-colors hover:text-gold-soft"
                >
                  Explore All Services
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Footer bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gold/10 bg-ink/80 px-7 py-3.5 lg:px-8">
              <p className="text-[0.6875rem] tracking-wide text-muted-foreground">
                One company. Multiple professional services. Qatar-wide.
              </p>
              <Link
                href="/services"
                onClick={onClose}
                className="text-[0.6875rem] font-medium tracking-[0.12em] text-gold uppercase transition-colors hover:text-gold-soft"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
