"use client";

import { Button, TextField } from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import Image from "next/image";
import { IoFilter } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 lg:px-70 lg:py-14 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Public feed</h1>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 transition">
          <IoFilter className="text-lg" />
          Filters
        </button>
      </div>
      <Button
        sx={{
          textTransform: "none",
          backgroundColor: "#ee744029",
          color: "#a75f3b",
          borderRadius: "16px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#ee944029",
          },
        }}
        className="flex items-center justify-between w-40 h-7"
      >
        📣 Announcement
      </Button>
      <div className="flex flex-col py-3">
        <span className="font-bold text-lg text-gray-800">
          Trading with someone new? Premium’s on us!
        </span>
        <span>
          When either trader has zero completed trades, Premium protection is
          completely free. Enjoy a secure, worry-free experience. Welcome
          newcomers to the TradeUp community! 🤝✨
        </span>
      </div>
      <div className="max-h-1 min-h-1 bg-gray-200 w-full"></div>
      <div className="flex flex-col py-3">
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "#fff5d3",
            color: "#ee7440",
            borderRadius: "16px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#fff593",
            },
          }}
          className="flex items-center justify-between w-32 h-7"
        >
          Offer pending
        </Button>
        <div className="flex py-4 justify-between items-center px-6">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/cards/charizard.avif"
              alt="Offer"
              width={90}
              height={0}
              className="shadow-lg "
              style={{ height: "auto", borderRadius: "16px" }}
            />
            <div className="flex justify-center items-center gap-2">
              <img
                src="https://unavatar.io/github/JoseluisDev24"
                alt="imagen de perfil"
                className="w-6 rounded-full"
              />
              <span className="font-semibold text-md text-gray-800">Shane</span>
            </div>
          </div>
          <SyncAltIcon className="text-gray-400" />
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/cards/skeledirge.png"
              alt="Offer"
              width={90}
              height={0}
              className="shadow-lg "
              style={{ height: "auto", borderRadius: "16px" }}
            />
            <div className="flex justify-center items-center gap-2">
              <img
                src="https://unavatar.io/github/GonzaloRosano"
                alt="imagen de perfil"
                className="w-6 rounded-full"
              />
              <span className="font-semibold text-md text-gray-800">
                J6Remy
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img
            src="https://unavatar.io/github/JoseluisDev24"
            alt="imagen de perfil"
            className="w-6 rounded-full"
          />
          <TextField
            label="Write a comment..."
            variant="outlined"
            size="small"
            className="w-full"
            slotProps={{
              input: {
                sx: {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "16px",
                  height: 40,
                  paddingX: 2,
                  "& fieldset": {
                    border: "none",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
