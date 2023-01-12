import React from "react";
import OrderInfoItem from "./OrderInfoItem";

const OrderInfo = () => {
  return (
    <div className="w-full my-10">
      <h3 className="mb-4 font-JUA text-2xl">주문정보</h3>
      <div className="px-16 pb-16 bg-white drop-shadow">
        <ul>
          <OrderInfoItem />
        </ul>
      </div>
    </div>
  );
};

export default OrderInfo;
