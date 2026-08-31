import type { LucideIcon } from "lucide-react";
import { Building2, Car, ChefHat, Shirt, Sparkles, Wrench } from "lucide-react";

export type SubService = {
  label: string;
  slug: string;
  href: string;
  description: string;
};

export type ServiceGroup = {
  title: string;
  slug: string;
  href: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
};

export type NavColumn = {
  heading: string;
  groups: ServiceGroup[];
};

export const businessServicesColumn: NavColumn = {
  heading: "Business Services",
  groups: [
    {
      title: "Catering",
      slug: "catering",
      href: "/services/catering",
      description: "Premium corporate, event and wedding catering across Qatar.",
      icon: ChefHat,
      subServices: [
        {
          label: "Corporate Catering",
          slug: "corporate-catering",
          href: "/services/catering/corporate-catering",
          description: "Executive dining, boardroom lunches and corporate hospitality.",
        },
        {
          label: "Event Catering",
          slug: "event-catering",
          href: "/services/catering/event-catering",
          description: "Galas, launches and large-scale event food service.",
        },
        {
          label: "Wedding Catering",
          slug: "wedding-catering",
          href: "/services/catering/wedding-catering",
          description: "Elegant wedding menus with full service staff.",
        },
        {
          label: "Office Catering",
          slug: "office-catering",
          href: "/services/catering/office-catering",
          description: "Daily office meals, breakfast spreads and team catering.",
        },
      ],
    },
    {
      title: "Cleaning",
      slug: "cleaning",
      href: "/services/cleaning",
      description: "Commercial, office and deep cleaning for Qatar businesses.",
      icon: Sparkles,
      subServices: [
        {
          label: "Commercial Cleaning",
          slug: "commercial-cleaning",
          href: "/services/cleaning/commercial-cleaning",
          description: "Retail, warehouse and commercial facility cleaning.",
        },
        {
          label: "Office Cleaning",
          slug: "office-cleaning",
          href: "/services/cleaning/office-cleaning",
          description: "Daily and scheduled office cleaning programmes.",
        },
        {
          label: "Villa Cleaning",
          slug: "villa-cleaning",
          href: "/services/cleaning/villa-cleaning",
          description: "Residential villa cleaning with premium care.",
        },
        {
          label: "Deep Cleaning",
          slug: "deep-cleaning",
          href: "/services/cleaning/deep-cleaning",
          description: "Intensive sanitisation and move-in/move-out cleaning.",
        },
      ],
    },
    {
      title: "Laundry",
      slug: "laundry",
      href: "/services/laundry",
      description: "Commercial laundry, dry cleaning and hotel linen services.",
      icon: Shirt,
      subServices: [
        {
          label: "Commercial Laundry",
          slug: "commercial-laundry",
          href: "/services/laundry/commercial-laundry",
          description: "High-volume laundry for businesses and institutions.",
        },
        {
          label: "Dry Cleaning",
          slug: "dry-cleaning",
          href: "/services/laundry/dry-cleaning",
          description: "Premium garment care and delicate fabric handling.",
        },
        {
          label: "Laundry Pickup & Delivery",
          slug: "laundry-pickup-delivery",
          href: "/services/laundry/laundry-pickup-delivery",
          description: "Scheduled collection and delivery across Qatar.",
        },
        {
          label: "Hotel Laundry",
          slug: "hotel-laundry",
          href: "/services/laundry/hotel-laundry",
          description: "Hotel linen processing with fast turnaround.",
        },
      ],
    },
  ],
};

export const propertyMobilityColumn: NavColumn = {
  heading: "Property & Mobility",
  groups: [
    {
      title: "Real Estate",
      slug: "real-estate",
      href: "/services/real-estate",
      description: "Property management, sales and rentals in Qatar.",
      icon: Building2,
      subServices: [
        {
          label: "Property Management",
          slug: "property-management",
          href: "/services/real-estate/property-management",
          description: "End-to-end landlord and tenant management.",
        },
        {
          label: "Residential Properties",
          slug: "residential-properties",
          href: "/services/real-estate/residential-properties",
          description: "Apartments, villas and family homes.",
        },
        {
          label: "Commercial Properties",
          slug: "commercial-properties",
          href: "/services/real-estate/commercial-properties",
          description: "Offices, retail units and commercial spaces.",
        },
        {
          label: "Property Rental",
          slug: "property-rental",
          href: "/services/real-estate/property-rental",
          description: "Short and long-term rental solutions.",
        },
      ],
    },
    {
      title: "Facility Management",
      slug: "facility-management",
      href: "/services/facility-management",
      description: "Building maintenance, MEP and integrated FM services.",
      icon: Wrench,
      subServices: [
        {
          label: "Building Maintenance",
          slug: "building-maintenance",
          href: "/services/facility-management/building-maintenance",
          description: "Preventive and reactive building upkeep.",
        },
        {
          label: "HVAC Maintenance",
          slug: "hvac-maintenance",
          href: "/services/facility-management/hvac-maintenance",
          description: "Air conditioning service and climate control.",
        },
        {
          label: "MEP Services",
          slug: "mep-services",
          href: "/services/facility-management/mep-services",
          description: "Mechanical, electrical and plumbing support.",
        },
        {
          label: "Property Maintenance",
          slug: "property-maintenance",
          href: "/services/facility-management/property-maintenance",
          description: "Comprehensive property care programmes.",
        },
      ],
    },
    {
      title: "Rent a Car",
      slug: "rent-a-car",
      href: "/services/rent-a-car",
      description: "Daily, monthly and luxury car rental in Qatar.",
      icon: Car,
      subServices: [
        {
          label: "Daily Car Rental",
          slug: "daily-car-rental",
          href: "/services/rent-a-car/daily-car-rental",
          description: "Flexible daily hire for business and leisure.",
        },
        {
          label: "Monthly Car Rental",
          slug: "monthly-car-rental",
          href: "/services/rent-a-car/monthly-car-rental",
          description: "Long-term corporate and personal leasing.",
        },
        {
          label: "Luxury Car Rental",
          slug: "luxury-car-rental",
          href: "/services/rent-a-car/luxury-car-rental",
          description: "Premium vehicles for executive travel.",
        },
        {
          label: "SUV Rental",
          slug: "suv-rental",
          href: "/services/rent-a-car/suv-rental",
          description: "Spacious SUVs for families and groups.",
        },
      ],
    },
  ],
};

export const allServiceGroups: ServiceGroup[] = [
  ...businessServicesColumn.groups,
  ...propertyMobilityColumn.groups,
];

export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export function getServiceBySlug(slug: string): ServiceGroup | undefined {
  return allServiceGroups.find((s) => s.slug === slug);
}

export function getSubService(
  serviceSlug: string,
  subSlug: string,
): { service: ServiceGroup; subService: SubService } | undefined {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return undefined;
  const subService = service.subServices.find((s) => s.slug === subSlug);
  if (!subService) return undefined;
  return { service, subService };
}

export function getAllServiceSlugs(): string[] {
  return allServiceGroups.map((s) => s.slug);
}

export function getAllSubServiceParams(): { slug: string; subslug: string }[] {
  return allServiceGroups.flatMap((service) =>
    service.subServices.map((sub) => ({
      slug: service.slug,
      subslug: sub.slug,
    })),
  );
}
