import type { Metadata } from "next";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactClient } from "@/app/contact/ContactClient";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Love Loom by form, phone, email, or WhatsApp."
};

export default function ContactPage() {
  return (
    <section className="section-pad page-top-pad">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <h1 className="font-display text-5xl font-bold md:text-7xl [text-wrap:balance]">Contact Love Loom</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Ask about products, availability, sizing, delivery, or order process.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <ContactClient />
          <div className="grid gap-4">
            <div className="rounded-4xl border border-line bg-primary p-6 text-white shadow-lift">
              <MessageCircle className="mb-4 size-7 text-accent" />
              <h2 className="font-display text-2xl font-bold">WhatsApp</h2>
              <p className="mt-2 text-white/72">Fastest for product availability and order confirmation.</p>
              <Button href={`https://wa.me/${siteConfig.whatsappNumber}`} className="mt-5">
                Chat on WhatsApp
              </Button>
            </div>
            {[
              { icon: Phone, title: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
              { icon: Instagram, title: "Instagram", value: "@loveloom_hyderabad", href: siteConfig.instagramUrl },
              { icon: Mail, title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: MapPin, title: "Address", value: siteConfig.address, href: siteConfig.mapUrl },
              { icon: Clock, title: "Business hours", value: "Mon-Sat, 10:00 AM - 8:00 PM" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="flex gap-4 rounded-4xl border border-line bg-bg p-5 shadow-soft transition hover:border-accent"
                >
                  <Icon className="size-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
