import { ArrowUpRight, CalendarDays, Clock3, Instagram, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/common/TrackedLink";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import { storeEvents } from "@/data/events";
import type { StoreEvent } from "@/types/store-event";

function EventMeta({ event, light = false }: { event: StoreEvent; light?: boolean }) {
  const copyClass = light ? "text-white/80" : "text-muted";
  return (
    <div className={`mt-4 grid gap-2 text-sm ${copyClass}`}>
      <p className="flex items-center gap-2">
        <CalendarDays aria-hidden="true" className="size-4 text-accent" />
        {event.dateRange}
      </p>
      <p className="flex items-center gap-2">
        <Clock3 aria-hidden="true" className="size-4 text-accent" />
        {event.time}
      </p>
      <p className="flex items-start gap-2">
        <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
        {event.venue}
      </p>
    </div>
  );
}

function EventCard({ event, feature = false }: { event: StoreEvent; feature?: boolean }) {
  if (feature) {
    return (
      <article className="group relative h-full min-h-[34rem] overflow-hidden rounded-4xl border border-line bg-ink shadow-soft lg:min-h-0">
        <Image
          src={event.image}
          alt="Guests browsing handcrafted clothing at a Love Loom studio preview"
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/16 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
          <span className="inline-flex rounded-full border border-white/35 bg-bg/15 px-3 py-1 text-xs font-bold">{event.badge}</span>
          <h3 className="mt-4 max-w-xl font-display text-4xl font-semibold md:text-5xl [text-wrap:balance]">{event.title}</h3>
          <p className="mt-3 max-w-xl text-white/82">{event.description}</p>
          <EventMeta event={event} light />
          <TrackedLink href={event.detailsUrl ?? siteConfig.instagramUrl} target="_blank" eventName="event_update_click" eventParams={{ event_id: event.id, location: "event_feature" }} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent">
            Event updates
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </TrackedLink>
        </div>
      </article>
    );
  }

  return (
    <article className="group grid h-full min-h-72 overflow-hidden rounded-4xl border border-line bg-bg shadow-soft sm:grid-cols-[0.9fr_1.1fr] lg:min-h-0">
      <div className="relative min-h-56 overflow-hidden bg-panel sm:min-h-0">
        <Image
          src={event.image}
          alt={`${event.title} preview`}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
      </div>
      <div className="flex flex-col justify-center p-6">
        <span className="text-xs font-bold text-primary">{event.badge}</span>
        <h3 className="mt-2 font-display text-3xl font-semibold leading-none">{event.title}</h3>
        <EventMeta event={event} />
        <TrackedLink href={event.detailsUrl ?? siteConfig.instagramUrl} target="_blank" eventName="event_update_click" eventParams={{ event_id: event.id, location: "event_card" }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover">
          Event updates
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </TrackedLink>
      </div>
    </article>
  );
}

export function UpcomingEvents() {
  const [leadEvent, ...supportingEvents] = storeEvents;

  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <SectionHeading
          title="Upcoming events & pop-ups"
          copy="Meet the collection in person through studio previews, weekend pop-ups, and thoughtful gatherings around Hyderabad."
          action={
            <TrackedLink href={siteConfig.instagramUrl} target="_blank" eventName="instagram_click" eventParams={{ location: "events_heading" }} className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-bg px-5 py-2.5 text-sm font-bold text-ink transition hover:border-accent hover:bg-surface">
              <Instagram aria-hidden="true" className="size-4" />
              Follow event updates
            </TrackedLink>
          }
        />
        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[310px_310px]">
          <div className="lg:col-span-7 lg:row-span-2">
            <EventCard event={leadEvent} feature />
          </div>
          {supportingEvents.map((event) => (
            <div key={event.id} className="lg:col-span-5">
              <EventCard event={event} />
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-line bg-bg p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <MessageCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
            <p className="max-w-2xl text-sm leading-6 text-muted">
              These are preview event listings. Follow Instagram or message us for confirmed dates, invitations, and venue updates.
            </p>
          </div>
          <TrackedLink href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" eventName="whatsapp_click" eventParams={{ location: "events", message_type: "event_enquiry" }} className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-primary-hover">
            Ask on WhatsApp
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
