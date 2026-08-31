export const homeSeo = {
  title: "Z M FAMILY | Integrated Services Company in Qatar",
  description:
    "Z M FAMILY provides catering, cleaning, laundry, car rental, real estate and facility management services across Qatar — one company, one trusted team.",
  ogTitle: "Z M FAMILY — Integrated Services Across Qatar",
  ogDescription:
    "Six professional service divisions — catering, cleaning, laundry, car rental, real estate and facility management — under one trusted company in Qatar.",
} as const;

export const homeTrustCopy =
  "Z M FAMILY is a Qatar-based integrated services company operating six specialist divisions — catering, cleaning, laundry, rent a car, real estate, and facility management — through one point of contact. Clients in Doha and across Qatar can book a single service or coordinate several together, with pricing and scheduling handled directly by our team.";

export const homeCoverageCopy =
  "Z M FAMILY is based in Doha and supports clients across Qatar. Service availability depends on the type of work and location — contact our team to confirm coverage and scheduling for your requirement.";

export type HomeServiceBlock = {
  n: string;
  slug: string;
  href: string;
  h3: string;
  title: string;
  copy: string;
  points: string[];
  /** Visible CTA label — varied natural anchor text per service. */
  cta: string;
  imageAlt: string;
};

export const homeServices: HomeServiceBlock[] = [
  {
    n: "01",
    slug: "catering",
    href: "/services/catering",
    h3: "Catering Services in Qatar",
    title: "Catering",
    copy: "Our catering division handles weddings, private functions, and corporate events across Qatar, with buffet setups, live counters, and plated service. Menus are planned around guest count and event style, with on-site setup, service, and clearup.",
    points: [
      "Wedding and private event catering",
      "Corporate and office catering",
      "Buffet and live catering stations",
      "Guest-count-based menu planning",
      "On-site setup, service, and clearup",
    ],
    cta: "Explore catering services in Qatar",
    imageAlt: "Z M FAMILY catering setup for an event in Qatar",
  },
  {
    n: "02",
    slug: "cleaning",
    href: "/services/cleaning",
    h3: "Cleaning Services in Qatar",
    title: "Cleaning",
    copy: "Our cleaning division covers homes, offices, and commercial spaces — separate from laundry. Services include scheduled cleaning, deep cleans, and move-in or move-out cleaning for tenants and owners.",
    points: [
      "Office and commercial cleaning",
      "Residential cleaning, one-time or recurring",
      "Deep cleaning",
      "Move-in and move-out cleaning",
      "Scheduling built around client working hours",
    ],
    cta: "View cleaning services in Qatar",
    imageAlt: "Professional cleaning service by Z M FAMILY in Doha, Qatar",
  },
  {
    n: "03",
    slug: "laundry",
    href: "/services/laundry",
    h3: "Laundry Services in Qatar",
    title: "Laundry",
    copy: "Our laundry division handles everyday laundry, dry cleaning, and commercial linen or uniform laundry with pickup and delivery across Qatar. Hotels, restaurants, and offices can set recurring collection schedules.",
    points: [
      "Laundry pickup and delivery",
      "Dry cleaning",
      "Household laundry",
      "Commercial linen laundry",
      "Uniform laundry for businesses",
    ],
    cta: "Schedule laundry services in Qatar",
    imageAlt: "Commercial laundry and linen service by Z M FAMILY in Qatar",
  },
  {
    n: "04",
    slug: "rent-a-car",
    href: "/services/rent-a-car",
    h3: "Rent a Car in Qatar",
    title: "Rent a Car",
    copy: "Daily and monthly vehicle rental with chauffeur-driven options for personal transport, corporate travel, and wedding car hire. Frequently booked alongside event catering for functions across Qatar.",
    points: [
      "Daily and monthly car rental",
      "Chauffeur-driven vehicles",
      "Wedding car hire",
      "Corporate and business transport",
      "Flexible rental durations",
    ],
    cta: "Explore rent a car options in Qatar",
    imageAlt: "Wedding and corporate car rental from Z M FAMILY in Qatar",
  },
  {
    n: "05",
    slug: "real-estate",
    href: "/services/real-estate",
    h3: "Real Estate Services in Qatar",
    title: "Real Estate",
    copy: "Residential and commercial property support for owners, tenants, and managers — practical coordination focused on Doha and wider Qatar. Can be paired with facility management for ongoing building upkeep.",
    points: [
      "Residential property support",
      "Commercial property support",
      "Coordination between owners, tenants, and managers",
      "Doha-focused property services",
      "Support for individual owners and portfolios",
    ],
    cta: "Discuss real estate services in Qatar",
    imageAlt: "Real estate coordination support by Z M FAMILY in Doha",
  },
  {
    n: "06",
    slug: "facility-management",
    href: "/services/facility-management",
    h3: "Facility Management in Qatar",
    title: "Facility Management",
    copy: "Building housekeeping, maintenance coordination, and recurring upkeep for commercial and residential properties in Qatar. Works alongside our cleaning division when buildings need both.",
    points: [
      "Building housekeeping",
      "Maintenance coordination",
      "Commercial facility upkeep",
      "Recurring service scheduling",
      "Coordinated handoff with the cleaning division",
    ],
    cta: "Talk to our facility management team",
    imageAlt: "Facility management and building upkeep by Z M FAMILY in Qatar",
  },
];

