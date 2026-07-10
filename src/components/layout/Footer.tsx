import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/components/common/TrackedLink";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface text-ink">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.25fr_0.8fr_1.2fr]">
        <div>
          <Image
            src={siteConfig.sealLogo}
            alt="Love Loom — Woven with love, made to last"
            width={720}
            height={720}
            className="size-44 rounded-full object-contain"
          />
          <h2 className="sr-only">{siteConfig.name}</h2>
          <p className="mt-3 max-w-md leading-7 text-muted">
            {siteConfig.tagline}. A considered catalogue for pieces that feel beautiful, personal, and easy to live in.
          </p>
          <TrackedLink className="mt-5 inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover" href={siteConfig.instagramUrl} target="_blank" eventName="instagram_click" eventParams={{ location: "footer" }}>
            <Instagram aria-hidden="true" className="size-5 text-accent" />
            Follow on Instagram
          </TrackedLink>
        </div>
        <div>
          <h3 className="font-bold">Explore</h3>
          <div className="mt-4 grid gap-3 text-muted">
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">Our story</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Visit or get in touch</h3>
          <TrackedLink href={siteConfig.mapUrl} target="_blank" eventName="store_location_click" eventParams={{ location: "footer" }} className="mt-4 flex gap-3 text-sm leading-6 text-muted hover:text-ink">
            <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
            {siteConfig.address}
          </TrackedLink>
          <TrackedLink href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} eventName="phone_click" eventParams={{ location: "footer" }} className="mt-3 flex items-center gap-3 text-sm font-bold text-muted hover:text-ink">
            <Phone aria-hidden="true" className="size-5 text-accent" />
            {siteConfig.phone}
          </TrackedLink>
          <TrackedLink className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-primary-hover" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" eventName="whatsapp_click" eventParams={{ location: "footer", message_type: "store_enquiry" }}>
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp Store
          </TrackedLink>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
