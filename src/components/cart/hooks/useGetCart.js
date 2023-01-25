import { useEffect, useState } from "react";
import { getCart } from "../../../api/cartApi";

const useGetCart = () => {
  const [cartList, setCartList] = useState([]);
  const fetchData = async () => {
    const res = await getCart();
    setCartList(res.cart);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return cartList;
};

export default useGetCart;
