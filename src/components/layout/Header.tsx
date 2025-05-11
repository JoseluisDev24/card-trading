"use client";

import { Button } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 w-full flex items-center justify-between py-2 px-4 bg-white shadow-sm text-white h-14">
      <div className="flex items-center gap-4">
        <Image
          src="/menu.png"
          width={30}
          height={30}
          alt="menu"/>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            background: "linear-gradient(to right, #FFA500, #FF6A00)",
            "&:hover": {
              background: "linear-gradient(to right, #FFDC73,#ff9900)",
            },
            borderRadius: "20px",
            color: "white",
            textTransform: "none",
          }}
        >
          Sign Up
        </Button>
      </div>
      <div className="flex items-center w-32 py-2 gap-2">
        <Image
          src="/logoTrade.png"
          width={20}
          height={20}
          alt="logo"/>
        <h1 className="text-2xl font-extrabold text-gray-800">T-Cards</h1>
      </div>
    </header>
  );
};

export default Header;
