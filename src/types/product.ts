export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
  images: string[];
  sizes?: string[];
  colors?: string[];
  material?: string;
  careInstructions?: string[];
  tags: string[];
  inStock: boolean;
  featured?: boolean;
};

