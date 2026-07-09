import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Love Loom, a thoughtful WhatsApp-first fashion catalogue."
};

const promises = [
  { icon: Sparkles, title: "Curated style", copy: "Every product is presented with details that help shoppers compare confidently." },
  { icon: ShieldCheck, title: "Quality notes", copy: "Material, care, fit, and availability are visible before shoppers message the store." },
  { icon: MessageCircle, title: "WhatsApp ordering", copy: "Product IDs and order details are formatted into clear WhatsApp messages." }
];

export default function AboutPage() {
  return (
    <section className="section-pad page-top-pad">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="font-display text-5xl font-bold md:text-7xl [text-wrap:balance]">
              A premium catalogue for simpler fashion buying
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Love Loom brings clothing, footwear, accessories, brands, pricing, and product details into a calm catalogue experience. Instead of forcing shoppers through a full payment platform, orders begin with a clear WhatsApp conversation.
            </p>
          </div>
          <div className="rounded-4xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-display text-3xl font-bold">How ordering works</h2>
            <div className="mt-6 space-y-4">
              {["Browse products and open details", "Select size, color, and quantity", "Add to cart or buy one product", "Send the formatted order on WhatsApp"].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {promises.map((promise) => {
            const Icon = promise.icon;
            return (
              <div key={promise.title} className="rounded-4xl border border-line bg-white p-6 shadow-soft">
                <Icon aria-hidden="true" className="mb-6 size-8 text-primary" />
                <h2 className="font-display text-2xl font-bold">{promise.title}</h2>
                <p className="mt-3 text-muted">{promise.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
