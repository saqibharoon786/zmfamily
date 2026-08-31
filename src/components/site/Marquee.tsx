import { homeMarqueeItems } from "@/lib/homepage-content";

export function Marquee() {
  const row = [...homeMarqueeItems, ...homeMarqueeItems];
  return (
    <div className="relative border-y border-border bg-ink/60 py-6">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl tracking-wide text-foreground/80 sm:text-3xl">
              {t}
            </span>
            <span className="size-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
