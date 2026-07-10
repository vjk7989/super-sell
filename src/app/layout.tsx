import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { CartProvider } from "@/context/CartContext";
import { siteConfig } from "@/config/site";
import { businessSchema } from "@/lib/seo";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"]
});

const bodyFont = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: "Discover thoughtfully chosen fashion, handcrafted details, and timeless pieces from Love Loom.",
  keywords: [
    "Love Loom Hyderabad",
    "authentic Indian wear",
    "handcrafted clothing Hyderabad",
    "linen clothing India",
    "Banjara Hills fashion store"
  ],
  metadataBase: new URL(siteConfig.websiteUrl),
  alternates: { canonical: "/" },
  authors: [{ name: "Love Loom Editorial Team", url: "/about" }],
  creator: "Love Loom",
  publisher: "Love Loom",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: "Thoughtfully chosen fashion and timeless pieces, with personal ordering through WhatsApp.",
    images: [{ url: "/opengraph-image.png", width: 1904, height: 826, alt: "Love Loom logo" }],
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: "Thoughtfully chosen fashion and timeless pieces from Hyderabad.",
    images: ["/opengraph-image.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <JsonLd data={businessSchema} />
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
