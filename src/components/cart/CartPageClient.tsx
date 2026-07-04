"use client";

import { AnimatePresence } from "framer-motion";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/common/EmptyState";
import { useCart } from "@/hooks/useCart";

export function CartPageClient() {
  const { cartItems } = useCart();

  if (!cartItems.length) {
    return (
      <EmptyState
        title="Your cart is waiting"
        copy="Add products from the catalogue, then send the full order through WhatsApp."
        actionLabel="Browse products"
        actionHref="/products"
      />
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        <AnimatePresence>
          {cartItems.map((item) => (
            <CartItem key={item.key} item={item} />
          ))}
        </AnimatePresence>
      </div>
      <CartSummary />
    </div>
  );
}

