import { BrandCard } from "@/components/common/BrandCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { brands } from "@/data/brands";
import { products } from "@/data/products";

const brandLayout = [
  { id: "brand-urban-loom", variant: "portrait" as const, className: "lg:col-span-5 lg:row-span-2" },
  { id: "brand-mira-mode", variant: "landscape" as const, className: "lg:col-span-7" },
  { id: "brand-kosha-studio", variant: "landscape" as const, className: "lg:col-span-7" },
  { id: "brand-atelier-nine", variant: "compact" as const, className: "lg:col-span-4" },
  { id: "brand-denim-co", variant: "compact" as const, className: "lg:col-span-4" },
  { id: "brand-northstep", variant: "compact" as const, className: "lg:col-span-4" }
];

export function FeaturedBrands() {
  return (
    <section className="section-pad border-y border-line bg-surface">
      <div className="container-shell">
        <SectionHeading title="Shop by brand" copy="A considered mix of labels, each with its own way of making everyday style special." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[260px_260px_300px]">
          {brandLayout.map((layout) => {
            const brand = brands.find((item) => item.id === layout.id);
            if (!brand) return null;
            return (
              <div key={brand.id} className={layout.className}>
                <BrandCard brand={brand} products={products} variant={layout.variant} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
