import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Brand } from "@/data/brands";
import type { Product } from "@/types/product";

export function BrandCard({ brand, products }: { brand: Brand; products: Product[] }) {
  const count = products.filter((product) => product.brand === brand.name).length;
  return (
    <Link href={`/products?brand=${brand.slug}`} className="group block overflow-hidden rounded-4xl border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[5/3] bg-ink">
        <Image src={brand.logo} alt={`${brand.name} logo`} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-bold">{brand.name}</h3>
          <span className="grid size-10 place-items-center rounded-2xl border border-line bg-bg transition group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="size-5 transition group-hover:translate-x-1" />
          </span>
        </div>
        <p className="mt-2 text-sm font-semibold text-primary">{count} products</p>
        <p className="mt-3 text-muted">{brand.description}</p>
      </div>
    </Link>
  );
}
