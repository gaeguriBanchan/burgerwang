// import { useEffect, useState } from "react";
// import { getCart } from "../../../api/cartApi";
// import { useDispatch, useSelector } from "react-redux";
// import { setCartData } from "../../../reducer/cartReducer";

// const useGetCart = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const dispatch = useDispatch();
//   const fetchData = async () => {
//     const res = await getCart();
//     const data = res.cart.map((item) => ({ ...item, checked: true }));
//     dispatch(setCartData(data));
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const cartList = useSelector((state) => state.cart);
//   useEffect(() => {
//     if (Object.keys(cartList).includes("cart") && cartList.cart !== undefined) {
//       setIsLoading(false);
//     }
//   }, [cartList]);

//   return { cartList, isLoading };
// };

// export default useGetCart;
