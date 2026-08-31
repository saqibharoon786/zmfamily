import { homeFaqs, homeServices } from "@/lib/homepage-content";
import { siteContact } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-url";

export function HomeJsonLd() {
  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: siteContact.address.display,
    addressCountry: "QA",
  };

  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Z M FAMILY",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      email: siteContact.email.display,
      telephone: siteContact.phone.display,
      address: postalAddress,
      areaServed: {
        "@type": "Country",
        name: "Qatar",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Z M FAMILY",
      description:
        "Integrated services company in Qatar offering catering, cleaning, laundry, rent a car, real estate, and facility management.",
      url: siteUrl,
      telephone: siteContact.phone.display,
      email: siteContact.email.display,
      address: postalAddress,
      areaServed: "Qatar",
      parentOrganization: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Z M FAMILY",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    ...homeServices.map((service) => ({
      "@type": "Service",
      name: service.h3,
      url: `${siteUrl}${service.href}`,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "Qatar",
      },
    })),
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
