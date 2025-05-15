"use client";

import { IoFilter } from "react-icons/io5";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Public feed</h1>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-300 transition">
          <IoFilter className="text-lg" />
          Filtros
        </button>
      </div>
      <button
        style={{ backgroundColor: "#ffe7e7" }}
        className="flex items-center justify-between px-2 py-1 w-36 text-amber-950 rounded-md text-sm font-medium hover:bg-gray-300 transition"
      >
        📣 Announcement
      </button>
    </div>
  );
}
