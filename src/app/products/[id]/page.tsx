import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";
import { SimilarProducts } from "@/components/product/SimilarProducts";
import { siteConfig } from "@/config/site";
import { getProductById, getSimilarProducts, products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

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
    keywords: [...product.tags, product.brand, product.category, "Love Loom Hyderabad"],
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: `${formatPrice(product.discountPrice ?? product.price)} - ${product.description}`,
      images: [product.images[0]],
      url: `/products/${product.id}`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
      images: [product.images[0]]
    }
  };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  const similar = getSimilarProducts(product);
  const path = `/products/${product.id}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map(absoluteUrl),
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    category: product.category,
    material: product.material,
    color: product.colors?.join(", "),
    size: product.sizes,
    offers: {
      "@type": "Offer",
      url: absoluteUrl(path),
      priceCurrency: "INR",
      price: product.discountPrice ?? product.price,
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": `${siteConfig.websiteUrl}/#organization`
      }
    }
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.name, path }
      ])} />
      <section className="section-pad page-top-pad">
        <div className="container-shell">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]} />
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
    </>
  );
}
