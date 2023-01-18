import { useEffect, useState } from "react";
import { getOrder } from "../../../api/orderApi";

const useGetOrder = () => {
  const [orderList, setOrderList] = useState([]);
  const fetchData = async () => {
    const res = await getOrder();
    setOrderList(res.info);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const { address, coupon, orderMenus, storeName, totalPrice, userPhone } = orderList;
  const deliData = {
    address,
    userPhone,
    storeName,
  };
  const orderData = {
    orderMenus,
  };
  const couponData = {
    coupon,
  };
  const paymentData = {
    totalPrice,
  };

  return { deliData, orderData, couponData, paymentData };
};

export default useGetOrder;
