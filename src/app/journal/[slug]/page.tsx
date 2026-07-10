import type { Metadata } from "next";
import { ArrowUpRight, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductGrid } from "@/components/product/ProductGrid";
import { siteConfig } from "@/config/site";
import { articles, getArticleBySlug } from "@/data/articles";
import { products } from "@/data/products";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const canonical = `/journal/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical },
    authors: [{ name: article.author, url: "/about" }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: canonical,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [{ url: article.heroImage, alt: article.imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.heroImage]
    }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const path = `/journal/${article.slug}`;
  const relatedProducts = article.relatedProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [absoluteUrl(article.heroImage)],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: article.author,
      url: absoluteUrl("/about")
    },
    publisher: {
      "@id": `${siteConfig.websiteUrl}/#organization`
    },
    keywords: article.keywords.join(", ")
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Journal", path: "/journal" },
        { name: article.title, path }
      ])} />
      <article className="section-pad page-top-pad">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }, { label: article.title }]} />
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold text-primary">Love Loom Journal</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.96] md:text-7xl [text-wrap:balance]">{article.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">{article.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
              <Link href="/about" className="font-bold text-primary hover:text-primary-hover">{article.author}</Link>
              <span>{new Date(article.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock3 aria-hidden="true" className="size-4" />{article.readingTime}</span>
            </div>
          </header>

          <div className="relative mx-auto mt-10 aspect-[16/9] max-w-6xl overflow-hidden rounded-4xl border border-line bg-panel shadow-soft">
            <Image src={article.heroImage} alt={article.imageAlt} fill priority className="object-cover" />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <aside className="rounded-3xl border border-accent/45 bg-surface p-6 md:p-8">
              <h2 className="font-display text-3xl font-semibold">The short answer</h2>
              <p className="mt-3 text-lg leading-8 text-ink">{article.answer}</p>
            </aside>

            <div className="mt-12 space-y-12">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-4xl font-semibold leading-tight [text-wrap:balance]">{section.heading}</h2>
                  <div className="mt-5 space-y-5 text-[1.0625rem] leading-8 text-muted">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-6 grid gap-3 pl-5 text-[1.0625rem] leading-8 text-muted marker:text-accent">
                      {section.bullets.map((item) => <li key={item} className="list-disc pl-2">{item}</li>)}
                    </ul>
                  ) : null}
                  {section.table ? (
                    <div className="mt-7 overflow-x-auto rounded-2xl border border-line">
                      <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                        <thead className="bg-primary text-white">
                          <tr>{section.table.headers.map((header) => <th key={header} className="px-4 py-3 font-bold">{header}</th>)}</tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row.join("-")} className="border-t border-line">
                              {row.map((cell) => <td key={cell} className="px-4 py-3 align-top text-muted">{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-14 border-t border-line pt-10">
              <h2 className="font-display text-4xl font-semibold">Frequently asked questions</h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {article.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-8 font-bold text-ink marker:hidden">{faq.question}</summary>
                    <p className="mt-3 max-w-2xl leading-7 text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-3xl bg-surface p-6">
              <h2 className="font-display text-3xl font-semibold">Sources and further reading</h2>
              <ul className="mt-4 grid gap-3">
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover">
                      {source.title}<ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {relatedProducts.length ? (
            <section className="mt-16 border-t border-line pt-12">
              <h2 className="mb-7 font-display text-4xl font-semibold">Explore related pieces</h2>
              <ProductGrid products={relatedProducts} />
            </section>
          ) : null}
        </div>
      </article>
    </>
  );
}
