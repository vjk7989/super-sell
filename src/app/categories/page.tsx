import type { Metadata } from "next";
import { CategoryCard } from "@/components/common/CategoryCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse Love Loom clothing, authentic-wear-inspired pieces, dresses, shirts, denim, footwear, and accessories.",
  alternates: { canonical: "/categories" },
  openGraph: { url: "/categories", title: "Shop Love Loom by Category", description: "Explore clothing, Indian wear, dresses, shirts, footwear, and accessories." }
};

export default function CategoriesPage() {
  return (
    <section className="section-pad page-top-pad">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <h1 className="font-display text-5xl font-bold md:text-7xl [text-wrap:balance]">Categories</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Explore shirts, denim, dresses, ethnicwear, footwear, and accessories with quick filtered links.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div key={category.id} className={index === 0 || index === 3 ? "lg:col-span-2" : ""}>
              <CategoryCard category={category} products={products} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
