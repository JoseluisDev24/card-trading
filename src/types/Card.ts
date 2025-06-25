export type Card = {
  id: string;
  userId?: string;
  name: string;
  image: string;
  description: string;
  grade: "Mint" | "Near Mint" | "Good";
  price: number;
};
