"use client";

import Image from "next/image";
import { Typography } from "@mui/material";
import type { Offer } from "@/types/Offer";
import type { Card } from "@/types/Card";
import type { User } from "@/types/User";

type Props = {
  offers: Offer[];
  getCardById: (cardId: string) => Card | undefined;
  getUserById: (userId: string) => User | undefined;
  onCardClick: (cardId: string) => void;
  onCancelOffer: (offerId: string) => void;
  onUpdateStatus: (offerId: string, status: "pending") => void;
};

export default function OffersSent({
  offers,
  getCardById,
  getUserById,
  onCardClick,
  onCancelOffer,
  onUpdateStatus,
}: Props) {
  if (offers.length === 0) {
    return <Typography>No offers sent.</Typography>;
  }

  return (
    <>
      <Typography variant="h6" className="mb-4 font-bold text-gray-700">
        Offers sent:
      </Typography>

      <div className="flex flex-col gap-3">
        {offers.map((offer) => {
          const offeredCard = getCardById(offer.offeredCardId);
          const requestedCard = getCardById(offer.requestedCardId);
          const toUser = getUserById(offer.toUserId);

          return (
            <div
              key={offer.id}
              className="flex flex-col bg-white shadow rounded-lg p-3 border border-gray-200 gap-2"
            >
              {toUser && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  Sent to:
                  <Image
                    src={toUser.avatar}
                    alt={toUser.name}
                    width={24}
                    height={24}
                    className="rounded-full border"
                  />
                  <span className="font-medium">{toUser.name}</span>
                </div>
              )}

              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-1">
                  {offeredCard && (
                    <Image
                      src={offeredCard.image}
                      alt={offeredCard.name}
                      width={48}
                      height={64}
                      className="object-cover rounded-xl border cursor-pointer"
                      onClick={() => onCardClick(offer.offeredCardId)}
                    />
                  )}
                  <span className="text-gray-600 text-lg font-bold">→</span>
                  {requestedCard && (
                    <Image
                      src={requestedCard.image}
                      alt={requestedCard.name}
                      width={48}
                      height={64}
                      className="object-cover rounded-xl border cursor-pointer"
                      onClick={() => onCardClick(offer.requestedCardId)}
                    />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {offer.status === "pending" && (
                    <button
                      onClick={() => onCancelOffer(offer.id)}
                      className="bg-gray-500 text-white text-xs px-3 py-1 rounded-4xl lg:text-lg hover:bg-gray-600 cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}

                  {offer.status === "accepted" && (
                    <>
                      <span className="text-green-600 font-semibold">
                        accepted
                      </span>
                      <button
                        onClick={() => onUpdateStatus(offer.id, "pending")}
                        className="bg-gray-500 text-white text-xs px-3 py-1 rounded-4xl lg:text-lg hover:bg-gray-600 cursor-pointer"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
