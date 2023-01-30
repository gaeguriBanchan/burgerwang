import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ActiveButton from "../components/base/ActiveButton";
import DisabledButton from "../components/base/DisabledButton";
import DeliInfo from "../components/order/DeliInfo";
import OrderInfo from "../components/order/OrderInfo";
import Payment from "../components/order/Payment";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Order = () => {
  const location = useLocation();
  const checkedId = location.state.orderList;
  const navigate = useNavigate();
  !location.state && navigate("/menu");
  const { cartList } = useSelector((state) => state.cart);
  const checkedCart = cartList.filter((item) => checkedId.includes(item.date));
  // window.history.replaceState({}, document.title);
  const [payment, setPayment] = useState(0);
  const [deliMessage, setDeliMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const updateTotalPrice = () => {
    let totalPrice = 0;
    checkedCart.forEach((item) => (totalPrice += item.totalPrice * item.count));
    setTotalPrice(totalPrice);
  };
  // console.log(checkedCart);
  useEffect(() => {
    updateTotalPrice();
  }, [checkedCart]);
  // const putOrder = () => {
  //   const cart = checkedCart.map((item) => {
  //     return {
  //       count: item.count,
  //       menu: item.menuSeq,
  //       ...(item.side.length > 0 && { sideOpt: item.side[0].seq }),
  //       ...(item.drink.length > 0 && { drinkOpt: item.drink[0].seq }),
  //       ...(item.drink2.length > 0 && { drink2Opt: item.drink2[0].seq }),
  //       ...(item.ingredient.length > 0 && {
  //         ingredient: item.ingredient.map((item) => item.seq !== null && item.seq),
  //       }),
  //     };
  //   });
  //   const data = { pay: payment, cart: cart, message: deliMessage, couponSeq: "" };
  //   console.log(data);
  //   // putOrder(data);
  // };
  return (
    <>
      <Helmet>
        <title>주문하기</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">주문하기</h2>
        <div className="py-4">
          <DeliInfo deliMessage={deliMessage} setDeliMessage={setDeliMessage} />
          <OrderInfo orderData={checkedCart} />
          <Payment totalPrice={totalPrice} payment={payment} setPayment={setPayment} />
        </div>
        <div className="flex justify-end">
          <DisabledButton name="취소" />
          <ActiveButton>결제하기</ActiveButton>
        </div>
      </div>
    </>
  );
};

export default Order;
