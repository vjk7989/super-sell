import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/categories";
import type { Product } from "@/types/product";

export function CategoryCard({ category, products }: { category: Category; products: Product[] }) {
  const count = products.filter((product) => product.category === category.name).length;
  return (
    <Link href={`/products?category=${category.slug}`} className="group block overflow-hidden rounded-4xl border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-panel">
        <Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/42 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-bold">{category.name}</h3>
          <span className="grid size-10 place-items-center rounded-2xl border border-line bg-bg transition group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="size-5 transition group-hover:translate-x-1" />
          </span>
        </div>
        <p className="mt-2 text-sm font-semibold text-primary">{count} products</p>
        <p className="mt-3 text-muted">{category.description}</p>
      </div>
    </Link>
  );
}
