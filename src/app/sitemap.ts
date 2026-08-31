import type { MetadataRoute } from "next";

import { allServiceGroups } from "@/lib/navigation";
import { siteUrl } from "@/lib/site-url";

const staticRoutes = [
  "",
  "/about",
  "/industries",
  "/locations",
  "/projects",
  "/blog",
  "/contact",
  "/services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const servicePages = allServiceGroups.flatMap((group) => [
    {
      url: `${siteUrl}${group.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...group.subServices.map((sub) => ({
      url: `${siteUrl}${sub.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]);

  return [...pages, ...servicePages];
}
