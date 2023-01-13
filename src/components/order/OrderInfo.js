import React from "react";
import OrderInfoItem from "./OrderInfoItem";

const OrderInfo = () => {
  return (
    <div className="w-full my-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-menu bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">주문정보</span>
      </h3>
      <div className="px-16 pb-16 bg-white drop-shadow">
        <ul>
          <OrderInfoItem />
        </ul>
      </div>
    </div>
  );
};

export default OrderInfo;
