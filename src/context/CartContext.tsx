"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type { Product } from "@/types/product";

export type CartItem = {
  key: string;
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
};

type CartOptions = {
  size?: string;
  color?: string;
};

type CartContextValue = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, options?: CartOptions) => void;
  removeFromCart: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
};

export const CartContext = createContext<CartContextValue | null>(null);

const storageKey = "supersell-cart";

function makeKey(product: Product, options?: CartOptions) {
  return [product.id, options?.size ?? "nosize", options?.color ?? "nocolor"].join("|");
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        setCartItems(JSON.parse(stored) as CartItem[]);
      }
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (ready) {
      window.localStorage.setItem(storageKey, JSON.stringify(cartItems));
    }
  }, [cartItems, ready]);

  const addToCart = useCallback((product: Product, quantity = 1, options?: CartOptions) => {
    const key = makeKey(product, options);
    setCartItems((items) => {
      const existing = items.find((item) => item.key === key);
      if (existing) {
        return items.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...items, { key, product, quantity, size: options?.size, color: options?.color }];
    });
  }, []);

  const removeFromCart = useCallback((key: string) => {
    setCartItems((items) => items.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.key === key ? { ...item, quantity: Math.max(1, quantity) } : item))
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const getCartTotal = useCallback(
    () =>
      cartItems.reduce((sum, item) => {
        const price = item.product.discountPrice ?? item.product.price;
        return sum + price * item.quantity;
      }, 0),
    [cartItems]
  );

  const getCartCount = useCallback(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }),
    [addToCart, cartItems, clearCart, getCartCount, getCartTotal, removeFromCart, updateQuantity]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
