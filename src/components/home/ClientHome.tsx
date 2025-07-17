"use client";

import OtherUsersCards from "@/components/Users/OtherUsersCards";
import OffersPending from "@/components/offers/OffersPending";
import UserPostComponent from "@/components/Users/UserPostComponent";
import userPosts from "@/data/userPosts.json";
import { Button } from "@mui/material";
import { IoFilter } from "react-icons/io5";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import UserSwitcher from "../Users/UserSwitcher";
import Image from "next/image";

export default function ClientHome() {
  const { user } = useUserStore();

  if (!user) {
    return (
      <div className="flex flex-col items-center py-10 text-gray-600 text-lg">
        <p>Select a user to continue</p>
        <UserSwitcher />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen p-4 lg:px-70 lg:py-14 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Public feed</h1>
        <div className="flex items-center justify-center gap-2">
          <Link href="/">
            <button className="px-3 py-1 text-white font-bold rounded-full bg-gradient-to-b from-[#ff7900] to-[#ff5c00] hover:brightness-110 transition hidden lg:flex justify-between gap-1 items-center cursor-pointer">
              + Create post
            </button>
          </Link>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 transition">
            <IoFilter className="text-lg" />
            Filters
          </button>
        </div>
      </div>

      <Button
        sx={{
          textTransform: "none",
          backgroundColor: "#ee744029",
          color: "#a75f3b",
          borderRadius: "16px",
          fontSize: "0.9rem",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#ee944029",
          },
        }}
        className="flex items-center justify-between w-40 h-7"
      >
        📣 Announcement
      </Button>

      <div className="flex flex-col py-3">
        <span className="font-bold text-lg text-gray-800">
          Trading with someone new? Premium’s on us!
        </span>
        <span className="py-1">
          When either trader has zero completed trades, Premium protection is
          completely free. Enjoy a secure, worry-free experience. Welcome
          newcomers to the TradeUp community! 🤝✨
        </span>
      </div>

      <div className="max-h-1 min-h-1 bg-gray-200 w-full"></div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-800"></h2>
          Welcome,
          <Link href={`/users/${user.id}`} className="flex items-center gap-2">
            <Image
              src={user.avatar}
              alt={user.name}
              width={32}
              height={32}
              className="rounded-full border"
            />

            {user.name}
          </Link>
        </div>
        <UserSwitcher />
      </div>
      <div className="flex flex-col gap-4 mb-6">
          {userPosts.map((post) => (
            <UserPostComponent
              key={post.id}
              post={post}
            />
          ))}
      </div>
      <OtherUsersCards />
      <OffersPending userId={user.id} />
    </div>
  );
}
