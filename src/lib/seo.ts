import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.websiteUrl).toString();
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.websiteUrl}/#organization`,
      name: siteConfig.name,
      url: siteConfig.websiteUrl,
      logo: absoluteUrl(siteConfig.sealLogo),
      slogan: siteConfig.tagline,
      sameAs: [siteConfig.instagramUrl],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Telugu"]
      }
    },
    {
      "@type": "ClothingStore",
      "@id": `${siteConfig.websiteUrl}/#store`,
      name: siteConfig.name,
      url: siteConfig.websiteUrl,
      image: absoluteUrl("/opengraph-image.png"),
      telephone: siteConfig.phone,
      priceRange: "INR",
      openingHours: siteConfig.businessHours,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 1, 3rd Floor, Road No. 10, Gouri Shankar Nagar Colony",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500034",
        addressCountry: "IN"
      },
      parentOrganization: {
        "@id": `${siteConfig.websiteUrl}/#organization`
      }
    }
  ]
};
