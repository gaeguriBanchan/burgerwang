import { useEffect, useState } from "react";
import { getOrderListDetail } from "../../../api/orderApi";

const useGetOrderListDetail = (seq, memberId) => {
  const [orderListDetail, setOrderListDetail] = useState([]);
  const fetchData = async () => {
    await getOrderListDetail({ seq, member: memberId }).then((orderDetailData) => {
      const { order } = orderDetailData;
      const { orderDetail } = order;
      setOrderListDetail(orderDetail);
    });
  };
  useEffect(() => {
    fetchData();
  }, [seq]);

  return { orderListDetail };
};

export default useGetOrderListDetail;
