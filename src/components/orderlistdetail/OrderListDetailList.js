import OrderListDetailListItem from "./OrderListDetailListItem";
import useGetOrderListDetail from "./hooks/useGetOrderListDetail";
const OrderListDetailList = () => {
  const orderListDetail = useGetOrderListDetail();
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
