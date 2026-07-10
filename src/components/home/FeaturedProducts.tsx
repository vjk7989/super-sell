import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

type ProductEdit = "new-arrivals" | "loved";

const productEditContent: Record<ProductEdit, { title: string; copy: string; actionLabel: string; href: string }> = {
  "new-arrivals": {
    title: "New arrivals",
    copy: "Freshly added silhouettes for workdays, weekend plans, and soft festive dressing.",
    actionLabel: "Shop new arrivals",
    href: "/products"
  },
  loved: {
    title: "Loved by many",
    copy: "The pieces our community returns to, chosen for ease, beauty, and everyday wear.",
    actionLabel: "View all products",
    href: "/products"
  }
};

function productNumber(product: Product) {
  return Number(product.id.replace(/\D/g, "")) || 0;
}

function selectProducts(edit: ProductEdit, limit: number) {
  if (edit === "new-arrivals") {
    return [...products]
      .sort((a, b) => productNumber(b) - productNumber(a))
      .slice(0, limit);
  }

  return [...products]
    .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
    .slice(0, limit);
}

export function FeaturedProducts({ edit = "loved", limit = 4 }: { edit?: ProductEdit; limit?: number }) {
  const content = productEditContent[edit];
  const featuredProducts = selectProducts(edit, limit);

  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          title={content.title}
          copy={content.copy}
          action={<Button href={content.href} variant="ghost">{content.actionLabel}</Button>}
        />
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
}
