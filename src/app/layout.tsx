import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SmoothScroll from "@/components/SmoothScroll";
import Intro from "@/components/Intro";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Boutique Resort & Cottages in Vattavada`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Vattavada resort",
    "rooms in Vattavada",
    "cottages Vattavada",
    "honeymoon cottage Vattavada",
    "Vattavada boutique resort",
    "valley view rooms Kerala",
    site.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Boutique Resort & Cottages in Vattavada`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Boutique Resort & Cottages in Vattavada`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f6f4",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: site.name,
  legalName: site.legalName,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  telephone: site.phoneDisplay,
  email: site.email,
  priceRange: "₹3,499 – ₹6,999",
  checkinTime: "13:00",
  checkoutTime: "11:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  sameAs: [site.gbpUrl],
  amenityFeature: [
    "Free Wi-Fi",
    "Free parking",
    "In-house dining",
    "24x7 hot water",
    "Valley view balconies",
    "Bonfire evenings",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="min-h-svh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cloud focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lift"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Intro />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
