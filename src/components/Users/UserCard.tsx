import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string | number;
  name: string;
  avatar: string;
  listings: number;
  trades: number;
};

export default function UserCard({
  id,
  name,
  avatar,
  listings,
  trades,
}: Props) {
  return (
    <Link href={`/users/${id}`}>
      <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition cursor-pointer w-full">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <div className="flex gap-4 text-sm text-gray-600">
            <p>{listings} listings</p>
            <p>{trades} trades</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
