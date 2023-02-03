import OrderListItem from "./OrderListItem";
import useGetOrderList from "./hooks/useGetOrderList";
const OrderList = () => {
  const memberId = 56;
  const {orderList} = useGetOrderList(memberId);
  return (
    <ul className="pt-5">
      {orderList &&
        orderList.map((order) => {
          return <OrderListItem key={order.orderSeq} order={order} />;
        })}
    </ul>
  );
};

export default OrderList;
