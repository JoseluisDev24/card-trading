"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

type Props = {
  name: string;
  image: string;
  description?: string;
  price: number;
};

export const Card = ({ name, image, price }: Props) => {
  return (
    <div className="bg-white w-44 lg:w-52 h-auto shadow-xl rounded-lg p-2">
      <div className="w-40 lg:w-48 h-56 lg:h-68 overflow-hidden rounded-xl mb-2">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-sm lg:text-md font-semibold truncate max-w-[5rem] lg:truncate-none lg:max-w-full">
            {name}
          </h2>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-600">
              ${price}
            </span>
          </div>
        </div>
        <div className="px-2">
          <ShoppingCartOutlinedIcon className="text-gray-600 cursor-pointer hover:text-orange-500 transition duration-200" />
          <FavoriteIcon className="text-gray-600 cursor-pointer hover:text-red-500 transition duration-200 ml-2" />
        </div>
      </div>
    </div>
  );
};
