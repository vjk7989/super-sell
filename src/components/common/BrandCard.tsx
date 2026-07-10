import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { MerchCardVariant } from "@/components/common/CategoryCard";
import type { Brand } from "@/data/brands";
import type { Product } from "@/types/product";

const heightByVariant: Record<MerchCardVariant, string> = {
  standard: "",
  feature: "min-h-[30rem] lg:min-h-0",
  portrait: "min-h-[28rem] lg:min-h-0",
  landscape: "min-h-64 lg:min-h-0",
  compact: "min-h-72 lg:min-h-0"
};

const imageSizes: Record<MerchCardVariant, string> = {
  standard: "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw",
  feature: "(min-width: 1280px) 42vw, (min-width: 1024px) 50vw, 100vw",
  portrait: "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw",
  landscape: "(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw",
  compact: "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
};

const titleSizes: Record<MerchCardVariant, string> = {
  standard: "text-3xl",
  feature: "text-4xl md:text-5xl",
  portrait: "text-3xl md:text-4xl",
  landscape: "text-3xl",
  compact: "text-2xl md:text-3xl"
};

export function BrandCard({
  brand,
  products,
  variant = "standard"
}: {
  brand: Brand;
  products: Product[];
  variant?: MerchCardVariant;
}) {
  const count = products.filter((product) => product.brand === brand.name).length;
  const overlay = variant !== "standard";

  return (
    <Link
      href={`/products?brand=${brand.slug}`}
      className={`group relative isolate block h-full overflow-hidden rounded-4xl border border-line bg-bg shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift ${heightByVariant[variant]}`}
    >
      <div className={`${overlay ? "absolute inset-0" : "relative aspect-[5/3]"} overflow-hidden bg-panel`}>
        <Image
          src={brand.logo}
          alt={`${brand.name} collection`}
          fill
          sizes={imageSizes[variant]}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
        {overlay ? <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/30 to-ink/8" /> : null}
      </div>
      <div className={overlay ? "absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-7" : "p-6"}>
        <div className="flex min-w-0 items-end justify-between gap-4">
          <div className="min-w-0">
            <p className={`text-xs font-bold ${overlay ? "text-white/75" : "text-primary"}`}>{count} pieces</p>
            <h3 className={`mt-1 line-clamp-2 font-display font-semibold leading-[1.02] ${titleSizes[variant]} [text-wrap:balance]`}>{brand.name}</h3>
          </div>
          <span className={`grid size-10 shrink-0 place-items-center rounded-full border transition ${overlay ? "border-white/45 bg-bg/15" : "border-line bg-surface"} group-hover:border-accent group-hover:bg-primary group-hover:text-white`}>
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </span>
        </div>
        <p className={`mt-3 max-w-md leading-6 ${overlay ? "line-clamp-3 text-white/86" : "line-clamp-2 text-muted"}`}>{brand.description}</p>
      </div>
    </Link>
  );
}
