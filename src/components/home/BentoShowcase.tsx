import Image from "next/image";
import { ArrowUpRight, MessageCircle, ShieldCheck, Sparkles, Tag } from "lucide-react";
import { BentoCard } from "@/components/common/BentoCard";
import { BentoGrid } from "@/components/common/BentoGrid";
import { SectionHeading } from "@/components/common/SectionHeading";

const blocks = [
  { icon: Sparkles, title: "Campaign pieces first", copy: "Dresses and hero edits get bigger visual weight than utility products.", className: "lg:col-span-2 lg:row-span-2 bg-ink text-white min-h-[28rem]", image: "/products/fashion-oxblood-dress.png" },
  { icon: Tag, title: "Price clarity", copy: "Discounts, ratings, and stock are visible before a shopper commits.", className: "bg-accent text-ink", image: null },
  { icon: ShieldCheck, title: "Material confidence", copy: "Care, fit, and material details reduce back-and-forth in chat.", className: "bg-white text-ink", image: null },
  { icon: MessageCircle, title: "WhatsApp-ready checkout", copy: "Product IDs, variants, quantities, and totals are assembled automatically.", className: "lg:col-span-2 bg-primary text-white", image: null },
  { icon: ArrowUpRight, title: "Bento browsing", copy: "Asymmetric blocks make merchandising feel modern without burying the product.", className: "lg:col-span-2 bg-panel text-ink", image: "/products/fashion-black-cocktail.png" }
];

export function BentoShowcase() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading title="A sharper retail rhythm" copy="The redesign uses bento composition for merchandising variety while keeping product decisions fast and readable." />
        <BentoGrid>
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <BentoCard key={block.title} className={`relative min-h-64 overflow-hidden ${block.className}`}>
                {block.image ? (
                  <Image src={block.image} alt="" fill className="object-cover opacity-40" />
                ) : null}
                <div className="relative">
                  <Icon aria-hidden="true" className="mb-8 size-7" />
                  <h3 className="font-display text-3xl font-bold leading-tight">{block.title}</h3>
                  <p className={`mt-3 max-w-sm ${block.className.includes("text-white") ? "text-white/76" : "text-muted"}`}>{block.copy}</p>
                </div>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
