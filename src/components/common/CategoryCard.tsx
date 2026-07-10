import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/categories";
import type { Product } from "@/types/product";

export type MerchCardVariant = "standard" | "feature" | "portrait" | "landscape" | "compact";

const cardHeights: Record<MerchCardVariant, string> = {
  standard: "",
  feature: "min-h-[30rem] lg:min-h-0",
  portrait: "min-h-80 lg:min-h-0",
  landscape: "min-h-64 lg:min-h-0",
  compact: "min-h-72 lg:min-h-0"
};

const imageSizes: Record<MerchCardVariant, string> = {
  standard: "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw",
  feature: "(min-width: 1280px) 50vw, (min-width: 1024px) 58vw, 100vw",
  portrait: "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw",
  landscape: "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw",
  compact: "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
};

const titleSizes: Record<MerchCardVariant, string> = {
  standard: "text-3xl",
  feature: "text-4xl md:text-5xl",
  portrait: "text-3xl md:text-4xl",
  landscape: "text-3xl",
  compact: "text-2xl md:text-3xl"
};

export function CategoryCard({
  category,
  products,
  variant = "standard"
}: {
  category: Category;
  products: Product[];
  variant?: MerchCardVariant;
}) {
  const count = products.filter((product) => product.category === category.name).length;
  const overlay = variant !== "standard";

  return (
    <Link
      href={`/products?category=${category.slug}`}
      className={`group relative isolate block h-full overflow-hidden rounded-4xl border border-line bg-bg shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift ${cardHeights[variant]}`}
    >
      <div className={`${overlay ? "absolute inset-0" : "relative aspect-[4/3]"} overflow-hidden bg-panel`}>
        <Image
          src={category.image}
          alt={`${category.name} collection`}
          fill
          sizes={imageSizes[variant]}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
        {overlay ? <div className="absolute inset-0 bg-gradient-to-t from-ink/86 via-ink/30 to-ink/8" /> : null}
      </div>
      <div className={overlay ? "absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-7" : "p-6"}>
        <div className="flex min-w-0 items-end justify-between gap-4">
          <div className="min-w-0">
            <p className={`text-xs font-bold ${overlay ? "text-white/75" : "text-primary"}`}>{count} pieces</p>
            <h3 className={`mt-1 line-clamp-2 font-display font-semibold leading-[1.02] ${titleSizes[variant]} [text-wrap:balance]`}>
              {category.name}
            </h3>
          </div>
          <span className={`grid size-10 shrink-0 place-items-center rounded-full border transition ${overlay ? "border-white/45 bg-bg/15" : "border-line bg-surface"} group-hover:border-accent group-hover:bg-primary group-hover:text-white`}>
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </span>
        </div>
        <p className={`mt-3 max-w-md leading-6 ${overlay ? "line-clamp-3 text-white/86" : "line-clamp-2 text-muted"}`}>{category.description}</p>
      </div>
    </Link>
  );
}
