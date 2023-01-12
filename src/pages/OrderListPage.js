import { Helmet } from "react-helmet-async";
import OrderList from "../components/orderlist/OrderList";

const OrderListPage = () => {
  return (
    <>
      <Helmet>
        <title>주문내역</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">주문내역</h2>
        <OrderList />
      </div>
    </>
  );
};

export default OrderListPage;
