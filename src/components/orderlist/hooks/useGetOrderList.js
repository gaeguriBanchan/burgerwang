import { useEffect, useState } from "react";
import { getOrderList } from "../../../api/orderApi";

const useGetOrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const fetchData = async () => {
    const res = await getOrderList();
    setOrderList(res.list);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return orderList;
};

export default useGetOrderList;
