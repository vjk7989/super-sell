"use client";

import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import type { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/format";

export function CartItem({ item }: { item: CartItemType }) {
  const { removeFromCart, updateQuantity } = useCart();
  const price = item.product.discountPrice ?? item.product.price;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="grid gap-4 rounded-4xl border border-line bg-white p-4 shadow-soft sm:grid-cols-[140px_1fr]"
    >
      <Link href={`/products/${item.product.id}`} className="relative aspect-square overflow-hidden rounded-3xl bg-panel">
        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
      </Link>
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-semibold text-muted">
            {item.product.id} - {item.product.brand}
          </p>
          <Link href={`/products/${item.product.id}`} className="font-display text-2xl font-bold transition hover:text-primary">
            {item.product.name}
          </Link>
          <p className="mt-1 text-muted">
            {item.size ? `Size: ${item.size}` : null}
            {item.size && item.color ? " - " : null}
            {item.color ? `Color: ${item.color}` : null}
          </p>
          <p className="mt-3 font-semibold">
            {formatPrice(price)} x {item.quantity} = {formatPrice(price * item.quantity)}
          </p>
        </div>
        <div className="flex items-center gap-2 md:flex-col md:items-end">
          <div className="inline-flex items-center rounded-2xl border border-line bg-bg p-1">
            <button className="focus-ring grid size-9 place-items-center rounded-xl" onClick={() => updateQuantity(item.key, item.quantity - 1)}>
              <Minus className="size-4" />
            </button>
            <span className="w-9 text-center font-bold">{item.quantity}</span>
            <button className="focus-ring grid size-9 place-items-center rounded-xl" onClick={() => updateQuantity(item.key, item.quantity + 1)}>
              <Plus className="size-4" />
            </button>
          </div>
          <Button variant="ghost" type="button" onClick={() => removeFromCart(item.key)}>
            <Trash2 aria-hidden="true" className="size-4" />
            Remove
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
