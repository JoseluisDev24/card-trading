"use client";

import { useUserStore } from "@/store/userStore";
import { useExchangeStore } from "@/store/exchangeStore";
import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";
import users from "@/data/users.json";
import type { Card } from "@/types/Card";
import CardModal from "@/components/Modals/CardModal";
import Image from "next/image";
import Link from "next/link";

type OtherUserCardsProps = {
  userId: string;
};

export default function OtherUsersCards({ userId }: OtherUserCardsProps) {
  const { user } = useUserStore();
  const { selectedCard, selectedOwnerId, setExchange, clearExchange } =
    useExchangeStore();

  if (!user) return null;

  const isValidGrade = (
    grade: unknown
  ): grade is "Mint" | "Near Mint" | "Good" => {
    return ["Mint", "Near Mint", "Good"].includes(grade as string);
  };

  const userCardRelations = userCards.filter(
    (relation) => relation.userId === userId
  );

  const userFullCards: Card[] = userCardRelations
    .map((relation) => {
      const card = cards.find((card) => card.id === relation.cardId);
      if (card) {
        const grade = isValidGrade(card.grade) ? card.grade : "Good";
        return { ...card, grade };
      }
      return null;
    })
    .filter((card): card is Card => Boolean(card));

  const owner = users.find((user) => user.id === userId);

  return (
    <div className="py-6">
      {owner && (
        <Link
          href={`/users/${owner.id}`}
          className="flex items-center gap-2 mb-4"
        >
          <Image
            src={owner.avatar}
            alt={owner.name}
            width={32}
            height={32}
            className="rounded-full border"
          />
          <div className="flex flex-col">
            <h2 className="text-md font-bold text-gray-800">{owner.name}</h2>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 max-w-xl">
        {userFullCards.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl relative bg-white w-28 h-40 shadow p-1 flex flex-col items-center cursor-pointer overflow-hidden hover:scale-105 transition-transform duration-200"
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
