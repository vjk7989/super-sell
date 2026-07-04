import { siteConfig } from "@/config/site";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";

export async function shareProduct(product: Product): Promise<void> {
  const productUrl = `${siteConfig.websiteUrl}/products/${product.id}`;
  const text = `${product.name} - ${formatPrice(product.discountPrice ?? product.price)}`;
  const nav = typeof navigator !== "undefined" ? navigator : undefined;

  if (!nav) {
    return;
  }

  if ("share" in nav && typeof nav.share === "function") {
    await nav.share({
      title: `${product.name} | ${siteConfig.name}`,
      text,
      url: productUrl
    });
    return;
  }

  if ("clipboard" in nav && nav.clipboard) {
    await nav.clipboard.writeText(productUrl);
  }
}
