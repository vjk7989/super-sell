import { ArrowUpRight, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";

export function ArticleCard({ article, feature = false }: { article: Article; feature?: boolean }) {
  return (
    <article className={`group overflow-hidden rounded-4xl border border-line bg-bg shadow-soft ${feature ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
      <Link href={`/journal/${article.slug}`} className={`relative block overflow-hidden bg-panel ${feature ? "min-h-80" : "aspect-[4/3]"}`}>
        <Image
          src={article.heroImage}
          alt={article.imageAlt}
          fill
          sizes={feature ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
      </Link>
      <div className="flex flex-col justify-center p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-muted">
          <span>{new Date(article.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock3 aria-hidden="true" className="size-3.5" />{article.readingTime}</span>
        </div>
        <h2 className={`mt-4 font-display font-semibold leading-[1.02] ${feature ? "text-4xl md:text-5xl" : "text-3xl"}`}>
          <Link href={`/journal/${article.slug}`} className="transition hover:text-primary">{article.title}</Link>
        </h2>
        <p className="mt-4 leading-7 text-muted">{article.excerpt}</p>
        <Link href={`/journal/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover">
          Read the guide
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </article>
  );
}
