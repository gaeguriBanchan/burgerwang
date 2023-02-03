import { useEffect, useState } from "react";
import { getOrderList } from "../../../api/orderApi";

const useGetOrderList = (memberId) => {
  const [orderList, setOrderList] = useState([]);
  const fetchData = async () => {
    await getOrderList(memberId).then((orderListData) => {
      const { list } = orderListData;
      setOrderList(list);
    });
  };
  useEffect(() => {
    fetchData();
  }, [memberId]);

  return { orderList };
};

export default useGetOrderList;
