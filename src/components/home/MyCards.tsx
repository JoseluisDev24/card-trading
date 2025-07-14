"use client";

import { useState } from "react";
import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";
import type { UserCard } from "@/types/UserCard";
import type { Card } from "@/types/Card";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";

export default function MyCards() {
  const {user} = useUserStore();
  const [showAllCards, setShowAllCards] = useState(false);

  if (!user) return <p className="text-center">No user selected</p>;

  const userCardRelations: UserCard[] = userCards.filter(
    (relation) => relation.userId === user.id
  );

  const userFullCards: Card[] = userCardRelations
    .map((relation) => cards.find((card) => card.id === relation.cardId))
    .filter((card): card is Card => Boolean(card));

  const cardsToDisplay = showAllCards
    ? userFullCards
    : userFullCards.slice(0, 4);

  return (
    <div className="py-6">
      <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-10  pb-4">
        <div className="flex items-center gap-2">
          <Image
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full border"
          />
          <span className="text-gray-700 font-semibold">{user.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 lg:gap-y-6 max-w-xl">
        {cardsToDisplay.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl bg-white w-28 shadow p-1 flex flex-col items-center cursor-pointer"
          >
            <Image
              src={card.image}
              alt={card.name}
              width={144}
              height={144}
              className="object-cover rounded-2xl hover:scale-125 transition-transform duration-400 shadow-xl"
            />
          </div>
        ))}
      </div>

      {userFullCards.length > 4 && (
        <div className="text-end px-4 py-2">
          <button
            onClick={() => setShowAllCards(!showAllCards)}
            className="text-md font-semibold text-orange-600 hover:underline cursor-pointer"
          >
            {showAllCards ? "View less" : "View all"}
          </button>
        </div>
      )}
    </div>
  );
}
