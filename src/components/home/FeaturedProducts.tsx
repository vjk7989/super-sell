import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featured = products.filter((product) => product.featured).slice(0, 8);
  const popular = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <>
      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            title="Latest catalogue picks"
            copy="Featured products with clear pricing, stock, ratings, and quick actions."
            action={<Button href="/products" variant="ghost">View all products</Button>}
          />
          <ProductGrid products={featured} />
        </div>
      </section>
      <section className="section-pad border-t border-line bg-panel/45">
        <div className="container-shell">
          <SectionHeading title="Popular products" copy="High-rated pieces shoppers come back to first." />
          <ProductGrid products={popular} />
        </div>
      </section>
    </>
  );
}
