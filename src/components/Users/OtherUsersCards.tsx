"use client";

import { useState } from "react";
import users from "@/data/users.json";
import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";
import type { Card } from "@/types/Card";
import CardModal from "@/components/Modals/CardModal";

type Props = {
  currentUserId: string;
};

export default function OtherUsersCards({ currentUserId }: Props) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [selectedOwnerId, setSelectedOwnerId] = useState<string | null>(null);

  const isValidGrade = (
    grade: unknown
  ): grade is "Mint" | "Near Mint" | "Good" => {
    return ["Mint", "Near Mint", "Good"].includes(grade as string);
  };

  const cardsByUser: Record<string, Card[]> = {};

  userCards.forEach((relation) => {
    if (relation.userId !== currentUserId) {
      const card = cards.find((c) => c.id === relation.cardId);
      if (card) {
        const grade = isValidGrade(card.grade) ? card.grade : "Good";

        if (!cardsByUser[relation.userId]) {
          cardsByUser[relation.userId] = [];
        }

        cardsByUser[relation.userId].push({ ...card, grade });
      }
    }
  });

  return (
    <div className="py-6">
      {Object.entries(cardsByUser).map(([userId, userCards]) => {
        const owner = users.find((u) => u.id === userId);
        return (
          <div key={userId} className="mb-6">
            {owner && (
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={owner.avatar}
                  alt={owner.name}
                  className="w-8 h-8 rounded-full border"
                />
                <h2 className="text-md font-bold text-gray-800">
                  {owner.name}
                </h2>
              </div>
            )}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-w-xl">
              {userCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl bg-white w-28 shadow p-1 flex flex-col items-center cursor-pointer"
                  onClick={() => {
                    setSelectedCard(card);
                    setSelectedOwnerId(userId);
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-36 object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {selectedCard && selectedOwnerId && (
        <CardModal
          card={selectedCard}
          onClose={() => {
            setSelectedCard(null);
            setSelectedOwnerId(null);
          }}
          currentUserId={currentUserId}
          toUserId={selectedOwnerId}
        />
      )}
    </div>
  );
}
