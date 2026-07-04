"use client";

import { MessageCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/format";
import { createCartWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";

export function CartSummary() {
  const { cartItems, clearCart, getCartCount, getCartTotal } = useCart();
  const total = getCartTotal();

  return (
    <aside className="rounded-4xl border border-line bg-white p-6 shadow-lift lg:sticky lg:top-28">
      <h2 className="font-display text-3xl font-bold">Order summary</h2>
      <div className="mt-5 space-y-3 rounded-3xl bg-panel p-4 text-sm text-muted">
        <div className="flex justify-between">
          <span>Items</span>
          <strong className="text-ink">{getCartCount()}</strong>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <strong className="text-ink">{formatPrice(total)}</strong>
        </div>
      </div>
      <Button
        type="button"
        className="mt-6 w-full"
        disabled={!cartItems.length}
        onClick={() => openWhatsApp(createCartWhatsAppMessage(cartItems))}
      >
        <MessageCircle aria-hidden="true" className="size-4" />
        Checkout on WhatsApp
      </Button>
      <Button type="button" variant="ghost" className="mt-3 w-full" disabled={!cartItems.length} onClick={clearCart}>
        <Trash2 aria-hidden="true" className="size-4" />
        Clear cart
      </Button>
      <p className="mt-4 text-sm leading-6 text-muted">
        Checkout sends product IDs, names, quantities, prices, subtotals, and the total order value to the store.
      </p>
    </aside>
  );
}
