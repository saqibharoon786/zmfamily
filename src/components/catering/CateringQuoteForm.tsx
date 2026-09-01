"use client";

import { motion } from "motion/react";
import { Loader2, Send } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { siteContact } from "@/lib/site-config";
import { WhatsAppQrCode } from "@/components/ui/WhatsAppQrCode";
import { cn } from "@/lib/utils";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${siteContact.email.inbox}`;

export function CateringQuoteForm() {
  const [pending, startTransition] = useTransition();
  const [serviceRequirement, setServiceRequirement] = useState("Buffet Service");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const eventType = String(data.get("eventType") ?? "").trim();
    const eventDate = String(data.get("eventDate") ?? "").trim();
    const guestCount = String(data.get("guestCount") ?? "").trim();
    const venue = String(data.get("venue") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    if (!name || !phone || !email) {
      toast.error("Please fill in your name, phone number, and email.");
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: name,
            Phone: phone,
            Email: email,
            "Event Type": eventType,
            "Event Date": eventDate,
            "Guest Count": guestCount,
            "Venue / Location": venue,
            "Service Format": serviceRequirement,
            "Specific Requirements": details,
            _subject: `Catering Quote Request from ${name} — Z M FAMILY`,
            _template: "table",
            _replyto: email,
            _captcha: "false",
          }),
        });

        const result = (await response.json()) as { success?: string; message?: string };

        if (!response.ok) {
          throw new Error(result.message ?? "Could not send your catering request.");
        }

        toast.success(
          "Thank you! Your catering quote request was sent. Our team will contact you shortly.",
        );
        form.reset();
        setServiceRequirement("Buffet Service");
      } catch {
        toast.error("Something went wrong. Please call us directly at +974 5121 5226.");
      }
    });
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-background/80 px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-gold/60 focus:ring-2 focus:ring-ring";
  const labelClass =
    "mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-foreground/80";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-gold/30 bg-card p-7 shadow-lux sm:p-9"
    >
      <div className="border-b border-border/80 pb-4">
        <h3 className="font-display text-2xl font-light text-foreground">Catering Inquiry Form</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Provide your event details for an accurate, tailored catering quote across Qatar.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input required name="name" type="text" placeholder="Your name" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="+974 5121 5226"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Event Type</label>
          <select
            name="eventType"
            defaultValue="Wedding"
            className={cn(inputClass, "cursor-pointer appearance-none bg-card")}
          >
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Office Lunch / Function">Office Lunch / Function</option>
            <option value="Private Gathering / Party">Private Gathering / Party</option>
            <option value="Commercial Venue Event">Commercial Venue Event</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className={labelClass}>Event Date</label>
          <input name="eventDate" type="date" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Guest Count</label>
          <input name="guestCount" type="text" placeholder="e.g. 50, 200+" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Venue / Location</label>
          <input
            name="venue"
            type="text"
            placeholder="Doha, Al Khor, Pearl..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Service Format</label>
        <div className="flex flex-wrap gap-2.5">
          {["Buffet Service", "Live Catering Stations", "Both / Not Sure"].map((fmt) => (
            <button
              key={fmt}
              type="button"
              onClick={() => setServiceRequirement(fmt)}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.72rem] font-semibold tracking-[0.12em] uppercase transition-all duration-300",
                serviceRequirement === fmt
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground",
              )}
            >
              {fmt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Service Requirements & Details</label>
        <textarea
          name="details"
          rows={3}
          placeholder="Menu preferences, dietary requirements, setup timing..."
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <motion.button
        {...(pending ? {} : { whileHover: { scale: 1.01 }, whileTap: { scale: 0.99 } })}
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gold-gradient py-4 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase shadow-glow disabled:opacity-70"
      >
        {pending ? (
          <>
            Sending Quote Request…
            <Loader2 className="size-4 animate-spin" />
          </>
        ) : (
          <>
            Request Catering Quote
            <Send className="size-4" />
          </>
        )}
      </motion.button>

      <WhatsAppQrCode variant="form" className="mt-3" />

      <p className="text-center text-[0.7rem] font-medium text-muted-foreground">
        Direct response from Z M FAMILY Catering Team · No spam
      </p>
    </form>
  );
}
