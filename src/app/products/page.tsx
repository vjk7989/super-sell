import type { Metadata } from "next";
import { ProductFilters } from "@/components/product/ProductFilters";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Love Loom clothing, Indian wear, dresses, shirts, denim, footwear, and accessories by category, brand, price, and availability.",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products", title: "Love Loom Product Catalogue", description: "Browse thoughtfully selected fashion with clear prices, materials, sizing, care, and availability." }
};

export default async function ProductsPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string; brand?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  return (
    <section className="section-pad page-top-pad">
      <div className="container-shell">
        <div className="mb-8 grid gap-5 rounded-4xl border border-line bg-white p-6 shadow-soft md:grid-cols-[1fr_auto] md:items-end md:p-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-bold md:text-7xl [text-wrap:balance]">
              Product catalogue
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Search by name, brand, product ID, or category, then add in-stock products to your WhatsApp-ready cart.
            </p>
          </div>
          <div className="rounded-3xl bg-panel p-5">
            <p className="font-display text-4xl font-bold">{products.length}</p>
            <p className="mt-1 text-sm font-bold text-muted">items ready to browse</p>
          </div>
        </div>
        <ProductFilters
          products={products}
          initialCategory={resolvedSearchParams.category}
          initialBrand={resolvedSearchParams.brand}
        />
      </div>
    </section>
  );
}
