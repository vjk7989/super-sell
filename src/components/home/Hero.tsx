"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";

const miniCards = [
  { label: "20", value: "catalogue pieces" },
  { label: "6", value: "curated labels" },
  { label: "1 tap", value: "WhatsApp order" },
  { label: "AA", value: "readable contrast" }
];

export function Hero() {
  return (
    <section className="editorial-frame relative isolate overflow-hidden border-b border-line pb-12 pt-28 text-ink md:pt-36">
      <div className="container-shell relative grid min-h-[calc(100vh-8rem)] items-center gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <Badge tone="accent" className="mb-5">
            <Sparkles aria-hidden="true" className="mr-2 size-4" />
            Crisp boutique catalogue
          </Badge>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-normal md:text-7xl xl:text-8xl [text-wrap:balance]">
            Shop curated fashion without checkout friction
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted [text-wrap:pretty]">
            Browse product-led edits, compare details clearly, and send a complete order to the store on WhatsApp when the look is right.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/products">
              Shop catalogue
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button href="/brands" variant="ghost">
              Explore Brands
            </Button>
          </div>
          <div className="luxury-rule my-10 max-w-lg" />
          <div className="grid max-w-xl grid-cols-2 gap-3">
            {miniCards.map((item, index) => (
              <motion.div
                key={item.label}
                className="rounded-3xl border border-line bg-white p-4 shadow-soft"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + index * 0.05 }}
              >
                <p className="font-display text-3xl font-bold leading-none text-ink">{item.label}</p>
                <p className="mt-1 text-sm font-bold text-muted">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid min-h-[590px] grid-cols-6 grid-rows-6 gap-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative col-span-6 row-span-4 overflow-hidden rounded-4xl border border-line bg-panel shadow-lift">
            <Image src="/products/hero-light-boutique.png" alt="Daylit premium boutique with curated clothing and cream interiors" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/36 via-ink/4 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-sm rounded-3xl border border-white/50 bg-white/90 p-5 shadow-soft backdrop-blur">
              <p className="font-display text-3xl font-bold leading-none">Bright retail edit</p>
              <p className="mt-2 text-sm leading-6 text-muted">Clean surfaces, visible product detail, and a direct path to messaging.</p>
            </div>
          </div>
          <div className="col-span-3 row-span-2 rounded-4xl border border-line bg-ink p-5 text-white shadow-soft">
            <MessageCircle aria-hidden="true" className="mb-5 size-7 text-accent" />
            <p className="font-display text-3xl font-bold leading-none">Buy by message</p>
            <p className="mt-3 text-sm leading-6 text-white/72">Cart totals and selected variants are included automatically.</p>
          </div>
          <div className="relative col-span-3 row-span-2 overflow-hidden rounded-4xl border border-line bg-panel shadow-soft">
            <Image src="/products/category-shirts-tees.png" alt="Premium shirts and t-shirts on a boutique rail" fill className="object-cover" />
            <div className="absolute left-4 top-4 rounded-2xl bg-white px-3 py-2 text-sm font-bold text-ink shadow-soft">
              <Search aria-hidden="true" className="mr-2 inline size-4 text-primary" />
              Search by ID, brand, category
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
