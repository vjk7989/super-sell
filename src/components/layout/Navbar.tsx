"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useCart } from "@/hooks/useCart";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { getCartCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav
        className={`container-shell rounded-3xl border px-4 py-3 transition ${
          scrolled ? "glass" : "border-line bg-white/86 shadow-soft backdrop-blur"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 font-display text-xl font-bold">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-ink text-sm text-white">
              SS
            </span>
            {siteConfig.name}
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-2 text-sm font-bold transition hover:bg-panel ${
                  pathname === link.href ? "bg-ink text-white" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              className="focus-ring relative flex size-11 items-center justify-center rounded-2xl bg-ink text-white shadow-soft"
              aria-label="Cart"
            >
              <ShoppingBag aria-hidden="true" className="size-5" />
              <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-lg bg-accent px-1 text-xs font-bold text-ink">
                {getCartCount()}
              </span>
            </Link>
            <button
              className="focus-ring flex size-11 items-center justify-center rounded-2xl border border-line bg-white lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              className="mt-4 grid gap-2 lg:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-panel px-4 py-3 font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
