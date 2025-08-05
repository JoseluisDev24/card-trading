"use client";

import { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import toast from "react-hot-toast";
import { getOffers, updateOfferStatus, deleteOffer } from "@/utils/offers";
import { Offer } from "@/types/Offer";
import cards from "@/data/cards.json";
import users from "@/data/users.json";
import type { Card } from "@/types/Card";
import type { User } from "@/types/User";
import CardModal from "@/components/Modals/CardModal";
import OffersReceived from "./OffersReceived";
import OffersSent from "./OffersSent";
import ActiveTrades from "./ActiveTrades";
import EndedTrades from "./EndedTrades";

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
    <Box className="p-4 flex flex-col items-center gap-6">
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
                height: "50px",
                minWidth: "70px",
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

      <Box className="text-start text-gray-500 w-full">
        {tabIndex === 0 && (
          <OffersReceived
            offers={offersReceived}
            getCardById={getCardById}
            getUserById={getUserById}
            onCardClick={handleCardClick}
            onUpdateStatus={handleUpdateStatus}
          />
        )}

        {tabIndex === 1 && (
          <ActiveTrades
            offers={activeOffers}
            getCardById={getCardById}
            getUserById={getUserById}
            onCardClick={handleCardClick}
          />
        )}

        {tabIndex === 2 && (
          <OffersSent
            offers={offersSent}
            getCardById={getCardById}
            getUserById={getUserById}
            onCardClick={handleCardClick}
            onCancelOffer={handleCancelOffer}
            onUpdateStatus={handleUpdateStatus}
          />
        )}

        {tabIndex === 3 && <EndedTrades />}
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
