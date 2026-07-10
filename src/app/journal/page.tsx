import type { Metadata } from "next";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { articles } from "@/data/articles";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Journal | Indian Wear, Textiles and Style Guides",
  description: "Practical Love Loom guides to authentic Indian wear, handloom textiles, kurta styling, Indian fashion trends, and garment care.",
  keywords: ["Indian fashion journal", "authentic Indian wear", "handloom guide", "Hyderabad fashion", "Indian textile care"],
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Love Loom Journal | Indian Wear and Textile Guides",
    description: "Useful, source-aware guidance for choosing, styling, and caring for Indian clothing.",
    url: "/journal",
    type: "website",
    images: [{ url: "/editorial/boutique-linen-rail.png", alt: "Love Loom handcrafted clothing journal" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Loom Journal",
    description: "Indian wear, textile, styling, and care guides from Hyderabad.",
    images: ["/editorial/boutique-linen-rail.png"]
  }
};

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Journal", path: "/journal" }])} />
      <section className="section-pad page-top-pad">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal" }]} />
          <div className="mb-10 max-w-4xl">
            <h1 className="font-display text-5xl font-semibold leading-[0.96] md:text-7xl [text-wrap:balance]">The Love Loom journal</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Practical notes on authentic Indian wear, textile knowledge, thoughtful styling, and caring for clothes in Hyderabad.
            </p>
          </div>
          <ArticleCard article={featured} feature />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
          <p className="mt-10 text-sm leading-6 text-muted">
            Love Loom publishes editorial guidance for shoppers. Certification, material, and care claims for individual products should always be confirmed on the product page or with our store team.
          </p>
        </div>
      </section>
    </>
  );
}
