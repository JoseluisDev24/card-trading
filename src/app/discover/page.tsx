"use client";

import SuggestionSlider from "@/components/discover/SuggestionSlider";
import CardsSlider from "@/components/swiper/CardsSlider";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import OffersPending from "@/components/home/OffersPending";
import Link from "next/link";

export default function Discover() {
  return (
    <div className="flex flex-col px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center py-2">
        <SuggestionSlider />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-900 font-bold text-2xl py-3">
          Trending searches
        </span>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-2xl text-sm font-medium hover:bg-gray-300 transition">
            Pokemon
            <ArrowOutwardIcon className="text-lg" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-2xl text-sm font-medium hover:bg-gray-300 transition">
            Glaceon
            <ArrowOutwardIcon className="text-lg" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-2xl text-sm font-medium hover:bg-gray-300 transition">
            Charizard
            <ArrowOutwardIcon className="text-lg" />
          </button>
        </div>
        <div className="flex items-center justify-between pt-4">
          <span className="text-gray-900 font-bold text-2xl pt-4 pb-2">
            Fresh finds
          </span>
          <Link href="/" className="text-orange-500 font-semibold">view all</Link>
        </div>
        <CardsSlider />
      </div>
      <span className="text-gray-900 font-bold text-2xl pt-4 pb-2">
        Latest topics
      </span>
      <div className="flex flex-col gap-4">
        <OffersPending />
        </div>
    </div>

  );
}
