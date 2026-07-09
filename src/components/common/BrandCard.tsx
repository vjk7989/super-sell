import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Brand } from "@/data/brands";
import type { Product } from "@/types/product";

export function BrandCard({ brand, products }: { brand: Brand; products: Product[] }) {
  const count = products.filter((product) => product.brand === brand.name).length;
  return (
    <Link href={`/products?brand=${brand.slug}`} className="group block h-full overflow-hidden rounded-4xl border border-line bg-bg shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[5/3] bg-panel">
        <Image src={brand.logo} alt={`${brand.name} logo`} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-3xl font-semibold">{brand.name}</h3>
          <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="size-5 transition group-hover:translate-x-1" />
          </span>
        </div>
        <p className="mt-2 text-sm font-bold text-primary">{count} pieces</p>
        <p className="mt-3 text-muted">{brand.description}</p>
      </div>
    </Link>
  );
}
