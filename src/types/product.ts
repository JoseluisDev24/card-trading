export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  condition: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
  owner?: string;
}

export type CreateProduct = Omit<
  Product,
  "_id" | "createdAt" | "updatedAt"
>;

export type UpdateProduct = Partial<Product>;
