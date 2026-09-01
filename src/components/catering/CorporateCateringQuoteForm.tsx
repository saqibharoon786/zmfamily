"use client";

import { motion } from "motion/react";
import { Loader2, Send } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { siteContact } from "@/lib/site-config";
import { WhatsAppQrCode } from "@/components/ui/WhatsAppQrCode";
import { cn } from "@/lib/utils";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${siteContact.email.inbox}`;

export function CorporateCateringQuoteForm() {
  const [pending, startTransition] = useTransition();
  const [serviceRequirement, setServiceRequirement] = useState("Corporate Lunch / Buffet");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
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
            Company: company,
            Phone: phone,
            Email: email,
            "Event Type": eventType,
            "Event Date": eventDate,
            "Guest / Employee Count": guestCount,
            "Venue / Office Location": venue,
            "Catering Format": serviceRequirement,
            "Catering Requirements": details,
            _subject: `Corporate Catering Quote Request from ${company || name} — Z M FAMILY`,
            _template: "table",
            _replyto: email,
            _captcha: "false",
          }),
        });

        const result = (await response.json()) as { success?: string; message?: string };

        if (!response.ok) {
          throw new Error(result.message ?? "Could not send your corporate catering request.");
        }

        toast.success(
          "Thank you! Your corporate catering quote request was sent. Our team will contact you shortly.",
        );
        form.reset();
        setServiceRequirement("Corporate Lunch / Buffet");
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
        <h3 className="font-display text-2xl font-light text-foreground">
          Corporate Catering Quote Request
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Fill in your business event details for a tailored corporate quote.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input required name="name" type="text" placeholder="Your name" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Company / Organization</label>
          <input name="company" type="text" placeholder="Company name" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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

        <div>
          <label className={labelClass}>Work Email Address *</label>
          <input
            required
            name="email"
            type="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Event / Function Type</label>
          <select
            name="eventType"
            defaultValue="Office Meeting / Business Lunch"
            className={cn(inputClass, "cursor-pointer appearance-none bg-card")}
          >
            <option value="Office Meeting / Business Lunch">Office Meeting / Business Lunch</option>
            <option value="Staff Meals / Daily Office Catering">
              Staff Meals / Daily Office Catering
            </option>
            <option value="Corporate Event / Company Function">
              Corporate Event / Company Function
            </option>
            <option value="Conference / Seminar / Workshop">Conference / Seminar / Workshop</option>
            <option value="Commercial Premises Catering">Commercial Premises Catering</option>
            <option value="Other Business Event">Other Business Event</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Event Date</label>
          <input name="eventDate" type="date" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Guest / Employee Count</label>
          <input
            name="guestCount"
            type="text"
            placeholder="e.g. 15, 80, 250+"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Venue / Office Location</label>
          <input
            name="venue"
            type="text"
            placeholder="West Bay, Lusail, Old Al Ghanim..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Catering Format</label>
        <div className="flex flex-wrap gap-2.5">
          {[
            "Corporate Lunch / Buffet",
            "Boardroom / Meeting Refreshments",
            "Live Catering Counters",
            "Recurring Staff Meals",
          ].map((fmt) => (
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
        <label className={labelClass}>Catering Requirements & Agenda</label>
        <textarea
          name="details"
          rows={3}
          placeholder="Break times, dietary requirements, setup schedule..."
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
            Sending Request…
            <Loader2 className="size-4 animate-spin" />
          </>
        ) : (
          <>
            Request Corporate Catering Quote
            <Send className="size-4" />
          </>
        )}
      </motion.button>

      <WhatsAppQrCode variant="form" className="mt-3" />

      <p className="text-center text-[0.7rem] font-medium text-muted-foreground">
        Direct response from Z M FAMILY Corporate Catering Team
      </p>
    </form>
  );
}
