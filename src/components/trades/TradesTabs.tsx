"use client";

import { useState, useEffect } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { getOffers, updateOfferStatus, deleteOffer } from "@/utils/offers";
import { Offer } from "@/types/Offer";
import cards from "@/data/cards.json";
import users from "@/data/users.json";
import type { Card } from "@/types/Card";
import type { User } from "@/types/User";
import CardModal from "@/components/Modals/CardModal";
import Image from "next/image";

type Props = {
  currentUserId: string;
};

export default function TradesTabs({ currentUserId }: Props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [offersReceived, setOffersReceived] = useState<Offer[]>([]);
  const [offersSent, setOffersSent] = useState<Offer[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const getCardById = (cardId: string): Card | undefined => {
    const card = cards.find((card) => card.id === cardId);
    if (!card) return undefined;

    const validGrades: Array<"Mint" | "Near Mint" | "Good"> = [
      "Mint",
      "Near Mint",
      "Good",
    ];
    const grade = validGrades.includes(
      card.grade as "Mint" | "Near Mint" | "Good"
    )
      ? (card.grade as "Mint" | "Near Mint" | "Good")
      : "Good";

    return { ...card, grade };
  };

  const getUserById = (userId: string): User | undefined => {
    return users.find((user) => user.id === userId);
  };

  const reloadOffers = () => {
    const allOffers = getOffers();
    setOffersReceived(
      allOffers.filter((offer) => offer.toUserId === currentUserId)
    );
    setOffersSent(
      allOffers.filter((offer) => offer.fromUserId === currentUserId)
    );
  };

  useEffect(() => {
    reloadOffers();
  }, [currentUserId]);

  const handleUpdateStatus = (
    offerId: string,
    status: "accepted" | "declined" | "pending"
  ) => {
    if (status === "declined") {
      deleteOffer(offerId);
    } else {
      updateOfferStatus(offerId, status);
    }

    reloadOffers();

    const message =
      status === "pending"
        ? "Offer reverted to pending"
        : status === "declined"
        ? "Offer rejected"
        : `Offer ${status}`;
    toast.success(message);
  };

  const handleCancelOffer = (offerId: string) => {
    deleteOffer(offerId);
    reloadOffers();
    toast("Offer canceled", { icon: "❌" });
  };

  const handleCardClick = (cardId: string) => {
    const card = getCardById(cardId);
    if (card) setSelectedCard(card);
  };

  const tabLabels = [
    <>
      <span className="block">OFFERS</span>
      <span className="block">({offersReceived.length})</span>
    </>,
    <>
      <span className="block">ACTIVE</span>
      <span className="block">
        (
        {
          [...offersReceived, ...offersSent].filter(
            (offer) => offer.status === "accepted"
          ).length
        }
        )
      </span>
    </>,
    <>
      <span className="block">SENT</span>
      <span className="block">({offersSent.length})</span>
    </>,
    "ENDED",
  ];

  const activeOffers = [...offersReceived, ...offersSent].filter(
    (offer) => offer.status === "accepted"
  );

  return (
    <Box className="p-4 flex flex-col lg:justify-center gap-6">
      <Box className="bg-white rounded-full shadow border border-gray-200 w-fit">
        <Tabs
          value={tabIndex}
          onChange={(_, newVal) => setTabIndex(newVal)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#F97316",
              height: "4px",
              borderRadius: "20px",
            },
          }}
        >
          {tabLabels.map((label, i) => (
            <Tab
              key={i}
              label={label}
              disableRipple
              sx={{
                fontSize: "0.875rem",
                height: "60px",
                borderRight:
                  i < tabLabels.length - 1 ? "1px solid #E5E7EB" : "none",
                "&.Mui-selected": {
                  fontWeight: 600,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box className="text-start text-gray-500">
        {tabIndex === 0 && (
          <>
            <Typography variant="h6" className="mb-4 font-bold text-gray-700">
              Offers received:
            </Typography>
            {offersReceived.length === 0 ? (
              <Typography>No offers received yet.</Typography>
            ) : (
              <div className="flex flex-col gap-3">
                {offersReceived.map((offer) => {
                  const offeredCard = getCardById(offer.offeredCardId);
                  const requestedCard = getCardById(offer.requestedCardId);
                  const fromUser = getUserById(offer.fromUserId);

                  return (
                    <div
                      key={offer.id}
                      className="flex flex-col bg-white shadow rounded-lg p-3 border border-gray-200 gap-2"
                    >
                      {fromUser && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Image
                            src={fromUser.avatar}
                            alt={fromUser.name}
                            width={24}
                            height={24}
                            className="rounded-full border"
                          />
                          <span className="font-medium">{fromUser.name}</span>{" "}
                          wants to trade:
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {offeredCard && (
                            <Image
                              src={offeredCard.image}
                              alt={offeredCard.name}
                              width={48}
                              height={64}
                              className="object-cover rounded border cursor-pointer"
                              onClick={() =>
                                handleCardClick(offer.offeredCardId)
                              }
                            />
                          )}
                          <span className="text-gray-600 text-lg font-bold">
                            →
                          </span>
                          {requestedCard && (
                            <Image
                              src={requestedCard.image}
                              alt={requestedCard.name}
                              width={48}
                              height={64}
                              className="object-cover rounded border cursor-pointer"
                              onClick={() =>
                                handleCardClick(offer.requestedCardId)
                              }
                            />
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          {offer.status === "pending" && (
                            <>
                              <button
                                onClick={() =>
                                  handleUpdateStatus(offer.id, "accepted")
                                }
                                className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() =>
                                  handleUpdateStatus(offer.id, "declined")
                                }
                                className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
                              >
                                Reject
                              </button>
                            </>
                          )}
                          {offer.status === "accepted" && (
                            <>
                              <span className="text-green-600 font-semibold">
                                accepted
                              </span>
                              <button
                                onClick={() =>
                                  handleUpdateStatus(offer.id, "pending")
                                }
                                className="bg-gray-300 text-gray-800 text-xs px-3 py-1 rounded hover:bg-gray-400"
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
            )}
          </>
        )}

        {tabIndex === 2 && (
          <>
            <Typography variant="h6" className="mb-4 font-bold text-gray-700">
              Offers sent:
            </Typography>
            {offersSent.length === 0 ? (
              <Typography>No offers sent.</Typography>
            ) : (
              <div className="flex flex-col gap-3">
                {offersSent.map((offer) => {
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

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {offeredCard && (
                            <Image
                              src={offeredCard.image}
                              alt={offeredCard.name}
                              width={48}
                              height={64}
                              className="object-cover rounded border cursor-pointer"
                              onClick={() =>
                                handleCardClick(offer.offeredCardId)
                              }
                            />
                          )}
                          <span className="text-gray-600 text-lg font-bold">
                            →
                          </span>
                          {requestedCard && (
                            <Image
                              src={requestedCard.image}
                              alt={requestedCard.name}
                              width={48}
                              height={64}
                              className="object-cover rounded border cursor-pointer"
                              onClick={() =>
                                handleCardClick(offer.requestedCardId)
                              }
                            />
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          {offer.status === "pending" && (
                            <button
                              onClick={() => handleCancelOffer(offer.id)}
                              className="bg-gray-300 text-gray-800 text-xs px-3 py-1 rounded hover:bg-gray-400"
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
                                onClick={() =>
                                  handleUpdateStatus(offer.id, "pending")
                                }
                                className="bg-gray-300 text-gray-800 text-xs px-3 py-1 rounded hover:bg-gray-400"
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
            )}
          </>
        )}

        {tabIndex === 1 && (
          <>
            <Typography variant="h6" className="mb-4 font-bold text-gray-700">
              Active Trades:
            </Typography>
            {activeOffers.length === 0 ? (
              <Typography>No active trades.</Typography>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeOffers.map((offer) => {
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
                            onClick={() => handleCardClick(offer.offeredCardId)}
                          />
                        )}
                        <span className="text-gray-600 text-lg font-bold">
                          ↔
                        </span>
                        {requestedCard && (
                          <Image
                            src={requestedCard.image}
                            alt={requestedCard.name}
                            width={64}
                            height={80}
                            className="object-cover rounded border cursor-pointer"
                            onClick={() =>
                              handleCardClick(offer.requestedCardId)
                            }
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {tabIndex === 3 && (
          <Typography>There are trades in this filter</Typography>
        )}
      </Box>

      {selectedCard && (
        <CardModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
          readOnly
        />
      )}
    </Box>
  );
}
