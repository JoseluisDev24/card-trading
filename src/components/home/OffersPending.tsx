import { Button, TextField } from "@mui/material";
import Image from "next/image";
import SyncAltIcon from "@mui/icons-material/SyncAlt";


export default function OffersPending() {
    return (
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
    )
    }