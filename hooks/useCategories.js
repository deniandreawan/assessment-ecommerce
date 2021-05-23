import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../apollo/queries/getCategory";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [getCategories, { loading, data, error }] =
    useLazyQuery(GET_CATEGORIES);

  useEffect(() => {
    if (data) {
      console.log({ data });
      const list = data;
      if (list.categoryList?.[0]?.children?.length > 0) {
        setCategories(list.categoryList?.[0]?.children);
      }
    }
    if (error) {
      console.log({ error });
    }
  }, [data, error]);

  return {
    getCategories,
    categories,
    loading,
  };
};
