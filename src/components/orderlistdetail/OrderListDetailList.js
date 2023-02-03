import OrderListDetailListItem from "./OrderListDetailListItem";
import useGetOrderListDetail from "./hooks/useGetOrderListDetail";
import { useLocation } from "react-router";
const OrderListDetailList = () => {
  const memberId = 56;
  const location = useLocation();
  const { seq } = location.state;
  const { orderListDetail } = useGetOrderListDetail(seq, memberId);
  return (
    <ul>
      {orderListDetail &&
        orderListDetail.map((order, i) => {
          return <OrderListDetailListItem key={i} order={order} />;
        })}
    </ul>
  );
};

export default OrderListDetailList;
