import { useQuery } from "@tanstack/react-query";
import {
  getAllProductApi,
  getProductsByCategory,
  getProductsCategories,
} from "../api/productsApi";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState(null);

  const [debounceSearch, setDebounceSearch] = useState(null);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);

  let { data, isPending, errors } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProductApi(debounceSearch),
  });
  console.log("products", data);
  return {
    data,
    isPending,
    errors,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["allCategories"],
    queryFn: getProductsCategories,
  });
};

export const useProductByCategory = () => {
  const [category, setCategory] = useState(null);
  console.log("product category-->", category);
  let { data } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductsByCategory(category),
  });

  return {
    data,
    category,
    setCategory,
  };
};
