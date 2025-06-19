"use client";

import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import { GrClose } from "react-icons/gr";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function Inbox() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/home"); 
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gray-100">
      <div className="relative bg-[rgba(217,201,249,1)] flex items-center h-14 px-4">
        <IconButton
          onClick={handleClose}
          aria-label="Close"
          size="small"
          sx={{
            color: "black",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              fontWeight: "bold",
            },
          }}
        >
          <GrClose />
        </IconButton>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-fuchsia-950">
          <ChatBubbleOutlineIcon />
          <h1 className="text-xl font-bold">Chats</h1>
        </div>
      </div>

      <div className="px-4 py-3 text-lg text-gray-500 flex-1 overflow-auto">
        Your messages will appear here.
      </div>
    </div>
  );
}
