"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiCompass } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { PiChatCircleBold, PiArrowsCounterClockwiseBold } from "react-icons/pi";

const FixedMenu = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="sticky bottom-0 w-full rounded-t-2xl bg-white shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.2)] z-48 md:hidden">
      <div className="relative flex justify-between items-center px-6 h-16 text-gray-800">
        <div className="flex items-center gap-10">
          <Link href={"/"} className="flex flex-col items-center gap-1">
            <FiHome
              className={`text-3xl ${
                isActive("/") ? "text-orange-500" : "opacity-80"
              }`}
            />
            <span
              className={`text-xs ${
                isActive("/") ? "text-orange-500" : "opacity-80"
              }`}
            >
              Home
            </span>
          </Link>

          <Link href={"/discover"} className="flex flex-col items-center gap-1">
            <FiCompass
              className={`text-3xl ${
                isActive("/discover") ? "text-orange-500" : "opacity-80"
              }`}
            />
            <span
              className={`text-xs ${
                isActive("/discover") ? "text-orange-500" : "opacity-80"
              }`}
            >
              Discover
            </span>
          </Link>
        </div>

        <div className="absolute left-1/2 top-0.5 -translate-x-1/2 -translate-y-1/3 z-10">
          <div
            className="rounded-full w-16 h-16 shadow-lg relative"
            style={{ backgroundColor: "rgba(238, 116, 64, 1)" }}
          >
            <GrAdd className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white" />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-1 opacity-80">
            <PiChatCircleBold className="text-3xl" />
            <span className="text-xs">Inbox</span>
          </div>

          <Link href={"/trades"} className="flex flex-col items-center gap-1">
            <PiArrowsCounterClockwiseBold
              className={`text-3xl ${
                isActive("/trades") ? "text-orange-500" : "opacity-80"
              }`}
            />
            <span
              className={`text-xs ${
                isActive("/trades") ? "text-orange-500" : "opacity-80"
              }`}
            >
              Trades
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixedMenu;
