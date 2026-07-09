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
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const price = product.discountPrice ?? product.price;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-4xl border border-line bg-bg shadow-soft"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-panel">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {product.discountPrice ? <Badge tone="accent">Save {formatPrice(product.price - product.discountPrice)}</Badge> : null}
            <Badge tone="neutral">{product.category}</Badge>
          </div>
          {!product.inStock ? (
            <div className="absolute inset-0 grid place-items-center bg-ink/62 text-lg font-bold text-white">
              Out of Stock
            </div>
          ) : null}
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge>{product.brand}</Badge>
          <span className="text-xs font-semibold text-muted">{product.id}</span>
        </div>
        <div>
          <Link href={`/products/${product.id}`} className="font-display text-2xl font-semibold leading-tight text-ink transition hover:text-primary">
            {product.name}
          </Link>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted">{product.description}</p>
        </div>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-muted">Price</p>
            <div className="flex items-center gap-2">
              <strong className="text-lg">{formatPrice(price)}</strong>
              {product.discountPrice ? <span className="text-sm text-muted line-through">{formatPrice(product.price)}</span> : null}
            </div>
          </div>
          <Badge tone={product.inStock ? "primary" : "danger"}>{product.inStock ? "In stock" : "Sold out"}</Badge>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Button href={`/products/${product.id}`} variant="ghost" className="px-3">
            <Eye aria-hidden="true" className="size-4" />
            View
          </Button>
          <Button
            type="button"
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
            className="px-3"
          >
            <ShoppingBag aria-hidden="true" className="size-4" />
            Add
          </Button>
          <ShareButton product={product} />
        </div>
      </div>
    </motion.article>
  );
}
