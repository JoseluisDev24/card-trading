"use client";

import { useState } from "react";

export default function ProtectionTabs() {
  const [tab, setTab] = useState<"basic" | "premium">("basic");

  return (
    <div className="w-full max-w-xl mx-auto mt-6">
      <div className="relative flex rounded-full bg-gray-100 p-1 overflow-hidden">
        <div
          className={`absolute top-1 bottom-1 w-1/2 rounded-full transition-all duration-300 ease-in-out ${
            tab === "basic" ? "left-1 bg-green-100" : "left-1/2 bg-purple-200"
          }`}
        />

        <button
          onClick={() => setTab("basic")}
          className={`w-1/2 z-10 py-2 rounded-full font-semibold transition-colors duration-300 cursor-pointer ${
            tab === "basic" ? "text-green-900" : "text-gray-500"
          }`}
        >
          Basic Protection
        </button>

        <button
          onClick={() => setTab("premium")}
          className={`w-1/2 z-10 py-2 rounded-full font-semibold transition-colors duration-300 cursor-pointer ${
            tab === "premium" ? "text-purple-900" : "text-gray-500"
          }`}
        >
          Premium Protection
        </button>
      </div>

      <div className="space-y-4 px-4 pt-6">
        <p className="text-xl text-gray-700 font-semibold pt-4">
          What&apos;s included
        </p>

        {tab === "basic" && (
          <>
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h3 className="font-bold text-lg">Basic escrow service</h3>
              <p className="text-gray-600">
                Funds held securely until both parties confirm satisfaction.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h3 className="font-bold text-lg">Basic customer support</h3>
              <p className="text-gray-600">
                Offers around-the-clock assistance to address any issues
                promptly.
              </p>
            </div>
          </>
        )}

        {tab === "premium" && (
          <>
            <p className="text-gray-600 text-sm md:text-base">
              Everything in TradeUp Standard Protection, PLUS the following:
            </p>
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h3 className="font-bold text-lg">Advanced escrow</h3>
              <p className="text-gray-600">
                Includes dispute resolution and faster processing.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h3 className="font-bold text-lg">Priority support</h3>
              <p className="text-gray-600">
                24/7 VIP assistance with quicker response times.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
