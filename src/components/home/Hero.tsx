"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/common/Button";

export function Hero() {
  return (
    <section className="relative min-h-[min(860px,92vh)] overflow-hidden border-b border-line bg-panel pt-24">
      <Image
        src="/products/hero-light-boutique.png"
        alt="A softly lit boutique displaying a curated collection of timeless clothing"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/70 to-transparent" />
      <div className="container-shell relative flex min-h-[calc(min(860px,92vh)-6rem)] items-center py-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 text-sm font-bold text-primary">Made for beautiful everyday moments</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] md:text-7xl xl:text-8xl [text-wrap:balance]">
            Thoughtfully chosen. Made to be loved.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-ink/78 [text-wrap:pretty]">
            Discover feminine silhouettes, handcrafted details, and timeless pieces from labels we love.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/products">
              Shop the collection
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button href="/categories" variant="ghost">Explore categories</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
