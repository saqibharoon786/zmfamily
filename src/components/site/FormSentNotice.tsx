"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export function FormSentNotice() {
  const params = useSearchParams();
  const sent = params.get("sent") === "1";

  useEffect(() => {
    if (sent) {
      toast.success("Thank you! Your message was sent — we will contact you shortly.");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [sent]);

  if (!sent) return null;

  return (
    <div className="mx-auto mb-8 max-w-3xl rounded-xl border border-gold/30 bg-gold/10 px-6 py-4 text-center text-sm font-medium text-gold-soft">
      Thank you! Your message was sent successfully. We will reply within 24 hours.
    </div>
  );
}
