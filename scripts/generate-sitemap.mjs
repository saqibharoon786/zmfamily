/**
 * Generates sitemap.xml at the project root for review or manual upload.
 * The live site auto-serves the same URLs from src/app/sitemap.ts at /sitemap.xml
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const appDir = path.join(root, "src/app");
const navigationFile = path.join(root, "src/lib/navigation.ts");

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zmfamily.qa").replace(/\/+$/, "");

const SKIP_DIRS = new Set(["api"]);

function isDynamicSegment(name) {
  return name.startsWith("[") && name.endsWith("]");
}

function normalizeSitemapPath(route) {
  if (route === "" || route === "/") return "/";
  const withLeading = route.startsWith("/") ? route : `/${route}`;
  return withLeading.replace(/\/+$/, "") || "/";
}

function discoverStaticAppRoutes(dir = appDir, urlPath = "") {
  if (!fs.existsSync(dir)) return [];

  const routes = [];
  if (fs.existsSync(path.join(dir, "page.tsx"))) {
    routes.push(normalizeSitemapPath(urlPath));
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const { name } = entry;
    if (name.startsWith("_") || name.startsWith(".") || SKIP_DIRS.has(name)) continue;
    if (isDynamicSegment(name)) continue;

    const childPath = urlPath ? `${urlPath}/${name}` : `/${name}`;
    routes.push(...discoverStaticAppRoutes(path.join(dir, name), childPath));
  }

  return routes;
}

/** Read every `href: "/..."` from navigation.ts so new services auto-appear. */
function getNavigationRoutes() {
  const source = fs.readFileSync(navigationFile, "utf8");
  const hrefs = [...source.matchAll(/href:\s*"([^"]+)"/g)].map((match) =>
    normalizeSitemapPath(match[1]),
  );
  return hrefs;
}

function getPriority(route) {
  if (route === "/") return "1.0";
  if (route === "/services") return "0.9";
  const segments = route.split("/").filter(Boolean);
  if (segments[0] === "services" && segments.length === 2) return "0.8";
  if (segments[0] === "services" && segments.length >= 3) return "0.6";
  return "0.7";
}

function getChangeFreq(route) {
  const segments = route.split("/").filter(Boolean);
  if (segments[0] === "services" && segments.length >= 3) return "monthly";
  return "weekly";
}

const paths = [
  ...new Set([...discoverStaticAppRoutes(), ...getNavigationRoutes()].map(normalizeSitemapPath)),
].sort((a, b) => a.localeCompare(b));

const now = new Date().toISOString();

const body = paths
  .map((route) => {
    const loc = route === "/" ? siteUrl : `${siteUrl}${route}`;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${now}</lastmod>`,
      `    <changefreq>${getChangeFreq(route)}</changefreq>`,
      `    <priority>${getPriority(route)}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  body,
  "</urlset>",
  "",
].join("\n");

const outFile = path.join(root, "sitemap.xml");
fs.writeFileSync(outFile, xml, "utf8");

console.log(`Sitemap written: ${outFile}`);
console.log(`Total URLs: ${paths.length}`);
console.log(`Submit to Google Search Console: ${siteUrl}/sitemap.xml`);
