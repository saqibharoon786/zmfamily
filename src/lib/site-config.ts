export const siteContact = {
  phone: {
    label: "Call / WhatsApp",
    display: "+974 5121 5226",
    href: "tel:+97451215226",
    whatsapp: "97451215226",
  },
  email: {
    display: "zmfamilykitchen@gmail.com",
    href: "mailto:zmfamilykitchen@gmail.com",
    inbox: "zmfamilykitchen@gmail.com",
  },
  address: {
    display: "Zone No. 74, Doha — Al Khor, Qatar",
    lines: ["Zone No. 74", "Doha — Al Khor", "Qatar"],
    mapsQuery: "Zone 74 Al Khor Doha Qatar",
    /**
     * VERIFY BEFORE LIVE SEO: "Doha — Al Khor" may refer to Zone 74 in the Al Khor area
     * rather than central Doha. Confirm the registered/operating address with the business
     * and keep NAP identical across homepage, footer, contact, and schema.
     */
    needsVerification: true,
  },
  hours: "7 days · 9 AM – 11 PM — 24/7 for event emergencies",
  /** VERIFY: confirm operating hours with the business before using in schema or marketing claims. */
  hoursNeedVerification: true,
} as const;

export const contactFormServices = [
  "Catering Services",
  "Restaurant & Dining Services",
  "Cleaning Services",
  "Laundry Services",
  "Real Estate",
  "Facility Management",
  "Rent A Car",
  "Other / Multiple Services",
] as const;

export type ContactFormService = (typeof contactFormServices)[number];

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  service: ContactFormService;
  details: string;
};
