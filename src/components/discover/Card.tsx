import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type Props = {
  name: string;
  image: string;
  description?: string;
  price: number;
};

export const Card = ({ name, image, description, price }: Props) => {
  return (
    <div className="bg-white w-44 h-auto shadow-xl rounded-lg p-2">
      <img
        src={image}
        alt={name}
        className="w-40 h-auto object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-md font-semibold mb-2">{name}</h2>
      {description && <p className="text-gray-700 mb-4">{description}</p>}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${price}</span>
        <AddShoppingCartIcon />
      </div>
    </div>
  );
};
