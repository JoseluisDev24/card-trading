import Image from "next/image";
import { FaArrowDown, FaArrowUp, FaRegComment, FaShare } from "react-icons/fa";
import { IconButton, TextField } from "@mui/material";



export default function PostAction() {

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex gap-2 h-8">
        <div className="bg-gray-100 rounded-4xl flex items-center justify-center px-2 hover:bg-gray-200 transition cursor-pointer">
          <IconButton size="small" className="!p-1 hover:bg-transparent">
            <FaArrowUp fontSize="14px" className="text-gray-700" />
          </IconButton>
          <span className="text-gray-700 text-sm font-medium px-1">1</span>
          <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>
          <IconButton size="small" className="!p-1 hover:bg-transparent">
            <FaArrowDown fontSize="14px" className="text-gray-700" />
          </IconButton>
        </div>

        <div className="bg-gray-100 rounded-4xl flex items-center justify-center px-2 hover:bg-gray-200 transition cursor-pointer">
          <IconButton size="small" className="!p-1 hover:bg-transparent">
            <FaRegComment fontSize="16px" className="text-gray-700" />
          </IconButton>
          <span className="text-gray-700 text-sm font-medium">0</span>
        </div>

        <div className="bg-gray-100 rounded-4xl flex items-center justify-center px-3 hover:bg-gray-200 transition cursor-pointer">
          <FaShare fontSize="16px" className="text-gray-700" />
          <span className="text-gray-700 text-sm font-medium ml-1">Share</span>
        </div>
      </div>

      <div className="h-[1px] bg-gray-200 w-full"></div>

      <div className="flex justify-center items-center gap-2 w-full">
        <Image
          src="https://unavatar.io/github/JoseluisDev24"
          alt="imagen de perfil"
          width={30}
          height={30}
          className="rounded-full"
        />
        <TextField
          label="Write a comment..."
          variant="outlined"
          size="small"
          className="w-full"
          sx={{
            "& .MuiInputLabel-root": {
              fontSize: "13px",
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
            },
          }}
          slotProps={{
            input: {
              sx: {
                backgroundColor: "#f5f5f5",
                borderRadius: "16px",
                height: 30,
                paddingX: 2,
                "& fieldset": {
                  border: "none",
                },
              },
            },
          }}
        />
      </div>
      <div className="h-1 bg-gray-200 w-full mt-2"></div>
    </div>
  );
}