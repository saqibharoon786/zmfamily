import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceLanding } from "@/components/site/ServiceLanding";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} Services in Qatar | Z M Family`,
    description: service.description,
    openGraph: {
      title: `${service.title} Services in Qatar | Z M Family`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <ServiceLanding
      title={service.title}
      description={service.description}
      icon={service.icon}
      subServices={service.subServices}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title },
      ]}
    />
  );
}
