"use client";

type Props = {
  name: string;
  image: string;
  description?: string;
  price: number;
};

export const Card = ({ name, image, price }: Props) => {
  return (
    <div className="bg-white w-44 lg:w-52 h-auto shadow-xl rounded-lg p-2">
      <div className="w-40 lg:w-48 h-56 lg:h-72 overflow-hidden rounded-t-lg mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-md font-semibold mb-2">{name}</h2>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-600">${price}</span>
      </div>
    </div>
  );
};
