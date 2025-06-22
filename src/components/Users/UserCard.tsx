import Image from "next/image";
import { SwapHoriz } from "@mui/icons-material";

type Props = {
  name: string;
  image: string;
  listings: number;
  trades: number;
};

export default function UserCard({ name, image, listings, trades }: Props) {
  return (
    <div className="flex bg-gray-100 rounded-xl overflow-hidden shadow-lg mb-4 h-28 lg:h-40">
      <div className="relative w-32 lg:w-40 h-full flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 160px, 128px"
        />
      </div>
      <div className="p-3 flex flex-col justify-start flex-1">
        <h2 className="font-semibold text-lg text-slate-900">{name}</h2>
        <div className="text-[#001f3f] text-sm flex gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <div className="flex text-gray-500 text-sm gap-4 mt-2">
          <div className="flex items-center gap-1">
            <span>{listings} listings</span>
          </div>
          <div className="flex items-center gap-1">
            <SwapHoriz fontSize="small" />
            <span>{trades} trades</span>
          </div>
        </div>
      </div>
    </div>
  );
}
