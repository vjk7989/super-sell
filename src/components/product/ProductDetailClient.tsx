"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { ShareButton } from "@/components/common/ShareButton";
import { ProductGallery } from "@/components/product/ProductGallery";
import { RatingStars } from "@/components/product/RatingStars";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/format";
import { createProductWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

export function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.sizes?.[0] ?? "");
  const [color, setColor] = useState(product.colors?.[0] ?? "");
  const price = product.discountPrice ?? product.price;
  const message = useMemo(
    () => createProductWhatsAppMessage(product, { quantity, size, color }),
    [color, product, quantity, size]
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <ProductGallery images={product.images} name={product.name} />
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-4xl border border-line bg-white p-6 shadow-lift">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge tone={product.inStock ? "primary" : "danger"}>{product.inStock ? "In stock" : "Out of stock"}</Badge>
            <Badge>{product.id}</Badge>
            <Badge>{product.brand}</Badge>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl [text-wrap:balance]">
            {product.name}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">{product.description}</p>
          <div className="mt-5">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <div className="mt-6 flex items-end gap-3">
            <strong className="text-3xl">{formatPrice(price)}</strong>
            {product.discountPrice ? <span className="pb-1 text-muted line-through">{formatPrice(product.price)}</span> : null}
          </div>

          {product.sizes?.length ? (
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((item) => (
                  <button
                    key={item}
                    className={`focus-ring rounded-2xl border px-4 py-2 text-sm font-semibold ${
                      size === item ? "border-primary bg-primary text-white" : "border-line bg-bg"
                    }`}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {product.colors?.length ? (
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((item) => (
                  <button
                    key={item}
                    className={`focus-ring rounded-2xl border px-4 py-2 text-sm font-semibold ${
                      color === item ? "border-ink bg-ink text-white" : "border-line bg-bg"
                    }`}
                    onClick={() => setColor(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold">Quantity</p>
            <div className="inline-flex items-center rounded-2xl border border-line bg-bg p-1">
              <button className="focus-ring grid size-10 place-items-center rounded-xl" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                <Minus className="size-4" />
              </button>
              <span className="w-10 text-center font-bold">{quantity}</span>
              <button className="focus-ring grid size-10 place-items-center rounded-xl" onClick={() => setQuantity((value) => value + 1)}>
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Button
              type="button"
              disabled={!product.inStock}
              onClick={() => addToCart(product, quantity, { size, color })}
            >
              <ShoppingBag aria-hidden="true" className="size-4" />
              Add to Cart
            </Button>
            <Button type="button" variant="secondary" disabled={!product.inStock} onClick={() => openWhatsApp(message)}>
              Buy on WhatsApp
            </Button>
            <ShareButton product={product} />
          </div>
        </div>
      </aside>
    </div>
  );
}
