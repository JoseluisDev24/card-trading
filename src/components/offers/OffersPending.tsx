import { Button } from "@mui/material";
import Image from "next/image";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import users from "@/data/users.json";
import PostAction from "@/components/posts/PostActions";

type Props = {
  userId: string;
};

export default function OffersPending({ userId }: Props) {
  console.log(userId);
  return (
    <div className="flex flex-col items-center py-3 w-full">
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
                  <Image
                    src="https://unavatar.io/github/JoseluisDev24"
                    alt="imagen de perfil"
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  <span className="font-semibold text-md text-gray-800">
                    {users[0].name}
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
                <Image
                  src="https://unavatar.io/github/GonzaloRosano"
                  alt="imagen de perfil"
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <span className="font-semibold text-md text-gray-800">
                  {users[1].name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <PostAction />
      
    </div>
  );
}
