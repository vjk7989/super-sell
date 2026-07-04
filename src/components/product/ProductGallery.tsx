"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-line bg-panel shadow-lift">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Image src={active} alt={name} fill priority className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image}
            className={`focus-ring relative aspect-square overflow-hidden rounded-3xl border bg-white shadow-soft ${
              active === image ? "border-primary ring-2 ring-primary/20" : "border-line"
            }`}
            onClick={() => setActive(image)}
          >
            <Image src={image} alt={`${name} thumbnail`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
