"use client";

import SuggestionSlider from "@/components/discover/SuggestionSlider";
import CardsSlider from "@/components/swiper/CardsSlider";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import OffersPending from "@/components/home/OffersPending";
import Link from "next/link";

export default function Discover() {
  const trendingSearches = ["Pokemon", "Glaceon", "Charizard", "Eevee", "Umbreon", "Vaporeon", "Flareon", "Leafeon", "Sylveon"];
  // You can replace the above array with a dynamic fetch from an API if needed
  // For example, you could fetch trending searches from an API endpoint
  return (
    <div>
      <div className="flex flex-col items-center justify-center pb-2">
        <SuggestionSlider />
      </div>
      <div className="flex flex-col px-4 max-w-6xl mx-auto">
        <div className="flex flex-col">
          <span className="text-gray-900 font-bold text-2xl py-3">
            Trending searches
          </span>
          <div className="flex space-x-3 overflow-x-auto gap-2">
            {trendingSearches.map((term) => (
              <button
                key={term}
                className="flex flex-shrink-0 items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-2xl text-sm font-medium hover:bg-gray-300 transition"
              >
                {term}
                <ArrowOutwardIcon className="text-lg" />
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-gray-900 font-bold text-2xl pt-4 pb-2">
              Fresh finds
            </span>
            <Link href="/" className="text-orange-500 font-semibold">
              view all
            </Link>
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
    </div>
  );
}
