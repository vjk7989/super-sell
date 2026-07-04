import { CategoryCard } from "@/components/common/CategoryCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export function FeaturedCategories() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading title="Shop by category" copy="Move from inspiration to filtered catalogue in one tap." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.id} category={category} products={products} />
          ))}
        </div>
      </div>
    </section>
  );
}

