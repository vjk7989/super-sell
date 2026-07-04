import { siteConfig } from "@/config/site";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import type { CartItem } from "@/context/CartContext";

type ProductOrderOptions = {
  quantity: number;
  size?: string;
  color?: string;
};

export function createProductWhatsAppMessage(
  product: Product,
  options: ProductOrderOptions
): string {
  const price = product.discountPrice ?? product.price;
  const productUrl = `${siteConfig.websiteUrl}/products/${product.id}`;

  return [
    "Hello, I am interested in buying this product:",
    "",
    `Product ID: ${product.id}`,
    `Product Name: ${product.name}`,
    `Brand: ${product.brand}`,
    `Category: ${product.category}`,
    `Price: ${formatPrice(price)}`,
    `Quantity: ${options.quantity}`,
    options.size ? `Size: ${options.size}` : null,
    options.color ? `Color: ${options.color}` : null,
    `Product Link: ${productUrl}`,
    "",
    "Please share more details."
  ]
    .filter(Boolean)
    .join("\n");
}

export function createCartWhatsAppMessage(cartItems: CartItem[]): string {
  const lines = [
    "Hello, I want to place an order for the following products:",
    ""
  ];

  cartItems.forEach((item, index) => {
    const price = item.product.discountPrice ?? item.product.price;
    lines.push(
      `${index + 1}. Product ID: ${item.product.id}`,
      `Product Name: ${item.product.name}`,
      `Brand: ${item.product.brand}`,
      item.size ? `Size: ${item.size}` : "",
      item.color ? `Color: ${item.color}` : "",
      `Price: ${formatPrice(price)}`,
      `Quantity: ${item.quantity}`,
      `Subtotal: ${formatPrice(price * item.quantity)}`,
      ""
    );
  });

  const total = cartItems.reduce((sum, item) => {
    const price = item.product.discountPrice ?? item.product.price;
    return sum + price * item.quantity;
  }, 0);

  lines.push(
    `Total Order Value: ${formatPrice(total)}`,
    `Cart Link: ${siteConfig.websiteUrl}/cart`,
    "",
    "Please confirm availability and order process."
  );

  return lines.filter((line) => line !== "").join("\n");
}

export function openWhatsApp(message: string): void {
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

