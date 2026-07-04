import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";
import { SimilarProducts } from "@/components/product/SimilarProducts";
import { siteConfig } from "@/config/site";
import { getProductById, getSimilarProducts, products } from "@/data/products";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: `${formatPrice(product.discountPrice ?? product.price)} - ${product.description}`,
      images: [product.images[0]],
      url: `/products/${product.id}`
    }
  };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  const similar = getSimilarProducts(product);

  return (
    <section className="section-pad page-top-pad">
      <div className="container-shell">
        <ProductDetailClient product={product} />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="rounded-4xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-display text-2xl font-bold">Details</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {product.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-4xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-display text-2xl font-bold">Material</h2>
            <p className="mt-4 text-muted">{product.material ?? "Premium mixed materials"}</p>
          </div>
          <div className="rounded-4xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-display text-2xl font-bold">Care</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {(product.careInstructions ?? ["Handle with care"]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <SimilarProducts products={similar} />
      </div>
    </section>
  );
}
