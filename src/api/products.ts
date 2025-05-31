import httpClient from "@/services/httpClient";
import { Product } from "@/types/product";


export const getProducts = async (): Promise<Product[]> => {
  const response = await httpClient.get<Product[]>("/api/products");
  return response.data;
};
