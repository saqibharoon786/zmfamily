import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import type { SubService } from "@/lib/navigation";

type ServiceLandingProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  breadcrumbs: { label: string; href?: string }[];
  subServices?: SubService[];
  parentHref?: string;
  parentTitle?: string;
};

export function ServiceLanding({
  title,
  description,
  icon: Icon,
  breadcrumbs,
  subServices,
  parentHref,
  parentTitle,
}: ServiceLandingProps) {
  return (
    <>
      <main className="min-h-screen bg-background pt-[4.25rem]">
        <section className="border-b border-border bg-ink/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.label} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden>/</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-foreground">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-foreground">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex items-start gap-5">
              <span className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
              <div>
                <h1 className="font-display text-4xl font-light tracking-wide text-foreground md:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {subServices && subServices.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="mb-10 font-display text-2xl font-light text-foreground">
                Our {title} Services
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {subServices.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:bg-card/80"
                    >
                      <div>
                        <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-gold-soft">
                          {sub.label}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {sub.description}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-gold" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {parentHref && parentTitle && (
          <section className="border-t border-border py-16">
            <div className="mx-auto max-w-5xl px-6">
              <Link
                href={parentHref}
                className="inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-soft"
              >
                ← Back to {parentTitle}
              </Link>
            </div>
          </section>
        )}

        <section className="border-t border-border bg-ink/30 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="font-display text-3xl font-light text-foreground">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Contact our Qatar team for a tailored quote on {title.toLowerCase()} services.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-3 text-[0.75rem] tracking-[0.16em] text-gold uppercase transition-colors hover:bg-gold/10"
            >
              Get a Quote
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
