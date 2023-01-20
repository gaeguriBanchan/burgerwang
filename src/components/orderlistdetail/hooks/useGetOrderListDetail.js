import { useEffect, useState } from "react";
import { getOrderListDetail } from "../../../api/orderApi";

const useGetOrderListDetail = (id) => {
  const [orderListDetail, setOrderListDetail] = useState([]);
  const fetchData = async () => {
    const res = await getOrderListDetail(id);
    setOrderListDetail(res.order);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const { orderDetail } = orderListDetail;

  return orderDetail;
};

export default useGetOrderListDetail;
