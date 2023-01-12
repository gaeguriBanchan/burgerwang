import React from "react";
import { Helmet } from "react-helmet-async";
import DeliInfo from "../components/order/DeliInfo";
import OrderInfo from "../components/order/OrderInfo";
import Payment from "../components/order/Payment";

const Order = () => {
  return (
    <>
      <Helmet>
        <title>주문하기</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">주문하기</h2>
        <div className="py-4">
          <DeliInfo />
          <OrderInfo />
          <Payment />
        </div>
        <div className="flex justify-end">
          <button className="w-48 h-16 text-512314 text-2xl border border-512314 font-black rounded-xl">
            결제하기
          </button>
          <button className="w-48 h-16 ml-1 bg-bgwred text-white text-2xl font-black rounded-xl">
            결제하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
