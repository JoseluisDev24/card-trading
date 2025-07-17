"use client";

import users from "@/data/users.json";
import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";
import type { Card } from "@/types/Card";
import CardModal from "@/components/Modals/CardModal";
import { useUserStore } from "@/store/userStore";
import { useExchangeStore } from "@/store/exchangeStore";
import Image from "next/image";

export default function OtherUsersCards() {
  const user = useUserStore((state) => state.user);
  const { selectedCard, selectedOwnerId, setExchange, clearExchange } =
    useExchangeStore();

  if (!user) return null;

  const isValidGrade = (
    grade: unknown
  ): grade is "Mint" | "Near Mint" | "Good" => {
    return ["Mint", "Near Mint", "Good"].includes(grade as string);
  };

  const cardsByUser: Record<string, Card[]> = {};

  userCards.forEach((relation) => {
    if (relation.userId !== user.id) {
      const card = cards.find((c) => c.id === relation.cardId);
      if (card) {
        const grade = isValidGrade(card.grade) ? card.grade : "Good";
        if (!cardsByUser[relation.userId]) cardsByUser[relation.userId] = [];
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
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={owner.avatar}
                  alt={owner.name}
                  width={32}
                  height={32}
                  className="rounded-full border"
                />
                <div className="flex flex-col">
                <h2 className="text-md font-bold text-gray-800">
                  {owner.name}
                </h2>
                <span className="text-sm text-gray-600">
                  
                </span>
                </div>
              </div>
            )}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-w-xl">
              {userCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl bg-white w-28 h-40 shadow p-1 flex flex-col items-center cursor-pointer overflow-hidden relative"
                  onClick={() => setExchange(card, userId)}
                >
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="rounded-2xl object-cover"
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
          onClose={clearExchange}
          currentUserId={user.id}
          toUserId={selectedOwnerId}
        />
      )}
    </div>
  );
}
