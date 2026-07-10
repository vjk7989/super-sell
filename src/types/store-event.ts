export type StoreEventStatus = "upcoming" | "live" | "completed";

export interface StoreEvent {
  id: string;
  title: string;
  dateRange: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  image: string;
  status: StoreEventStatus;
  badge?: string;
  isDemo?: boolean;
  detailsUrl?: string;
}
