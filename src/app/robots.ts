import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart"]
    },
    sitemap: `${siteConfig.websiteUrl}/sitemap.xml`,
    host: siteConfig.websiteUrl
  };
}
