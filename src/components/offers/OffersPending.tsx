"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import users from "@/data/users.json";
import cards from "@/data/cards.json";
import { getOffers } from "@/utils/offers";
import PostAction from "@/components/posts/PostActions";

type Props = {
  userId: string; 
};

export default function OffersPending({ userId }: Props) {
  const offers = getOffers().filter(
    (offer) => offer.toUserId === userId && offer.status === "pending"
  );

  if (offers.length === 0) {
    return (
      <div className="flex flex-col items-center py-3 w-full">
        <p className="text-gray-600">No pending offers.</p>
      </div>
    );
  }

  const offer = offers[0];
  const fromUser = users.find((user) => user.id === offer.fromUserId);
  const toUser = users.find((user) => user.id === offer.toUserId);
  const offeredCard = cards.find((card) => card.id === offer.offeredCardId);
  const requestedCard = cards.find((card) => card.id === offer.requestedCardId);

  return (
    <div className="flex flex-col items-center py-3 w-full">
      <div className="flex flex-col items-start">
        <div>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "#fff5d3",
              color: "#ee7440",
              borderRadius: "16px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#fff593",
              },
            }}
            className="flex items-center justify-between w-32 h-7"
          >
            Offer pending
          </Button>
        </div>

        <div className="flex py-4 justify-center items-center">
          <div className="max-w-lg flex justify-between items-center gap-4 text-sm">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col items-start gap-3">
                <div className="flex gap-2">
                  {offeredCard && (
                    <Image
                      src={offeredCard.image}
                      alt={offeredCard.name}
                      width={90}
                      height={0}
                      className="shadow-lg"
                      style={{ height: "auto", borderRadius: "16px" }}
                    />
                  )}
                </div>
                <div className="flex justify-center items-center gap-2">
                  {fromUser && (
                    <>
                      <Image
                        src={fromUser.avatar}
                        alt="User"
                        width={16}
                        height={16}
                        className="rounded-full"
                      />
                      <span className="font-semibold text-md text-gray-800">
                        {fromUser.name}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <SyncAltIcon className="text-gray-400" />

            <div className="flex flex-col justify-center items-center gap-2">
              {requestedCard && (
                <Image
                  src={requestedCard.image}
                  alt={requestedCard.name}
                  width={90}
                  height={0}
                  className="shadow-lg"
                  style={{ height: "auto", borderRadius: "16px" }}
                />
              )}
              <div className="flex justify-center items-center gap-2">
                {toUser && (
                  <>
                    <Image
                      src={toUser.avatar}
                      alt="User"
                      width={16}
                      height={16}
                      className="rounded-full"
                    />
                    <span className="font-semibold text-md text-gray-800">
                      {toUser.name}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PostAction />
    </div>
  );
}
