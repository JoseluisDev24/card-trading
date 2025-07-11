"use client";

import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import { Search } from "../Sidebar/Search";
import { FiCompass } from "react-icons/fi";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useUserStore } from "@/store/userStore";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const {user} = useUserStore(); 

  const isActive = (path: string) => pathname === path;

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 w-full flex items-center justify-between py-1 px-2 md:px-9 bg-white shadow-lg text-white h-11 md:h-14 z-30">
        <div className="flex items-center gap-4">
          <IconButton onClick={handleDrawerOpen}>
            <Image
              src="/menu.png"
              width={30}
              height={30}
              alt="menu"
              className="opacity-80"
              priority
            />
          </IconButton>

          <Link href="/login">
            <Button
              variant="outlined"
              size="small"
              sx={{
                background: "linear-gradient(to right, #FF6a14, #FF6A00)",
                "&:hover": {
                  background: "linear-gradient(to right, #FF6a13, #ff9900)",
                },
                borderRadius: "20px",
                border: "none",
                color: "white",
                fontSize: "0.8rem",
                fontWeight: "600",
                width: "83px",
                height: "30px",
                padding: "3px",
                textTransform: "none",
              }}
            >
              Sign Up
            </Button>
          </Link>
          <Link href={"/discover"} className="hidden sm:flex">
            <FiCompass
              className={`text-3xl ${
                isActive("/discover")
                  ? "text-orange-500"
                  : "text-gray-800 opacity-80"
              }`}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center w-2/5">
          <Search />
        </div>
        <div className="flex justify-between items-center gap-4">
          {/* <Link href={"/cart"}>
            <IconButton>
              <ShoppingCartOutlinedIcon
                className={`text-gray-600 cursor-pointer hover:text-orange-500 transition duration-200${
                  isActive("/cart")
                    ? "text-orange-500"
                    : "text-gray-800 opacity-80"
                } `}
              />
            </IconButton>
          </Link> */}
          {user && (
            <Link href={`/users/${user.id}`}>
              <Image
                src={user.avatar}
                width={40}
                height={40}
                alt={user.name}
                className="w-8 h-8 rounded-full border cursor-pointer"
              />
            </Link>
          )}
          <Link
            href={"/"}
            className="flex items-center w-32 lg:w-36 py-2 gap-2"
          >
            <Image src="/logoTrade.png" width={20} height={20} alt="logo" />
            <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
              TradeUp
            </h1>
          </Link>
        </div>
      </header>

      <Sidebar
        open={drawerOpen}
        onClose={handleDrawerClose}
        toggleDrawer={(open) => setDrawerOpen(open)}
      />
    </>
  );
};

export default Header;
