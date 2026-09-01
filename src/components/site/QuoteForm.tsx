"use client";

import { motion } from "motion/react";
import { ChevronDown, Loader2, Send } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { contactFormServices, siteContact, type ContactFormService } from "@/lib/site-config";
import { WhatsAppQrCode } from "@/components/ui/WhatsAppQrCode";
import { cn } from "@/lib/utils";

/** FormSubmit AJAX — no SMTP, sends every field in the email. */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${siteContact.email.inbox}`;

type QuoteFormProps = {
  variant?: "hero" | "default";
  className?: string;
};

export function QuoteForm({ variant = "default", className }: QuoteFormProps) {
  const [service, setService] = useState<ContactFormService>(contactFormServices[0]!);
  const [pending, startTransition] = useTransition();
  const isHero = variant === "hero";

  const inputClass = cn(
    "w-full rounded-xl px-4 py-3.5 text-[0.9375rem] font-medium outline-none transition-all placeholder:font-normal",
    isHero
      ? "border border-white/20 bg-black/35 text-white shadow-inner placeholder:text-white/40 focus:border-gold/60 focus:bg-black/45 focus:ring-2 focus:ring-gold/25"
      : "border border-input bg-background/70 text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring",
  );

  const labelClass = cn(
    "mb-2 block text-[0.7rem] font-semibold tracking-[0.18em] uppercase",
    isHero ? "text-white/85" : "text-foreground/80",
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const selectedService = String(data.get("service") ?? service).trim();
    const details = String(data.get("details") ?? "").trim();

    if (!name || !phone || !email || !details) {
      toast.error("Please fill in all required fields.");
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
            Service: selectedService,
            "Project Details": details,
            _subject: `New inquiry from ${name} — Z M Family`,
            _template: "table",
            _replyto: email,
            _captcha: "false",
          }),
        });

        const result = (await response.json()) as { success?: string; message?: string };

        if (!response.ok) {
          throw new Error(result.message ?? "Could not send your message.");
        }

        toast.success("Thank you! Your message was sent — we will contact you shortly.");
        form.reset();
        setService(contactFormServices[0]!);
      } catch {
        toast.error("Something went wrong. Please call us directly or try again.");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        isHero
          ? "relative overflow-hidden rounded-2xl border border-gold/25 bg-ink/75 p-7 shadow-[0_32px_100px_-24px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:p-9"
          : "space-y-5 rounded-xl border border-border bg-card p-8 shadow-lux",
        className,
      )}
    >
      {isHero && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-gradient" />
          <div className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full bg-gold/10 blur-3xl" />
        </>
      )}

      <div className={cn("relative", isHero ? "space-y-5" : "space-y-5")}>
        {isHero && (
          <div className="border-b border-white/10 pb-5">
            <p className="eyebrow text-gold">Quick Quote</p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-wide text-white sm:text-[1.65rem]">
              Request a Free Quote
            </h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-white/75">
              Tell us what you need — our Qatar team responds with a clear quote within 24 hours.
            </p>
          </div>
        )}

        <div className={cn("grid gap-4", isHero ? "sm:grid-cols-2" : "gap-5 sm:grid-cols-2")}>
          <Field
            label="Your Name"
            name="name"
            placeholder="Full name"
            required
            labelClass={labelClass}
            inputClass={inputClass}
          />
          <Field
            label="Phone Number"
            name="phone"
            placeholder="+974 5121 5226"
            required
            labelClass={labelClass}
            inputClass={inputClass}
          />
        </div>

        <div className={cn("grid gap-4", isHero && "sm:grid-cols-2")}>
          <Field
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
            labelClass={labelClass}
            inputClass={inputClass}
          />

          <div>
            <label className={labelClass}>Service Required</label>
            {isHero ? (
              <div className="relative">
                <select
                  name="service"
                  defaultValue={service}
                  required
                  className={cn(inputClass, "cursor-pointer appearance-none pr-10")}
                >
                  {contactFormServices.map((s) => (
                    <option key={s} value={s} className="bg-ink text-white">
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-gold/70" />
              </div>
            ) : (
              <>
                <input type="hidden" name="service" value={service} />
                <div className="mt-1 flex flex-wrap gap-2">
                  {contactFormServices.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-all duration-300",
                        service === s
                          ? "border-gold bg-gold/15 text-gold-soft"
                          : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground",
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          <label className={labelClass}>Event / Project Details</label>
          <textarea
            name="details"
            required
            rows={4}
            placeholder="Guest count, date, location, special requirements..."
            className={cn(inputClass, "resize-none leading-relaxed")}
          />
        </div>

        <motion.button
          {...(pending ? {} : { whileHover: { scale: 1.01 }, whileTap: { scale: 0.99 } })}
          type="submit"
          disabled={pending}
          className={cn(
            "flex w-full items-center justify-center gap-2.5 rounded-xl bg-gold-gradient py-4 text-sm font-semibold tracking-[0.14em] text-primary-foreground uppercase shadow-glow disabled:opacity-70",
            isHero && "mt-1",
          )}
        >
          {pending ? (
            <>
              Sending…
              <Loader2 className="size-4 animate-spin" />
            </>
          ) : (
            <>
              {isHero ? "Get Free Quote" : "Send Request"}
              <Send className="size-4" strokeWidth={2.2} />
            </>
          )}
        </motion.button>

        <WhatsAppQrCode variant="form" className="mt-3" />

        {isHero && (
          <p className="text-center text-[0.7rem] font-medium text-white/50">
            Free quote · Direct response from our team
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
  labelClass,
  inputClass,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  labelClass: string;
  inputClass: string;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
