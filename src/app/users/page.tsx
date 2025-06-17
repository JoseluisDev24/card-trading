import { SearchUsers } from "@/components/Users/SearchUsers";
import UserCard from "@/components/Users/UserCard";

export const metadata = {
  title: "All users - TradeUp",
  description: "Conocé más sobre nuestro equipo y visión.",
};

const users = [
  {
    name: "Paolos",
    image: "https://unavatar.io/github/JoseluisDev24",
    listings: 276,
    trades: 256,
  },
  {
    name: "Wubungus",
    image: "https://unavatar.io/github/GonzaloRosano",
    listings: 179,
    trades: 162,
  },
  {
    name: "Matt",
    image: "/cards/packcard.jpeg",
    listings: 6,
    trades: 114,
  },
  {
    name: "Paolos",
    image: "https://unavatar.io/github/JoseluisDev24",
    listings: 276,
    trades: 256,
  },
  {
    name: "Wubungus",
    image: "https://unavatar.io/github/GonzaloRosano",
    listings: 179,
    trades: 162,
  },
  {
    name: "Matt",
    image: "/cards/packcard.jpeg",
    listings: 6,
    trades: 114,
  },
];

export default function UsersPage() {
  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-16 w-full">
      <h1 className="text-4xl font-bold">Users</h1>
      <p className="pt-2 text-lg font-semibold">
        Click a trader to view their listings and make an offer
      </p>
      <div className="flex items-center justify-center mt-4 mb-8 w-full lg:w-80">
        <SearchUsers />
      </div>
      <div className="flex justify-center w-full px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-6 w-full">
          {users.map((user) => (
            <UserCard key={user.name} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
}
