"use client";

import Image from "next/image";
import { MessageCircle, QrCode, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "footer" | "form" | "sidebar";
  className?: string;
};

export function WhatsAppQrCode({ variant = "form", className }: Props) {
  const whatsappUrl = `https://wa.me/97451215226?text=Hello%20Z%20M%20FAMILY%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20services.`;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}&color=d4af37&bgcolor=1a1614`;

  if (variant === "footer") {
    return (
      <div
        className={cn(
          "flex flex-col items-center rounded-2xl border border-gold/30 bg-ink/90 p-4 shadow-lux backdrop-blur-md sm:flex-row sm:items-center sm:gap-4",
          className,
        )}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex size-24 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-black/60 p-2 transition-transform hover:scale-105"
          title="Scan or Click to open WhatsApp"
        >
          <Image
            src={qrApiUrl}
            alt="Scan QR code to WhatsApp Z M FAMILY +974 5121 5226"
            width={88}
            height={88}
            unoptimized
            className="rounded-lg object-contain"
          />
          <span className="absolute -bottom-2 -right-2 flex size-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
            <MessageCircle className="size-3.5 fill-current" />
          </span>
        </a>

        <div className="mt-3 text-center sm:mt-0 sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
            <QrCode className="size-3.5" />
            Quick WhatsApp Scan
          </div>
          <p className="mt-1 text-xs font-medium text-foreground">Scan with phone camera</p>
          <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
            Instantly opens WhatsApp with Z M FAMILY team (+974 5121 5226)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gold/30 bg-card/90 p-4 shadow-lux transition-all duration-300 hover:border-gold/50",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex size-20 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-black/70 p-1.5 transition-transform hover:scale-105"
            title="Scan with phone camera or tap to chat on WhatsApp"
          >
            <Image
              src={qrApiUrl}
              alt="Scan QR code for Z M FAMILY WhatsApp +974 5121 5226"
              width={72}
              height={72}
              unoptimized
              className="rounded-lg object-contain"
            />
            <span className="absolute -bottom-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
              <MessageCircle className="size-3 fill-current" />
            </span>
          </a>

          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-gold">
              <Smartphone className="size-3" />
              Scan QR Code
            </div>
            <h4 className="mt-1 text-sm font-semibold text-foreground">Chat via WhatsApp</h4>
            <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
              Scan with mobile camera to connect instantly:{" "}
              <strong className="text-gold-soft">+974 5121 5226</strong>
            </p>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full border border-emerald-500/30 bg-emerald-600/20 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:bg-emerald-600/30 sm:inline-flex items-center gap-1"
        >
          <MessageCircle className="size-3" />
          Open Chat
        </a>
      </div>
    </div>
  );
}
