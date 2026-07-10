import { CategoryCard } from "@/components/common/CategoryCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const categoryLayout = [
  { id: "cat-shirts", variant: "feature" as const, className: "lg:col-span-7 lg:row-span-2" },
  { id: "cat-tshirts", variant: "landscape" as const, className: "lg:col-span-5" },
  { id: "cat-jeans", variant: "landscape" as const, className: "lg:col-span-5" },
  { id: "cat-dresses", variant: "compact" as const, className: "lg:col-span-4" },
  { id: "cat-ethnic", variant: "compact" as const, className: "lg:col-span-4" },
  { id: "cat-footwear", variant: "compact" as const, className: "lg:col-span-4" }
];

export function FeaturedCategories() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading title="Shop by category" copy="Find the pieces that feel most like you." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[260px_260px_300px]">
          {categoryLayout.map((layout) => {
            const category = categories.find((item) => item.id === layout.id);
            if (!category) return null;
            return (
              <div key={category.id} className={layout.className}>
                <CategoryCard category={category} products={products} variant={layout.variant} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
