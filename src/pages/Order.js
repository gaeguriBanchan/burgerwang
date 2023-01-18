import React from "react";
import { Helmet } from "react-helmet-async";
import ActiveButton from "../components/base/ActiveButton";
import DisabledButton from "../components/base/DisabledButton";
import DeliInfo from "../components/order/DeliInfo";
import OrderInfo from "../components/order/OrderInfo";
import Payment from "../components/order/Payment";
import useGetOrder from "../components/order/hooks/useGetOrder";

const Order = () => {
  const { deliData, orderData, couponData, paymentData } = useGetOrder();
  return (
    <>
      <Helmet>
        <title>주문하기</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">주문하기</h2>
        <div className="py-4">
          <DeliInfo deliData={deliData} />
          <OrderInfo orderData={orderData} />
          <Payment paymentData={paymentData} />
        </div>
        <div className="flex justify-end">
          <DisabledButton name="취소" />
          <ActiveButton name="결제하기" />
        </div>
      </div>
    </>
  );
};

export default Order;
