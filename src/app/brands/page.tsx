import type { Metadata } from "next";
import { BrandCard } from "@/components/common/BrandCard";
import { brands } from "@/data/brands";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Brands",
  description: "Browse curated fashion and Indian-wear brands available at Love Loom in Hyderabad.",
  alternates: { canonical: "/brands" },
  openGraph: { url: "/brands", title: "Fashion Brands at Love Loom", description: "Explore curated labels for everyday style, Indian wear, occasion dressing, and accessories." }
};

export default function BrandsPage() {
  return (
    <section className="section-pad page-top-pad">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <h1 className="font-display text-5xl font-bold md:text-7xl [text-wrap:balance]">Brands</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Each brand card links to a filtered catalogue view, so shoppers can browse by label.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <div key={brand.id} className={index === 2 || index === 5 ? "lg:col-span-2" : ""}>
              <BrandCard brand={brand} products={products} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
