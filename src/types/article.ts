export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: ArticleTable;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleSource = {
  title: string;
  url: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  answer: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  heroImage: string;
  imageAlt: string;
  readingTime: string;
  keywords: string[];
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  sources: ArticleSource[];
  relatedProductIds: string[];
};
