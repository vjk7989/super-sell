import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CartProvider } from "@/context/CartContext";
import { siteConfig } from "@/config/site";
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
  metadataBase: new URL(siteConfig.websiteUrl),
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: "Thoughtfully chosen fashion and timeless pieces, with personal ordering through WhatsApp.",
    images: [{ url: "/opengraph-image.png", width: 1904, height: 826, alt: "Love Loom logo" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
