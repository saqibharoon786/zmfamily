import fs from "node:fs";
import path from "node:path";

import { allServiceGroups, mainNavLinks } from "@/lib/navigation";

const APP_DIR = path.join(process.cwd(), "src/app");

const SKIP_DIRS = new Set(["api"]);

function isDynamicSegment(name: string): boolean {
  return name.startsWith("[") && name.endsWith("]");
}

/** Normalize to a path like `/about` or `/` for the homepage. */
export function normalizeSitemapPath(route: string): string {
  if (route === "" || route === "/") return "/";
  const withLeading = route.startsWith("/") ? route : `/${route}`;
  return withLeading.replace(/\/+$/, "") || "/";
}

/**
 * Walks `src/app` and collects every static `page.tsx` route.
 * Dynamic folders such as `[slug]` are skipped — those URLs come from navigation data.
 */
export function discoverStaticAppRoutes(appDir = APP_DIR, urlPath = ""): string[] {
  if (!fs.existsSync(appDir)) return [];

  const routes: string[] = [];

  if (fs.existsSync(path.join(appDir, "page.tsx"))) {
    routes.push(normalizeSitemapPath(urlPath));
  }

  for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const { name } = entry;
    if (name.startsWith("_") || name.startsWith(".") || SKIP_DIRS.has(name)) continue;
    if (isDynamicSegment(name)) continue;

    const childPath = urlPath ? `${urlPath}/${name}` : `/${name}`;
    routes.push(...discoverStaticAppRoutes(path.join(appDir, name), childPath));
  }

  return routes;
}

/** All hrefs declared in navigation (main links + every service and sub-service). */
export function getNavigationRoutes(): string[] {
  const routes = mainNavLinks.map((link) => normalizeSitemapPath(link.href));

  for (const group of allServiceGroups) {
    routes.push(normalizeSitemapPath(group.href));
    for (const sub of group.subServices) {
      routes.push(normalizeSitemapPath(sub.href));
    }
  }

  return routes;
}

/** Combined, deduplicated list of every indexable URL on the site. */
export function getAllSitemapPaths(): string[] {
  const combined = [...discoverStaticAppRoutes(), ...getNavigationRoutes()];
  return [...new Set(combined.map(normalizeSitemapPath))].sort((a, b) => a.localeCompare(b));
}

export function getSitemapPriority(route: string): number {
  const path = normalizeSitemapPath(route);
  if (path === "/") return 1;
  if (path === "/services") return 0.9;

  const segments = path.split("/").filter(Boolean);
  if (segments[0] === "services" && segments.length === 2) return 0.8;
  if (segments[0] === "services" && segments.length >= 3) return 0.6;

  return 0.7;
}

export function getSitemapChangeFrequency(
  route: string,
): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" {
  const path = normalizeSitemapPath(route);
  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "services" && segments.length >= 3) return "monthly";
  if (path === "/blog") return "weekly";

  return "weekly";
}
