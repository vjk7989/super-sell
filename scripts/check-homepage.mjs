/* global process, console */

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assertIncludes(source, expected, label) {
  if (!source.includes(expected)) {
    throw new Error(`Missing ${label}: ${expected}`);
  }
}

const page = read("src/app/page.tsx");
const hero = read("src/components/home/Hero.tsx");
const events = read("src/data/events.ts");
const products = read("src/components/home/FeaturedProducts.tsx");
const journal = read("src/components/home/JournalEdit.tsx");

[
  ["<Hero />", "hero carousel"],
  ["<UpcomingEvents />", "upcoming events section"],
  ["<FeaturedCategories />", "category bento"],
  ['<FeaturedProducts edit="new-arrivals" />', "new arrivals edit"],
  ["<FeaturedBrands />", "brand bento"],
  ["<FeaturedProducts />", "loved by many edit"],
  ["<JournalEdit />", "journal edit"],
  ["A personal way to shop.", "WhatsApp service section"]
].forEach(([expected, label]) => assertIncludes(page, expected, label));

[
  "Handcrafted pieces for beautiful everyday rituals.",
  "Loved-by-many looks with a quiet luxury finish.",
  "From studio previews to wardrobe staples.",
  "AUTOPLAY_MS = 6000",
  'sizes="100vw"',
  "prefers-reduced-motion: reduce"
].forEach((expected) => assertIncludes(hero, expected, "hero requirement"));

[
  "Love Loom Studio Preview",
  "Banjara Hills Weekend Pop-Up",
  "Festive Edit Open House",
  "isDemo: true"
].forEach((expected) => assertIncludes(events, expected, "event data"));

assertIncludes(products, '"new-arrivals"', "new arrivals product edit");
assertIncludes(products, "Loved by many", "loved product edit");
assertIncludes(journal, "articles.slice(0, 3)", "three-article journal edit");

console.log("Homepage integrity check passed.");
