"use client";

import { useState } from "react";

import users from "@/data/users.json";
import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";

import type { User } from "@/types/User";
import type { UserCard } from "@/types/UserCard";
import type { Card } from "@/types/Card";

const currentUserId = "2";

export default function MyCards() {
  const [showAll, setShowAll] = useState(false);

  const currentUser: User | undefined = users.find(
    (u) => u.id === currentUserId
  );

  const myCards: UserCard[] = userCards.filter(
    (uc) => uc.userId === currentUserId
  );

  const myFullCards: Card[] = myCards
    .map((uc) => cards.find((c) => c.id === uc.cardId))
    .filter((c): c is Card => Boolean(c));

  const visibleCards = showAll ? myFullCards : myFullCards.slice(0, 4);

  return (
    <div className="py-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={currentUser?.avatar}
          alt={currentUser?.name}
          className="w-10 h-10 rounded-full border"
        />
        <h2 className="text-md font-bold">
          <span className=" text-gray-500 font-semibold">usercards@</span>{" "}
          {currentUser?.name}
        </h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl bg-white shadow p-1 flex flex-col items-center text-center"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-28 h-36 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {myFullCards.length > 4 && (
        <div className="mt-3 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-orange-600 hover:underline font-medium"
          >
            {showAll ? "View less" : "View all"}
          </button>
        </div>
      )}
    </div>
  );
}
