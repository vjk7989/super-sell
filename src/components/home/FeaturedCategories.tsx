import { CategoryCard } from "@/components/common/CategoryCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export function FeaturedCategories() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading title="Shop by category" copy="Find the pieces that feel most like you." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category, index) => (
            <div key={category.id} className={index === 0 || index === 4 ? "lg:col-span-2" : ""}>
              <CategoryCard category={category} products={products} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