export const homeWhyItems = [
  {
    t: "One Point of Contact",
    d: "Catering, cleaning, laundry, rent a car, real estate, and facility management are coordinated through a single account contact — not six separate vendor relationships.",
  },
  {
    t: "Six Specialist Divisions",
    d: "Each division is staffed for its own work, but all operate under Z M FAMILY, so communication stays consistent across services.",
  },
  {
    t: "Transparent Pricing",
    d: "Quotes reflect the actual scope — event size, property type, or service frequency — so you know what's included before work starts.",
  },
  {
    t: "Flexible Scheduling",
    d: "Book a single job, set up a recurring contract, or arrange event-based services based on what you actually need.",
  },
  {
    t: "Direct Communication",
    d: "Enquiries go to our Qatar team by phone or WhatsApp — no call centres or ticketing queues.",
  },
  {
    t: "Cross-Service Coordination",
    d: "Related services — catering with car hire, or cleaning with facility management — can be arranged together under one company.",
  },
];

export const homeProcessSteps = [
  {
    t: "Consultation",
    d: "We start by understanding what you need: a single event, a recurring contract, or a one-time booking, and which divisions are involved.",
  },
  {
    t: "Planning / Quote",
    d: "We prepare a clear quote showing exactly what's included, based on the actual scope discussed.",
  },
  {
    t: "Service Delivery",
    d: "The relevant division carries out the work on the agreed schedule.",
  },
  {
    t: "Follow-Up",
    d: "We confirm the work met expectations and set up any recurring schedule or future booking you need.",
  },
];

export const homeFaqs = [
  {
    q: "What services does Z M FAMILY provide in Qatar?",
    a: "Z M FAMILY operates six divisions under one company: catering, cleaning, laundry, rent a car, real estate, and facility management. You deal with a single point of contact regardless of which service — or combination — you need.",
  },
  {
    q: "Can I book multiple services from one company?",
    a: "Yes. Many clients in Qatar combine services — catering with car hire for an event, or cleaning with facility management for a building — arranged through the same account contact at Z M FAMILY.",
  },
  {
    q: "Do you provide wedding and corporate catering?",
    a: "Yes. Our catering division covers private events such as weddings as well as corporate catering for meetings, office functions, and staff events across Qatar.",
  },
  {
    q: "Do you provide residential and commercial cleaning?",
    a: "Yes. Cleaning covers homes, offices, and commercial spaces — available as a one-time deep clean or on a recurring schedule built around your working hours.",
  },
  {
    q: "Does laundry include pickup and delivery?",
    a: "Yes. Laundry is built around pickup and delivery. Commercial clients with recurring linen or uniform needs can set up a standing collection schedule.",
  },
  {
    q: "Can I rent a car daily or monthly?",
    a: "Both options are available. Vehicles can be rented by the day or month for personal, corporate, or event use across Qatar.",
  },
  {
    q: "Do you offer chauffeur-driven car options?",
    a: "Yes. Chauffeur-driven vehicles are available for weddings, corporate transport, and clients who prefer not to drive themselves.",
  },
  {
    q: "What real estate services do you provide?",
    a: "Our real estate division supports residential and commercial property needs, connecting owners, tenants, and managers with practical on-the-ground coordination. Contact us to discuss your specific requirement.",
  },
  {
    q: "What does facility management include?",
    a: "Facility management covers building housekeeping and maintenance coordination for commercial and residential properties. It can be paired with cleaning for buildings that need both.",
  },
  {
    q: "Which areas of Qatar do you serve?",
    a: "Z M FAMILY is based in Doha and supports clients across Qatar. Availability depends on the specific service and location — contact us to confirm coverage for your area.",
  },
  {
    q: "How do I request a quote?",
    a: "Call +974 5121 5226, message us on WhatsApp, or use the contact form on this page. Tell us which service or combination you need and we will respond with a clear quote based on your scope.",
  },
  {
    q: "Do you provide recurring services for businesses?",
    a: "Yes. Cleaning, laundry, and facility management are commonly arranged as recurring contracts for offices, hospitality venues, and managed properties in Qatar.",
  },
];

export const homeMarqueeItems = [
  "Catering Services",
  "Cleaning Services",
  "Laundry Services",
  "Rent a Car",
  "Real Estate",
  "Facility Management",
  "Doha · Qatar",
];
