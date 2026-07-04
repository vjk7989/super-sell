import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-4xl font-bold">{siteConfig.name}</h2>
          <p className="mt-3 max-w-md text-white/72">
            Premium fashion catalogue with simple WhatsApp ordering, curated products, and polished everyday style.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Explore</h3>
          <div className="mt-3 grid gap-2 text-white/72">
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Order support</h3>
          <p className="mt-3 text-white/72">{siteConfig.phone}</p>
          <a
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-glow"
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp Store
          </a>
        </div>
      </div>
    </footer>
  );
}
