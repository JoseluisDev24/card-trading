import { create } from "zustand";
import type { Card } from "@/types/Card";

type ExchangeStore = {
  selectedCard: Card | null;
  selectedOwnerId: string | null;
  setExchange: (card: Card, ownerId: string) => void;
  clearExchange: () => void;
};

export const useExchangeStore = create<ExchangeStore>((set) => ({
  selectedCard: null,
  selectedOwnerId: null,
  setExchange: (card, ownerId) =>
    set({ selectedCard: card, selectedOwnerId: ownerId }),
  clearExchange: () => set({ selectedCard: null, selectedOwnerId: null }),
}));
