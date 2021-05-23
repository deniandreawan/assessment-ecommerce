import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../apollo/queries/getProducts";

const PAGE_SIZE = 10;

export const useProducts = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCTS, {
    variables: { id: categoryId, pageSize: PAGE_SIZE, currentPage },
  });

  useEffect(() => {
    if (!loading) {
      getProducts();
    }
  }, [getProducts]);

  useEffect(() => {
    if (data?.products?.items && currentPage === 1) {
      setProducts(data?.products?.items);
    } else if (
      data?.products?.items &&
      products.length < data.products.total_count &&
      products.length < currentPage * PAGE_SIZE
    ) {
      setProducts([...products, ...data?.products?.items]);
    }
  }, [data]);

  const loadMore = () => {
    if (loading) {
      return;
    }

    if (currentPage * PAGE_SIZE === products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    products,
    getProducts,
    loading,
    loadMore,
  };
};
