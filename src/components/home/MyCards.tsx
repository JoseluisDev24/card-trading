"use client";

import { useEffect, useState } from "react";
import UserSwitcher from "@/components/Users/UserSwitcher";
import {
  getCurrentUserId,
  setCurrentUserId as storeUserId,
} from "@/utils/auth";

import users from "@/data/users.json";
import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";

import type { User } from "@/types/User";
import type { UserCard } from "@/types/UserCard";
import type { Card } from "@/types/Card";

export default function MyCards() {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [showAllCards, setShowAllCards] = useState(false);
  // const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    const storedUserId = getCurrentUserId();
    if (storedUserId) {
      setCurrentUserId(storedUserId);
    } else {
      setCurrentUserId("1");
      storeUserId("1");
    }
  }, []);

  const handleUserChange = (id: string) => {
    setCurrentUserId(id);
    storeUserId(id);
  };

  if (!currentUserId) return null;

  const currentUser: User | undefined = users.find(
    (user) => user.id === currentUserId
  );

  const userCardRelations: UserCard[] = userCards.filter(
    (relation) => relation.userId === currentUserId
  );

  const userFullCards: Card[] = userCardRelations
    .map((relation) => cards.find((card) => card.id === relation.cardId))
    .filter((card): card is Card => Boolean(card));

  const cardsToDisplay = showAllCards
    ? userFullCards
    : userFullCards.slice(0, 4);

  return (
    <div className="py-6">
      <UserSwitcher onSelectUser={handleUserChange} />

      <div className="flex items-center gap-4 pb-4">
        <img
          src={currentUser?.avatar}
          alt={currentUser?.name}
          className="w-10 h-10 rounded-full border"
        />
        <h2 className="text-md font-bold">
          usercards@ <span className="text-gray-700">{currentUser?.name}</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 lg:gap-y-6 max-w-xl">
        {cardsToDisplay.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl bg-white w-28 shadow p-1 flex flex-col items-center cursor-pointer"
            // onClick={() => setSelectedCard(card)}
          >
            <img
              src={card.image}
              alt={card.name}
              className="h-36 object-cover rounded-2xl hover:scale-125 transition-transform duration-400 shadow-xl"
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

      {/* {selectedCard && (
        <CardModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
          currentUserId={currentUserId}
          toUserId={currentUserId} 
        />
      )} */}
    </div>
  );
}
