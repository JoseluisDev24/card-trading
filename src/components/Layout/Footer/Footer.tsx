import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaReddit,
  FaLinkedin,
  FaBug,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white px-6 lg:px-20 py-10 lg:pt-24 lg:pb-32 pb-20">
      <div className="max-w-screen-xl mx-auto space-y-14 lg:space-y-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex lg:justify-between gap-4 lg:w-screen h-auto">
            <div className="flex gap-4 items-center justify-center">
              <h2 className="text-md lg:text-2xl font-semibold">
                Start trading now!
              </h2>
              <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2 rounded-full">
                List a card
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaBug className="text-lg text-orange-400" />
              <span className="text-orange-400 font-bold hidden md:flex">
                Report a bug
              </span>
            </div>
          </div>
        </div>

        <hr className="border-white/50 border-1" />

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-4 lg:gap-8 items-start">
            <h2 className="text-3xl font-bold">
              <span className="text-orange-500">↗</span> TradeUp
            </h2>
            <div className="flex gap-4 text-2xl text-white/80">
              <FaInstagram />
              <FaFacebook />
              <FaTiktok />
              <FaReddit />
              <FaLinkedin />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:w-2/3 text-white/90 md:grid-cols-2 lg:grid-cols-2 lg:place-items-end">
            <div>
              <h3 className="text-orange-400 text-md font-bold mb-2">Our site</h3>
              <ul className="space-y-1 text-blue-100">
                <li>
                  <Link href="#">Explore</Link>
                </li>
                <li>
                  <Link href="#">My Account</Link>
                </li>
                <li>
                  <Link href="#">List an Item</Link>
                </li>
                <li>
                  <Link href="#">barter.net</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-400 font-bold mb-2">Support</h3>
              <ul className="space-y-1 text-blue-100">
                <li>
                  <Link href="#">Help</Link>
                </li>
                <li>
                  <Link href="#">About us ↗</Link>
                </li>
                <li>
                  <Link href="#">How it works ↗</Link>
                </li>
                <li>
                  <Link href="#">Contact ↗</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-white/50 border-1 lg:hidden mb-10" />

        <div className="text-center text-md space-y-2 text-white/90 lg:flex lg:justify-between lg:items-center lg:text-md">
          <div className="flex justify-center gap-4">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
          <p>© 2025 TradeUp Exchange Corp</p>
        </div>
      </div>
    </footer>
  );
}
