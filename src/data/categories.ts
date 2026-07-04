export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "cat-shirts",
    name: "Shirts",
    slug: "shirts",
    image: "/products/category-shirts-tees.png",
    description: "Tailored essentials, crisp cotton, and polished daily layers."
  },
  {
    id: "cat-tshirts",
    name: "T-Shirts",
    slug: "t-shirts",
    image: "/products/category-shirts-tees.png",
    description: "Soft premium knits for weekends, travel, and easy styling."
  },
  {
    id: "cat-jeans",
    name: "Jeans",
    slug: "jeans",
    image: "/products/category-denim-footwear.png",
    description: "Structured denim with reliable fits and clean finishes."
  },
  {
    id: "cat-dresses",
    name: "Dresses",
    slug: "dresses",
    image: "/products/fashion-emerald-dress.png",
    description: "Effortless silhouettes for celebrations, evenings, and brunch."
  },
  {
    id: "cat-ethnic",
    name: "Ethnic Wear",
    slug: "ethnic-wear",
    image: "/products/category-ethnic-accessories.png",
    description: "Festive textures, refined embroidery, and contemporary comfort."
  },
  {
    id: "cat-footwear",
    name: "Footwear",
    slug: "footwear",
    image: "/products/category-denim-footwear.png",
    description: "Statement sneakers, loafers, and sandals for complete looks."
  },
  {
    id: "cat-accessories",
    name: "Accessories",
    slug: "accessories",
    image: "/products/category-ethnic-accessories.png",
    description: "Finishing pieces: bags, belts, scarves, and small luxuries."
  }
];
