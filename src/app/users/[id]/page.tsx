import { notFound } from "next/navigation";
import users from "@/data/users.json";
import userCards from "@/data/userCards.json";
import cards from "@/data/cards.json";
import OffersPending from "@/components/offers/OffersPending";
import type { Card } from "@/types/Card";

type Props = { params: Promise<{ id: string }> };

export default async function UserPage({ params }: Props) {
  const { id: userId } = await params;
  const user = users.find((user) => user.id === userId);

  if (!user) return notFound();

  const userCardRelations = userCards.filter(
    (relation) => relation.userId === userId
  );

  const userFullCards: Card[] = userCardRelations
    .map((relation) => cards.find((card) => card.id === relation.cardId))
    .filter((card): card is Card => Boolean(card));

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-14 h-14 rounded-full border"
        />
        <h1 className="text-2xl font-bold">{user.name}</h1>
      </div>
      <div className="lg:flex justify-evenly">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            My Cards
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 lg:gap-y-6 max-w-xl">
            {userFullCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl bg-white w-28 shadow p-1 flex flex-col items-center cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-36 object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Offers received</h2>
          <OffersPending userId={userId} />
        </section>
      </div>
    </div>
  );
}
