import users from "@/data/users.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import OtherUsersCards from "@/components/Users/OtherUsersCards";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  if (!id) return notFound();

  const profileUser = users.find((user) => String(user.id) === String(id));
  if (!profileUser) return notFound();

  return (
    <div className="lg:p-6">
      <div className="flex gap-4 mb-4 px-2 lg:px-20 py-4 h-20 lg:h-36 md:rounded-t-4xl bg-blue-200 relative">
        <div className="flex flex-col justify-center items-center lg:gap-4 absolute bottom-[-150%] lg:bottom-[-100%]">
          <Image
            src={profileUser.avatar}
            alt={profileUser.name}
            width={88}
            height={88}
            className="lg:w-44 lg:h-44 rounded-full border-white border-4"
          />
          <h1 className="text-xl lg:hidden font-bold">{profileUser.name}</h1>
          <div className="text-lg md:text-xl font-semibold flex gap-4 lg:gap-8 justify-between">
            <div className="flex flex-col items-center justify-center text-center">
              <span>{profileUser.listings}</span>
              <span className="text-sm text-gray-600">Listings</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span>{profileUser.trades}</span>
              <span className="text-sm text-gray-600">Trades</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-36 border-b border-gray-300 relative"></div>

      <div className="lg:flex justify-center p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            {profileUser.name}&apos;s Cards
          </h2>
          <OtherUsersCards userId={id} />
        </section>
      </div>
    </div>
  );
}
