import { CalendarDays, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import { storeEvents } from "@/data/events";

export function UpcomingEvents() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <SectionHeading
          title="Come, see us in person"
          copy="Pop-ups, open studio days, and thoughtful gatherings around Hyderabad."
        />
        {storeEvents.length ? (
          <div className="grid gap-5 lg:grid-cols-3">
            {storeEvents.map((event) => (
              <article key={event.id} className="overflow-hidden rounded-4xl border border-line bg-bg shadow-soft">
                <div className="relative aspect-[4/3] bg-panel">
                  <Image src={event.image} alt="" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-primary">{event.dateRange} · {event.time}</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold">{event.title}</h3>
                  <p className="mt-3 text-muted">{event.venue}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid overflow-hidden rounded-4xl border border-line bg-bg shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-7 md:p-12">
              <CalendarDays aria-hidden="true" className="size-9 text-accent" />
              <h3 className="mt-6 font-display text-4xl font-semibold md:text-5xl [text-wrap:balance]">
                New pop-ups are taking shape.
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-muted">
                We are preparing our next in-person edit. Follow along for dates, previews, and first looks.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={siteConfig.instagramUrl} variant="primary">
                  <Instagram aria-hidden="true" className="size-4" />
                  Follow on Instagram
                </Button>
                <Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} variant="ghost">
                  <Phone aria-hidden="true" className="size-4" />
                  Call the store
                </Button>
              </div>
            </div>
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative min-h-72 overflow-hidden bg-panel"
            >
              <Image
                src="/products/category-shirts-tees.png"
                alt="Soft neutral clothing displayed on a boutique rail"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-bg/95 p-5 shadow-soft">
                <div className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm font-bold leading-6">{siteConfig.address}</p>
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
