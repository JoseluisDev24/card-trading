"use client";

import { useState } from "react";
import { sections } from "@/data/help/helpSections";

export default function Help() {
  const [active, setActive] = useState<string | null>("How it works");

  return (
    <div className="flex flex-col items-center min-h-screen py-6 px-4 lg:py-8 bg-white">
      <section className="w-full flex flex-col items-center">
        <div className="flex flex-col gap-3 items-center justify-center bg-[url('/city.jpg')] bg-cover bg-center pb-16 lg:h-56">
          <h1 className="text-4xl font-bold">Help center</h1>
          <p className="text-2xl font-semibold">
            Have questions? you&apos;re in the right place!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl -mt-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`flex justify-center items-center h-24 p-4 rounded-3xl shadow transition-all w-full min-w-[165px] whitespace-nowrap cursor-pointer 
                ${
                  active === section.title
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 hover:bg-gray-200 hover:shadow-lg"
                }`}
              onClick={() => setActive(section.title)}
            >
              <h2
                className={` ${
                  active === section.title
                    ? "text-2xl font-bold"
                    : "text-xl font-bold"
                }`}
              >
                {section.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col max-w-xs md:max-w-4xl">
          {sections.find((s) => s.title === active)?.content}
        </div>
      </section>
    </div>
  );
}
