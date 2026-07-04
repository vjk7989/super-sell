import { BrandCard } from "@/components/common/BrandCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { brands } from "@/data/brands";
import { products } from "@/data/products";

export function FeaturedBrands() {
  return (
    <section className="section-pad border-y border-line bg-panel/55">
      <div className="container-shell">
        <SectionHeading title="Brands with a point of view" copy="Each label has a clear lane, from refined staples to occasion pieces." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} products={products} />
          ))}
        </div>
      </div>
    </section>
  );
}
