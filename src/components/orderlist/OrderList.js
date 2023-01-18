import OrderListItem from "./OrderListItem";
import useGetOrderList from "./hooks/useGetOrderList";
const OrderList = () => {
  const orderList = useGetOrderList();
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
