import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";

import { Nav } from "@/components/site/Nav";
import { homeSeo } from "@/lib/homepage-content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display-next",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: homeSeo.title,
    template: "%s | Z M FAMILY",
  },
  description: homeSeo.description,
  authors: [{ name: "Z M FAMILY" }],
  openGraph: {
    title: homeSeo.ogTitle,
    description: homeSeo.ogDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.ogTitle,
    description: homeSeo.ogDescription,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "BDc88XzkcTG1QbP5155iKjF3CCTZIMsDOp_f3XECRjE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
