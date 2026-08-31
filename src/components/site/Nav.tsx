"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { MegaMenu } from "@/components/site/MegaMenu";
import { MobileNav } from "@/components/site/MobileNav";
import { Logo } from "@/components/site/Logo";
import { mainNavLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const solid = scrolled || !isHome || megaOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || megaOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, megaOpen]);

  const openMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 280);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const navLinkClass = cn(
    "relative text-[0.6875rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300",
    solid ? "text-white/80 hover:text-white" : "text-white/85 hover:text-white",
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-gold/15 bg-ink/90 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-[4.25rem] items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <Logo variant="nav" priority className="justify-self-start" />

            <nav
              className="hidden items-center justify-center gap-7 lg:flex"
              aria-label="Main navigation"
            >
              <ul className="flex items-center gap-7">
                <li>
                  <Link href="/" className={navLinkClass}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={navLinkClass}>
                    About
                  </Link>
                </li>

                <li
                  onMouseEnter={() => {
                    cancelClose();
                    openMega();
                  }}
                  onMouseLeave={closeMega}
                >
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    onClick={() => setMegaOpen((v) => !v)}
                    className={cn(
                      navLinkClass,
                      "inline-flex items-center gap-1.5",
                      megaOpen && "text-gold",
                    )}
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "size-3 transition-transform duration-200",
                        megaOpen && "rotate-180",
                      )}
                    />
                  </button>
                </li>

                {mainNavLinks.slice(2).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={navLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3 justify-self-end">
              <Link
                href="/contact"
                className="hidden rounded-full border border-gold/40 px-5 py-2.5 text-[0.6875rem] font-medium tracking-[0.16em] text-gold uppercase transition-all duration-300 hover:bg-gold/10 sm:inline-flex"
              >
                Request a Quote
              </Link>

              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MegaMenu
        open={megaOpen}
        onClose={() => setMegaOpen(false)}
        onMouseEnter={cancelClose}
        onMouseLeave={closeMega}
      />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
