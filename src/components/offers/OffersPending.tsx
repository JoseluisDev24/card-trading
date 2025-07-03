import { Button, TextField } from "@mui/material";
import Image from "next/image";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

type Props = {
  userId: string;
};

export default function OffersPending({ userId }: Props) {
  return (
    <div className="flex flex-col items-center py-3 w-full">
      <p className="text-sm text-gray-500 mb-2">
        Viewing offers for user ID: {userId}
      </p>
      <div className="flex flex-col items-start">
        <div>
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
        </div>
        <div className="flex py-4 justify-center items-center ">
          <div className="max-w-lg flex justify-between items-center gap-4 text-sm">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col items-start gap-3">
                <div className="flex gap-2">
                  <Image
                    src="/cards/charizard.avif"
                    alt="Offer"
                    width={90}
                    height={0}
                    className="shadow-lg"
                    style={{ height: "auto", borderRadius: "16px" }}
                  />
                  <Image
                    src="/cards/charizard.avif"
                    alt="Offer"
                    width={90}
                    height={0}
                    className="shadow-lg"
                    style={{ height: "auto", borderRadius: "16px" }}
                  />
                </div>

                <div className="flex justify-center items-center gap-2">
                  <img
                    src="https://unavatar.io/github/JoseluisDev24"
                    alt="imagen de perfil"
                    className="w-4 rounded-full"
                  />
                  <span className="font-semibold text-md text-gray-800">
                    Shane
                  </span>
                </div>
              </div>
            </div>
            <SyncAltIcon className="text-gray-400" />
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/cards/skeledirge.png"
                alt="Offer"
                width={90}
                height={0}
                className="shadow-lg"
                style={{ height: "auto", borderRadius: "16px" }}
              />
              <div className="flex justify-center items-center gap-2">
                <img
                  src="https://unavatar.io/github/GonzaloRosano"
                  alt="imagen de perfil"
                  className="w-4 rounded-full"
                />
                <span className="font-semibold text-md text-gray-800">
                  J6Remy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 w-full">
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
  );
}
