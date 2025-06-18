export type OfferStatus = "pending" | "accepted" | "declined";

export type Offer = {
  id: string;
  fromUserId: string;
  toUserId: string;
  offeredCardId: string;
  requestedCardId: string;
  status: OfferStatus;
};
