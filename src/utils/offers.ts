import { Offer, OfferStatus } from "@/types/Offer";

const OFFERS_KEY = "offers";

export function getOffers(): Offer[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(OFFERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveOffers(offers: Offer[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(OFFERS_KEY, JSON.stringify(offers));
}

export function createOffer(data: Omit<Offer, "id" | "status">): Offer {
  const offers = getOffers();
  const newOffer: Offer = {
    ...data,
    id: crypto.randomUUID(),
    status: "pending",
  };
  saveOffers([...offers, newOffer]);
  return newOffer;
}

export function updateOfferStatus(
  id: string,
  status: OfferStatus
): Offer | null {
  if (typeof window === "undefined") return null;
  const offers = getOffers();
  const index = offers.findIndex((offer) => offer.id === id);
  if (index === -1) return null;

  offers[index] = { ...offers[index], status };
  saveOffers(offers);
  return offers[index];
}

export function deleteOffer(id: string): void {
  if (typeof window === "undefined") return;
  const offers = getOffers();
  const updated = offers.filter((offer) => offer.id !== id);
  saveOffers(updated);
}