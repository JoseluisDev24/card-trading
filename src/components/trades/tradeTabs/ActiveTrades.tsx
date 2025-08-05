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
};

export default function ActiveTrades({
  offers,
  getCardById,
  getUserById,
  onCardClick,
}: Props) {
  if (offers.length === 0) {
    return <Typography>No active trades.</Typography>;
  }

  return (
    <>
      <Typography
        variant="h6"
        className="mb-4 font-bold text-gray-700 text-center"
      >
        Active Trades:
      </Typography>

      <div
        className={`grid gap-4 ${
          offers.length === 1
            ? "grid-cols-1 place-items-center"
            : "grid-cols-1 lg:grid-cols-2"
        }`}
      >
        {offers.map((offer) => {
          const offeredCard = getCardById(offer.offeredCardId);
          const requestedCard = getCardById(offer.requestedCardId);
          const fromUser = getUserById(offer.fromUserId);
          const toUser = getUserById(offer.toUserId);

          return (
            <div
              key={offer.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                {fromUser && (
                  <>
                    <Image
                      src={fromUser.avatar}
                      alt={fromUser.name}
                      width={24}
                      height={24}
                      className="rounded-full border"
                    />
                    <span>{fromUser.name}</span>
                  </>
                )}
                <span className="mx-1">↔</span>
                {toUser && (
                  <>
                    <Image
                      src={toUser.avatar}
                      alt={toUser.name}
                      width={24}
                      height={24}
                      className="rounded-full border"
                    />
                    <span>{toUser.name}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                {offeredCard && (
                  <Image
                    src={offeredCard.image}
                    alt={offeredCard.name}
                    width={64}
                    height={80}
                    className="object-cover rounded border cursor-pointer"
                    onClick={() => onCardClick(offer.offeredCardId)}
                  />
                )}
                <span className="text-gray-600 text-lg font-bold">↔</span>
                {requestedCard && (
                  <Image
                    src={requestedCard.image}
                    alt={requestedCard.name}
                    width={64}
                    height={80}
                    className="object-cover rounded border cursor-pointer"
                    onClick={() => onCardClick(offer.requestedCardId)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
