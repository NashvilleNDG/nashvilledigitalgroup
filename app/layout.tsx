import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollRevealInit } from "@/components/ui/scroll-reveal";
import { LiveChat } from "@/components/ui/live-chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nashvilledigitalgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nashville Digital Group",
    template: "%s | Nashville Digital Group",
  },
  description:
    "AI-powered digital marketing agency in Nashville, TN. 500+ businesses transformed. Free strategy consultation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nashville Digital Group",
    title: "Nashville Digital Group",
    description:
      "AI-powered digital marketing agency in Nashville, TN. 500+ businesses transformed. Free strategy consultation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashville Digital Group",
    description:
      "AI-powered digital marketing agency in Nashville, TN. 500+ businesses transformed. Free strategy consultation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nashville Digital Group",
    "url": siteUrl,
    "logo": `${siteUrl}/ndg-logo.png`,
    "foundingDate": "2020",
    "description": "AI-powered digital marketing agency in Nashville, TN. SEO, web development, AI chatbots, social media, and app development.",
    "telephone": "+16152000170",
    "email": "office@nashvilledigitalgroup.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nashville",
      "addressRegion": "TN",
      "addressCountry": "US"
    },
    "areaServed": ["Nashville, TN", "Brentwood, TN", "Franklin, TN", "Middle Tennessee"],
    "sameAs": [
      "https://www.facebook.com/nashvilledigitalgroup",
      "https://www.instagram.com/nashvilledigitalgroup",
      "https://www.youtube.com/@nashvilledigitalgroup",
      "https://www.tiktok.com/@nashvilledigitalgroup",
      "https://www.pinterest.com/nashvilledigitalgroup"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteUrl,
    "name": "Nashville Digital Group",
    "image": `${siteUrl}/ndg-logo.png`,
    "url": siteUrl,
    "telephone": "+16152000170",
    "email": "office@nashvilledigitalgroup.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nashville",
      "addressRegion": "TN",
      "postalCode": "37201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1627,
      "longitude": -86.7816
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "servedCuisine": null,
    "hasMap": "https://maps.google.com/?q=Nashville+Digital+Group+Nashville+TN"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Organization schema — site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        {/*
          ── Google Analytics 4 ──────────────────────────────────────────────
          Replace GA_MEASUREMENT_ID with your GA4 Measurement ID (G-XXXXXXXXXX)
          from Google Analytics → Admin → Data Streams → Web Stream Details
        */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}</Script>

        {/*
          ── Meta (Facebook) Pixel ───────────────────────────────────────────
          Replace FACEBOOK_PIXEL_ID with your Pixel ID from
          Meta Business Suite → Events Manager → Pixels
        */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
          n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
          s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','FACEBOOK_PIXEL_ID');
          fbq('track','PageView');
        `}</Script>

        <CustomCursor />
        <ScrollRevealInit />
        <LiveChat />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
