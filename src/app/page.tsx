import { MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/common/Button";
import { BentoShowcase } from "@/components/home/BentoShowcase";
import { FeaturedBrands } from "@/components/home/FeaturedBrands";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <BentoShowcase />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedCategories />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedBrands />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedProducts />
      </AnimatedSection>
      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-8 rounded-4xl bg-ink p-8 text-white shadow-lift md:grid-cols-[1fr_auto] md:items-end md:p-12">
            <div>
            <MessageCircle aria-hidden="true" className="mb-6 size-10 text-accent" />
            <h2 className="font-display text-4xl font-bold md:text-6xl [text-wrap:balance]">
              Checkout through WhatsApp with every product detail included.
            </h2>
            <p className="mt-4 max-w-2xl text-white/72">
              Product IDs, names, prices, quantities, selected variants, and totals are formatted automatically.
            </p>
            </div>
            <Button href="/products" className="mt-7">
              Start shopping
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
