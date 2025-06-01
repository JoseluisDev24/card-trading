"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const suggestions = [
  {
    id: 1,
    text: "Verify your identity once and unlock $20 off all future holds—just $5",
    image: "/discover/identity.jpg",
  },
  {
    id: 2,
    text: "Trade with confidence—Premium Trade Protection now available for extra security and peace of mind.",
    image: "/discover/protect.avif",
  },
  {
    id: 3,
    text: "Boost your listing now—no upfront payment. Pay only if your item gets traded.",
    image: "/discover/space.avif",
  },
  {
    id: 4,
    text: "Be part of the TradeUp community—join our Discord and connect with other traders.",
    image: "/discover/discord.jpg",
  },
];

export default function Suggestions() {
  return (
    <div className="w-full max-w-6xl mx-auto pt-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: false }}
        slidesPerView={1}
      >
        {suggestions.map((suggestion) => (
          <SwiperSlide key={suggestion.id}>
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden">
              <Image
                src={suggestion.image}
                alt={`Slide ${suggestion.id}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                <div className="flex justify-center items-center bg-black/40 backdrop-blur-xs h-32 p-6 rounded-lg max-w-lg w-full">
                  <p className="text-white text-center text-sm sm:text-lg md:text-xl font-semibold max-w-2xl">
                    {suggestion.text}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}