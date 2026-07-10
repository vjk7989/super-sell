"use client";

import { motion } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { ShareButton } from "@/components/common/ShareButton";
import { RatingStars } from "@/components/product/RatingStars";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/format";
import { trackEvent } from "@/lib/analytics";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const price = product.discountPrice ?? product.price;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-line bg-bg shadow-soft"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-panel">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3">
            <div className="flex flex-wrap gap-2">
              {product.discountPrice ? (
                <Badge tone="accent" className="bg-bg/90 shadow-soft backdrop-blur-sm">
                  Save {formatPrice(product.price - product.discountPrice)}
                </Badge>
              ) : null}
              <Badge tone="neutral" className="bg-bg/88 shadow-soft backdrop-blur-sm">
                {product.category}
              </Badge>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-bold shadow-soft backdrop-blur-sm ${product.inStock ? "bg-bg/88 text-primary" : "bg-danger text-white"}`}>
              {product.inStock ? "In stock" : "Sold out"}
            </span>
          </div>
          {!product.inStock ? (
            <div className="absolute inset-0 grid place-items-center bg-ink/62 text-lg font-bold text-white">
              Out of Stock
            </div>
          ) : null}
        </div>
      </Link>

      <div className="space-y-3.5 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 text-xs font-bold text-muted">
          <span className="truncate">{product.brand}</span>
          <span className="shrink-0">{product.id}</span>
        </div>
        <div className="space-y-2">
          <Link href={`/products/${product.id}`} className="line-clamp-2 font-display text-[1.45rem] font-semibold leading-[1.05] text-ink transition hover:text-primary">
            {product.name}
          </Link>
          <p className="line-clamp-2 text-sm leading-6 text-muted">{product.description}</p>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <strong className="text-xl text-ink">{formatPrice(price)}</strong>
            {product.discountPrice ? <span className="text-sm text-muted line-through">{formatPrice(product.price)}</span> : null}
          </div>
        </div>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        <div className="flex items-center gap-2 pt-1">
          <Button
            type="button"
            disabled={!product.inStock}
            onClick={() => {
              addToCart(product);
              trackEvent("add_to_cart", {
                currency: "INR",
                value: price,
                item_id: product.id,
                item_name: product.name
              });
            }}
            className="min-w-0 flex-1 px-4"
          >
            <ShoppingBag aria-hidden="true" className="size-4" />
            Add
          </Button>
          <Button href={`/products/${product.id}`} variant="ghost" className="min-h-10 w-10 rounded-full px-0 py-0" aria-label={`View ${product.name}`}>
            <Eye aria-hidden="true" className="size-4" />
          </Button>
          <ShareButton product={product} compact />
        </div>
      </div>
    </motion.article>
  );
}
