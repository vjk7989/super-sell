import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/types/product";

export function SimilarProducts({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <section className="section-pad">
      <SectionHeading
        title="Similar styles worth opening"
        copy="Selected from matching categories, brands, and product tags."
      />
      <ProductGrid products={products} />
    </section>
  );
}

