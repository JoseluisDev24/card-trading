"use client";

import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import { Search } from "../Sidebar/Search";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 w-full flex items-center justify-between py-2 px-6 bg-white shadow-sm text-white h-14 md:h-16 z-48">
        <div className="flex items-center gap-4">
          <IconButton onClick={handleDrawerOpen}>
            <Image
              src="/menu.png"
              width={26}
              height={26}
              alt="menu"
              className="opacity-80"
            />
          </IconButton>

          <Button
            variant="outlined"
            size="small"
            sx={{
              background: "linear-gradient(to right, #FF6a14, #FF6A00)",
              "&:hover": {
                background: "linear-gradient(to right, #FF6a13, #ff9900)",
              },
              borderRadius: "20px",
              color: "white",
              fontSize: "0.8rem",
              fontWeight: "600",
              width: "76px",
              height: "28px",
              textTransform: "none",
            }}
          >
            Sign Up
          </Button>
        </div>
        <div className="hidden lg:flex items-center justify-center w-1/3">
          <Search />
        </div>

        <div className="flex items-center w-32 lg:w-36 py-2 gap-2">
          <Image src="/logoTrade.png" width={20} height={20} alt="logo" />
          <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-800">
            T-Cards
          </h1>
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
