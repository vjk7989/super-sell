import { BrandCard } from "@/components/common/BrandCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { brands } from "@/data/brands";
import { products } from "@/data/products";

export function FeaturedBrands() {
  return (
    <section className="section-pad border-y border-line bg-surface">
      <div className="container-shell">
        <SectionHeading title="Shop by brand" copy="A considered mix of labels, each with its own way of making everyday style special." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <div key={brand.id} className={index === 2 || index === 3 ? "lg:col-span-2" : ""}>
              <BrandCard brand={brand} products={products} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
