export type Card = {
  id: string;
  userId?: string;
  name: string;
  image: string;
  description: string;
  status: "available" | "pending" | "sold";
  price: number;
};
