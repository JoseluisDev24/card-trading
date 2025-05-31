"use client";

import { useEffect, useState, useCallback } from "react";
import { Product } from "@/types/product";
import httpClient from "@/services/httpClient/index";

export const useProducts = (searchQuery: string = "") => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let url = "/api/products";
      if (searchQuery) {
        url += `?search=${encodeURIComponent(searchQuery)}`;
      }

      const { data } = await httpClient.get<Product[]>(url);
      setProducts(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al cargar los productos"
      );
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
};
