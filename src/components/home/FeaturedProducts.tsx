import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const popular = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          title="Loved by many"
          copy="The pieces our community returns to, chosen for ease, beauty, and everyday wear."
          action={<Button href="/products" variant="ghost">View all products</Button>}
        />
        <ProductGrid products={popular} />
      </div>
    </section>
  );
}
