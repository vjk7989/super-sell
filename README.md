# SuperSell

Modern premium ecommerce catalogue built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. It shows products, categories, brands, product details, a persistent cart, sharing, and WhatsApp-based ordering.

## Run

```bash
npm install
npm run dev
```

## Change Brand Or Contact Details

Edit `src/config/site.ts`. The brand name, WhatsApp number, phone, email, address, and website URL are read from this file so contact details are not hardcoded across the app.

## Add Products

Edit `src/data/products.ts`. Products use the `Product` type from `src/types/product.ts`. Include an ID like `PROD-021`, name, brand, category, price, images, stock state, tags, and optional sizes/colors.

## Add Categories

Edit `src/data/categories.ts`. Each category has a name, slug, image, and description. The catalogue filter expects category slugs such as `shirts` or `ethnic-wear`.

## Add Brands

Edit `src/data/brands.ts`. Each brand has a name, slug, logo, and description. Brand cards link to `/products?brand=<slug>`.

## WhatsApp Checkout

`src/lib/whatsapp.ts` formats messages for one product or the whole cart. The message includes product IDs, names, brands, categories, prices, quantities, selected variants, and totals, then opens `https://wa.me/<number>?text=<encoded_message>`.

## Cart

The cart uses React Context in `src/context/CartContext.tsx` and persists to `localStorage`. Use `src/hooks/useCart.ts` from client components to add, remove, update quantity, clear, and read totals.

## Product Sharing

`src/lib/share.ts` uses the Web Share API when supported and falls back to copying the product URL to the clipboard.
