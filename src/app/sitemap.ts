import type { MetadataRoute } from "next";

import {
  getAllSitemapPaths,
  getSitemapChangeFrequency,
  getSitemapPriority,
  normalizeSitemapPath,
} from "@/lib/sitemap-routes";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return getAllSitemapPaths().map((route) => {
    const path = normalizeSitemapPath(route);
    const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

    return {
      url,
      lastModified,
      changeFrequency: getSitemapChangeFrequency(path),
      priority: getSitemapPriority(path),
    };
  });
}
