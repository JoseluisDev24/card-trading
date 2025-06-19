"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiHome, FiCompass } from "react-icons/fi";
import { GrAdd, GrClose } from "react-icons/gr";
import { PiChatCircleBold, PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { FiTag } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegEdit} from "react-icons/fa";

const FixedMenu = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    {
      href: "/post",
      icon: <FaRegEdit className="text-gray-800 text-2xl" />,
      label: "Post",
      angle: -135,
    },
    {
      href: "/listing",
      icon: <FiTag className="text-gray-800 text-2xl" />,
      label: "Listing",
      angle: -90,
    },
    {
      href: "/iso",
      icon: <IoSearch className="text-gray-800 text-3xl" />,
      label: "ISO",
      angle: -45,
    },
  ];

  return (
    <div className="sticky bottom-0 w-full rounded-t-2xl bg-white shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.2)] z-[1500] md:hidden">
      <div className="relative flex justify-between items-center px-6 h-16 text-gray-800">
        <div className="absolute left-1/2 bottom-16 -translate-x-1/2 pointer-events-none">
          {menuOpen &&
            menuItems.map((item, index) => {
              const radius = 120;
              const angleRad = (item.angle * Math.PI) / 180;
              const x = radius * Math.cos(angleRad);
              const y = radius * Math.sin(angleRad);

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="absolute flex items-center justify-center w-18 h-18 rounded-full bg-white shadow-2xl border border-gray-200 text-black transition-transform duration-300 ease-out pointer-events-auto"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    bottom: `calc(-30px + ${-y}px - 32px)`,
                  }}
                >
                  <div className="flex flex-col items-center">
                    {item.icon}
                    <span className="text-[10px] mt-1">{item.label}</span>
                  </div>
                </Link>
              );
            })}
        </div>

        <div className="flex items-center gap-10">
          <Link href="/home" className="flex flex-col items-center gap-1">
            <FiHome
              className={`text-3xl ${
                isActive("/home") ? "text-orange-500" : "opacity-80"
              }`}
            />
            <span
              className={`text-xs ${
                isActive("/home") ? "text-orange-500" : "opacity-80"
              }`}
            >
              Home
            </span>
          </Link>

          <Link href="/discover" className="flex flex-col items-center gap-1">
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
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full w-16 h-16 shadow-lg flex items-center justify-center bg-orange-500 transition"
          >
            {menuOpen ? (
              <GrClose className="text-3xl text-white" />
            ) : (
              <GrAdd className="text-3xl text-white" />
            )}
          </button>
        </div>

        <div className="flex gap-10">
          <Link
            href="/inbox"
            className="flex flex-col items-center gap-1 opacity-80"
          >
            <PiChatCircleBold
              className={`text-3xl ${
                isActive("/inbox") ? "text-orange-500" : "opacity-90"
              }`}
            />
            <span
              className={`text-xs ${
                isActive("/inbox") ? "text-orange-500" : "opacity-90"
              }`}
            >
              Inbox
            </span>
          </Link>

          <Link href="/trades" className="flex flex-col items-center gap-1">
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
