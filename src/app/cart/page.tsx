import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart/CartPageClient";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review selected Love Loom products and checkout through WhatsApp."
};

export default function CartPage() {
  return (
    <section className="section-pad page-top-pad">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <h1 className="font-display text-5xl font-bold md:text-7xl [text-wrap:balance]">Cart</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Review quantities and send the complete order request to WhatsApp.
          </p>
        </div>
        <CartPageClient />
      </div>
    </section>
  );
}
