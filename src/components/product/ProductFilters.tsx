"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/common/Badge";
import { EmptyState } from "@/components/common/EmptyState";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductSearch } from "@/components/product/ProductSearch";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import type { Product } from "@/types/product";

type SortMode = "featured" | "price-low" | "price-high" | "rating";

export function ProductFilters({
  products,
  initialCategory,
  initialBrand
}: {
  products: Product[];
  initialCategory?: string;
  initialBrand?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory ?? "all");
  const [brand, setBrand] = useState(initialBrand ?? "all");
  const [sort, setSort] = useState<SortMode>("featured");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products
      .filter((product) => {
        const matchesQuery =
          !normalizedQuery ||
          [product.name, product.id, product.brand, product.category, product.description]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);
        const matchesCategory = category === "all" || product.category.toLowerCase().replace(/\s+/g, "-") === category;
        const matchesBrand = brand === "all" || product.brand.toLowerCase().replace(/\s+/g, "-") === brand;
        return matchesQuery && matchesCategory && matchesBrand;
      })
      .sort((a, b) => {
        if (sort === "price-low") return (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price);
        if (sort === "price-high") return (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price);
        if (sort === "rating") return b.rating - a.rating;
        return Number(b.featured ?? false) - Number(a.featured ?? false);
      });
  }, [brand, category, products, query, sort]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-4xl border border-line bg-white p-4 shadow-soft lg:grid-cols-[1fr_190px_190px_190px]">
        <ProductSearch value={query} onChange={setQuery} />
        <select className="focus-ring h-12 rounded-2xl border border-line bg-bg px-4 text-sm font-semibold" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="all">All categories</option>
          {categories.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
        <select className="focus-ring h-12 rounded-2xl border border-line bg-bg px-4 text-sm font-semibold" value={brand} onChange={(event) => setBrand(event.target.value)}>
          <option value="all">All brands</option>
          {brands.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
        <select className="focus-ring h-12 rounded-2xl border border-line bg-bg px-4 text-sm font-semibold" value={sort} onChange={(event) => setSort(event.target.value as SortMode)}>
          <option value="featured">Featured first</option>
          <option value="price-low">Price low to high</option>
          <option value="price-high">Price high to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold">{filtered.length} products found</p>
        <Badge tone="primary">WhatsApp checkout ready</Badge>
      </div>
      {filtered.length ? (
        <ProductGrid products={filtered} />
      ) : (
        <EmptyState
          title="No products match"
          copy="Try a different search, brand, or category filter."
          actionLabel="Reset to catalogue"
          actionHref="/products"
        />
      )}
    </div>
  );
}
