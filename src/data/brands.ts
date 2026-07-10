export type Brand = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
};

export const brands: Brand[] = [
  {
    id: "brand-urban-loom",
    name: "Urban Loom",
    slug: "urban-loom",
    logo: "/editorial/boutique-linen-rail-optimized.webp",
    description: "Modern cotton staples with quiet tailoring details."
  },
  {
    id: "brand-denim-co",
    name: "Denim Co",
    slug: "denim-co",
    logo: "/brands/brand-denim-co-ai.png",
    description: "Reliable denim fits, clean washes, and durable hardware."
  },
  {
    id: "brand-mira-mode",
    name: "Mira Mode",
    slug: "mira-mode",
    logo: "/editorial/model-dusty-rose-optimized.webp",
    description: "Soft occasionwear with fluid silhouettes and polished finishes."
  },
  {
    id: "brand-atelier-nine",
    name: "Atelier Nine",
    slug: "atelier-nine",
    logo: "/brands/brand-atelier-nine-ai.png",
    description: "Premium capsule pieces designed for elevated wardrobes."
  },
  {
    id: "brand-kosha-studio",
    name: "Kosha Studio",
    slug: "kosha-studio",
    logo: "/editorial/model-sage-kurta-optimized.webp",
    description: "Contemporary ethnicwear with artisan-inspired textures."
  },
  {
    id: "brand-northstep",
    name: "NorthStep",
    slug: "northstep",
    logo: "/brands/brand-northstep-ai.png",
    description: "Comfort-forward footwear with refined city styling."
  }
];
