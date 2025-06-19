"use client";

import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="flex flex-col items-center p-4 lg:px-70 bg-animated-gradient min-h-screen">
      <h2 className="text-4xl lg:text-6xl w-96 lg:w-full pt-6 lg:pt-12 text-center font-extrabold text-gray-900">
        Pokémon card trading, simplified.
      </h2>

      <p className="mt-4 text-sm lg:text-xl text-gray-700 text-center">
        Join 15,000+ successful trades in a community built just for card
        lovers. No Middleman. 90% of our trades are complete in 4 days or less!
      </p>

      <Link href={"/login"}
       className="mt-6 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-b from-[#ff7900] to-[#ff5c00] hover:brightness-110 transition">
        Start Trading Free
      </Link>
      <div className="w-11/12 pt-4">
        <Image
          src="/landing.avif"
          alt="Offer"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
