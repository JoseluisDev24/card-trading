"use client";

import { FiHome } from "react-icons/fi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { PiChatCircleBold } from "react-icons/pi";
import { FaArrowsRotate } from "react-icons/fa6";

const FixedMenu = () => {
  return (
    <div className="sticky bottom-0 w-full rounded-t-2xl bg-white shadow-sm z-50 md:hidden">
      <div className="relative flex justify-between items-center px-6 h-20 text-gray-800">
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-1">
            <FiHome className="text-3xl" />
            <span className="text-sm">Home</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <RiCompassDiscoverLine className="text-4xl" />
            <span className="text-sm">Discover</span>
          </div>
        </div>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 z-10">
          <div
            className="rounded-full w-16 h-16 shadow-lg relative"
            style={{ backgroundColor: "rgba(238, 116, 64, 1)" }}
          >
            <GrAdd className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white" />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-1">
            <PiChatCircleBold className="text-3xl" />
            <span className="text-sm">Inbox</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaArrowsRotate className="text-3xl" />
            <span className="text-sm">Trades</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedMenu;
