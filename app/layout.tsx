import type { Metadata } from "next";
import { Syne, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: "Reliable Electric of NYC | Staten Island Electrician",
  description:
    "Reliable Electric of NYC — full-service electrical contracting in Staten Island. Residential, commercial, industrial. Panel replacement, outlet repair, outdoor wiring, pool & hot tub wiring, service upgrades. Open 24/7. Call (718) 227-2008.",
  keywords: [
    "electrician Staten Island",
    "electrical contractor NYC",
    "panel replacement Staten Island",
    "outlet repair NYC",
    "outdoor wiring pool hot tub",
    "service upgrade Staten Island",
    "commercial electrician NYC",
    "emergency electrician 24/7",
  ],
  openGraph: {
    title: "Reliable Electric of NYC | Staten Island Electrician",
    description:
      "Full-service electrical contracting. Residential, commercial, industrial. Open 24/7. Call (718) 227-2008.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Electric of NYC",
    description:
      "Full-service electrical contractor in Staten Island, NY. Open 24/7. Call (718) 227-2008.",
  },
  alternates: {
    canonical: "https://reliableelectricofnyc.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalBusiness",
  name: "Reliable Electric of NYC, Inc.",
  description:
    "Full-service electrical contracting company serving Staten Island and all of NYC. Residential, commercial, industrial. Open 24/7.",
  url: "https://reliableelectricofnyc.com",
  telephone: "+17182272008",
  email: "Rob@reliableelectricofnyc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "690 Gulf Avenue",
    addressLocality: "Staten Island",
    addressRegion: "NY",
    postalCode: "10314",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Staten Island", addressRegion: "NY" },
    { "@type": "City", name: "Brooklyn", addressRegion: "NY" },
    { "@type": "City", name: "Manhattan", addressRegion: "NY" },
    { "@type": "City", name: "Queens", addressRegion: "NY" },
    { "@type": "City", name: "Bronx", addressRegion: "NY" },
  ],
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "22",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://reliableelectricofnyc.com" />
      </head>
      <body
        className={`${syne.variable} ${source.variable} min-h-screen flex flex-col antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
