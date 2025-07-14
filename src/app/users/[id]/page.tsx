"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";
import OffersPending from "@/components/offers/OffersPending";
import type { Card } from "@/types/Card";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";

export default function UserPage() {
  const { user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) return null;

  const userCardRelations = userCards.filter(
    (relation) => relation.userId === user.id
  );

  const userFullCards: Card[] = userCardRelations
    .map((relation) => cards.find((card) => card.id === relation.cardId))
    .filter((card): card is Card => Boolean(card));

  return (
    <div className="lg:p-6">
      <div className="flex gap-4 mb-4 px-2 lg:px-20 py-4 h-20 lg:h-36 md:rounded-t-4xl bg-blue-200 relative">
        <div className="flex flex-col justify-center items-center lg:gap-4 absolute bottom-[-150%] lg:bottom-[-100%]">
          <Image
            src={user.avatar}
            alt={user.name}
            width={88}
            height={88}
            className="lg:w-44 lg:h-44 rounded-full border-white border-4"
          />
          <h1 className="text-xl lg:hidden font-bold">{user.name}</h1>
          <div className="text-lg md:text-xl font-semibold flex gap-4 lg:gap-8 justify-between">
            <div className="flex flex-col items-center justify-center text-center">
              <span>{user.listings}</span>
              <span className="text-sm text-gray-600">Listings</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span>{user.trades}</span>
              <span className="text-sm text-gray-600">Trades</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-36 border-b border-gray-300 relative"></div>

      <div className="lg:flex justify-evenly p-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">My Cards</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 lg:gap-y-6 max-w-xl">
            {userFullCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl bg-white w-28 shadow p-1 flex flex-col items-center cursor-pointer"
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  width={144}
                  height={144}
                  className="object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Offers received</h2>
          <OffersPending userId={user.id} />
        </section>
      </div>
    </div>
  );
}
