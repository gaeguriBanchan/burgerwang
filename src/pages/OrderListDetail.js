import React from "react";
import { Helmet } from "react-helmet-async";
import OrderListDetailList from "../components/orderlistdetail/OrderListDetailList";

const OrderListDetail = () => {
  return (
    <>
      <Helmet>
        <title>주문내역</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <OrderListDetailList />
      </div>
    </>
  );
};

export default OrderListDetail;
