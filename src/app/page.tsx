import { Heart, Leaf, MessageCircle, Scissors } from "lucide-react";
import { Button } from "@/components/common/Button";
import { FeaturedBrands } from "@/components/home/FeaturedBrands";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { JournalEdit } from "@/components/home/JournalEdit";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";

const promises = [
  { icon: Leaf, title: "Thoughtful materials" },
  { icon: Scissors, title: "Hand-finished details" },
  { icon: Heart, title: "Made to be kept" }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="upcoming-events">
        <UpcomingEvents />
      </div>
      <FeaturedCategories />
      <FeaturedProducts edit="new-arrivals" />
      <FeaturedBrands />
      <FeaturedProducts />
      <JournalEdit />
      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-8 rounded-4xl border border-line bg-surface p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
            <div>
            <MessageCircle aria-hidden="true" className="mb-6 size-10 text-accent" />
            <h2 className="font-display text-4xl font-semibold md:text-6xl [text-wrap:balance]">
              A personal way to shop.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Choose the pieces you love and send your selection directly to us on WhatsApp. We will help with sizing, availability, and the finishing details.
            </p>
            </div>
            <Button href="/products" className="mt-7">
              Start shopping
            </Button>
          </div>
          <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
            {promises.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-3">
                <Icon aria-hidden="true" className="size-5 text-accent" />
                <p className="font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
