import type { StoreEvent } from "@/types/store-event";
import { siteConfig } from "@/config/site";

export const storeEvents: StoreEvent[] = [
  {
    id: "event-studio-preview",
    title: "Love Loom Studio Preview",
    dateRange: "Preview dates: 22-23 Aug",
    time: "11:00 AM - 7:00 PM",
    venue: "Love Loom Studio",
    address: siteConfig.address,
    description: "A first look at soft linen layers, hand-finished details, and our newest everyday edit.",
    image: "/events/studio-preview-optimized.webp",
    status: "upcoming",
    badge: "Preview event",
    isDemo: true,
    detailsUrl: siteConfig.instagramUrl
  },
  {
    id: "event-weekend-popup",
    title: "Banjara Hills Weekend Pop-Up",
    dateRange: "Preview dates: 12-13 Sep",
    time: "10:30 AM - 6:30 PM",
    venue: "Banjara Hills, Hyderabad",
    address: siteConfig.address,
    description: "Browse a relaxed weekend selection of breathable separates, dresses, and thoughtful gifts.",
    image: "/events/weekend-popup-optimized.webp",
    status: "upcoming",
    badge: "Preview event",
    isDemo: true,
    detailsUrl: siteConfig.instagramUrl
  },
  {
    id: "event-festive-open-house",
    title: "Festive Edit Open House",
    dateRange: "Preview date: 3 Oct",
    time: "11:00 AM - 8:00 PM",
    venue: "Love Loom Studio",
    address: siteConfig.address,
    description: "An intimate festive preview featuring embroidered textures, considered colour, and personal styling.",
    image: "/events/festive-open-house-optimized.webp",
    status: "upcoming",
    badge: "Preview event",
    isDemo: true,
    detailsUrl: siteConfig.instagramUrl
  }
];
