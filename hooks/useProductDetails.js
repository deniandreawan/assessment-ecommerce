import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_DETAILS } from "../apollo/queries/getProductDetails";
import { setCart } from "../redux/cart";

export const useProductDetails = ({ url }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { url_key: url },
  });
  const product = data?.products?.items[0] || {};
  const item = cart.findIndex((item) => item.id === product.id);
  let newCart = [];
  let qty = 1;

  console.log(cart);

  const addToCart = () => {
    if (itemIndex === -1) {
      newCart = [...cart, { ...product, qty }];
    } else {
      qty += cart[item].qty;
      newCart = cart
        .filter((item) => item.id !== product.id)
        .concat({ ...product, qty });
    }
    dispatch(setCart(newCart));
  };

  return {
    product,
    loading,
    addToCart,
    error,
  };
};
