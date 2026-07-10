import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/categories", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/brands", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/journal", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const }
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/products/${product.id}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/journal/${article.slug}`),
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];
}
