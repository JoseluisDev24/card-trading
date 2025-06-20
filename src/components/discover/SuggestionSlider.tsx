"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const suggestions = [
  {
    id: 1,
    text: "Verify your identity once and unlock $20 off all future holds—just $5",
    image: "/discover/identity.jpg",
    btnText: "Get Verified Now",
  },
  {
    id: 2,
    text: "Trade with confidence—Premium Trade Protection now available for extra security and peace of mind.",
    image: "/discover/protect.avif",
    btnText: "Get Protected",
  },
  {
    id: 3,
    text: "Boost your listing now—no upfront payment. Pay only if your item gets traded.",
    image: "/discover/space.avif",
    btnText: "Boos My Listings",
  },
  {
    id: 4,
    text: "Be part of the TradeUp community—join our Discord and connect with other traders.",
    image: "/discover/discord.jpg",
    btnText: "Join Discord",
  },
];

export default function Suggestions() {
  return (
    <div className="w-full mx-auto lg:px-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: false }}
        slidesPerView={1}
      >
        {suggestions.map((suggestion) => (
          <SwiperSlide key={suggestion.id}>
            <div className="relative w-full h-96 rounded-b-2xl overflow-hidden">
              <Image
                src={suggestion.image}
                alt={`Slide ${suggestion.id}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 py-8">
                <div className="flex flex-col justify-center items-center gap-6 bg-black/40 h-72 p-6 rounded-2xl max-w-xl w-full">
                  <p className="text-white text-center text-3xl md:text-4xl font-semibold max-w-2xl">
                    {suggestion.text}
                  </p>
                  <Link
                    href={`/discover`}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-6 py-2 rounded-4xl transition-colors"
                  >
                    {suggestion.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
