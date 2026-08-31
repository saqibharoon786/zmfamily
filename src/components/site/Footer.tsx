import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { allServiceGroups, mainNavLinks } from "@/lib/navigation";
import { siteContact } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col items-start gap-5">
            <Logo variant="footer" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Z M FAMILY is an integrated services company based in Doha, Qatar, offering catering,
              cleaning, laundry, rent a car, real estate, and facility management. Serving corporate
              offices, hospitality venues, residential clients, and event organisers across Qatar
              through six coordinated divisions and a single point of contact.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-gold/40 px-5 py-2.5 text-[0.68rem] tracking-[0.18em] text-gold uppercase transition-colors hover:bg-gold/10"
            >
              Request a Quote
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-3">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-soft"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="eyebrow mb-5">Services</p>
            <ul className="space-y-3">
              {allServiceGroups.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold-soft"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-5">Contact Us</p>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={siteContact.phone.href}
                    className="mt-1 block text-sm text-foreground transition-colors hover:text-gold"
                  >
                    {siteContact.phone.display}
                  </a>
                  <a
                    href={`https://wa.me/${siteContact.phone.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-gold transition-colors hover:text-gold-soft"
                  >
                    <MessageCircle className="size-3.5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Email
                  </p>
                  <a
                    href={siteContact.email.href}
                    className="mt-1 block break-all text-sm text-foreground transition-colors hover:text-gold"
                  >
                    {siteContact.email.display}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Address
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteContact.address.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm leading-relaxed text-foreground transition-colors hover:text-gold"
                  >
                    {siteContact.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Hours
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {siteContact.hours}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} Z M FAMILY — Integrated Services · Doha, Qatar
          </p>
          <p className="text-[0.65rem] tracking-wide text-muted-foreground/70">
            Zone No. 74 · Doha — Al Khor · {siteContact.phone.display}
          </p>
        </div>
      </div>
    </footer>
  );
}
