"use client";

import { useState } from "react";
import type { Card } from "@/types/Card";
import SelectTargetCardModal from "@/components/Modals/SelectTargetCardModal";

type Props = {
  card: Card;
  currentUserId: string;
  toUserId: string;
  onClose: () => void;
};

export default function CardModal({
  card,
  currentUserId,
  toUserId,
  onClose,
}: Props) {
  const [selectingCard, setSelectingCard] = useState(false);

  const handleStartExchange = () => {
    setSelectingCard(true);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-2 md:px-4">
        <div className="bg-white rounded-2xl shadow-xl shadow-black/40 w-full h-[84vh] overflow-auto md:max-w-[60vw] md:max-h-[68vh] flex flex-col lg:flex-row items-center justify-center gap-4  lg:gap-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-gray-400 hover:text-black text-3xl lg:text-4xl font-bold cursor-pointer"
          >
            &times;
          </button>

          <img
            src={card.image}
            alt={card.name}
            className="w-54 h-70 lg:w-80 lg:h-[28rem] object-cover rounded-2xl hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/20 "
          />

          <div className="text-center lg:text-start max-w-lg lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4 px-2">
            <h2 className="text-2xl lg:text-4xl font-bold pb-2">{card.name}</h2>

            {card.description && (
              <p className="text-gray-600 text-xl lg:text-2xl pb-2">
                {card.description}
              </p>
            )}

            <span
              className={`inline-block lg:text-xl font-medium px-4 py-1 mb-4 rounded-full ${
                card.status === "available"
                  ? "bg-green-100 text-green-700"
                  : card.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {card.status === "available"
                ? "Disponible"
                : card.status === "pending"
                ? "Pendiente"
                : "Vendida"}
            </span>

            <div>
              <button
                onClick={handleStartExchange}
                className="px-6 py-3 bg-orange-500 text-white rounded-4xl text-md lg:text-2xl hover:bg-orange-600 cursor-pointer"
              >
                Proponer intercambio
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectingCard && (
        <SelectTargetCardModal
          requestedCard={card}
          currentUserId={currentUserId}
          toUserId={toUserId}
          onClose={() => setSelectingCard(false)}
        />
      )}
    </>
  );
}
