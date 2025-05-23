"use client";

import { IoFilter } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 lg:px-70 lg:py-14 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Public feed</h1>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 transition">
          <IoFilter className="text-lg" />
          Filters
        </button>
      </div>
      <button
        style={{ backgroundColor: "#ffe7e7" }}
        className="flex items-center justify-between px-2 py-1 w-40 text-orange-700 rounded-xl text-md font-medium hover:bg-gray-300 transition"
      >
        📣 Announcement
      </button>
      <div className="flex flex-col pt-3">
        <span className="font-bold text-lg text-gray-800">
          Trading with someone new? Premium’s on us!
        </span>
        <span>
          When either trader has zero completed trades, Premium protection is
          completely free. Enjoy a secure, worry-free experience. Welcome
          newcomers to the TradeUp community! 🤝✨
        </span>
      </div>
    </div>
  );
}
