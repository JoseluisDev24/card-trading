"use client";

import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";
import type { Card } from "@/types/Card";

type Props = {
  currentUserId: string;
  toUserId: string;
  requestedCard: Card;
  onClose: () => void;
};

export default function SelectTargetCardModal({
  currentUserId,
  toUserId,
  requestedCard,
  onClose,
}: Props) {
  const myCards: Card[] = userCards
    .filter((relation) => relation.userId === currentUserId)
    .map((relation) => cards.find((card) => card.id === relation.cardId))
    .filter((card): card is Card => Boolean(card));

  const handleSelectCard = (offeredCardId: string) => {
    console.log("Propuesta de intercambio:");
    console.log("Ofrezco:", offeredCardId);
    console.log("Pido:", requestedCard.id);
    console.log("De:", currentUserId, "para:", toUserId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 rounded-2xl shadow-2xl">
        <h2 className="text-xl font-bold mb-6 text-center">
          Select a card to offer
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {myCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleSelectCard(card.id)}
              className="cursor-pointer rounded-lg p-2 text-center shadow-xl transition"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-40 object-contain mx-auto rounded-md"
              />
              <p className="mt-2 font-semibold text-sm">{card.name}</p>

              <span
                className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${
                  card.grade === "Mint"
                    ? "bg-green-100 text-green-700"
                    : card.grade === "Near Mint"
                    ? "bg-green-100 text-green-700"
                    : card.grade === "Good"
                    ? "bg-yellow-100 text-yellow-400"
                    : "bg-red-100 text-black"
                }`}
              >
                {card.grade}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-lg font-bold text-gray-600 hover:underline hover:text-orange-500 cursor-pointer pb-10 md:pb-6"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
