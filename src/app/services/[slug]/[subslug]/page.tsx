import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceLanding } from "@/components/site/ServiceLanding";
import { getAllSubServiceParams, getSubService } from "@/lib/navigation";

type Props = { params: Promise<{ slug: string; subslug: string }> };

export async function generateStaticParams() {
  return getAllSubServiceParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subslug } = await params;
  const result = getSubService(slug, subslug);
  if (!result) return { title: "Service Not Found" };

  const { service, subService } = result;
  return {
    title: `${subService.label} in Qatar | ${service.title} | Z M Family`,
    description: subService.description,
    openGraph: {
      title: `${subService.label} in Qatar | Z M Family`,
      description: subService.description,
    },
  };
}

export default async function SubServicePage({ params }: Props) {
  const { slug, subslug } = await params;
  const result = getSubService(slug, subslug);
  if (!result) notFound();

  const { service, subService } = result;

  return (
    <ServiceLanding
      title={subService.label}
      description={subService.description}
      icon={service.icon}
      parentHref={service.href}
      parentTitle={service.title}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title, href: service.href },
        { label: subService.label },
      ]}
    />
  );
}
