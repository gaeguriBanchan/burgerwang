import PaymentMeet from "./PaymentMeet";
import PaymentCard from "./PaymentCard";
import { useState } from "react";
import PaymentSelect from "./PaymentSelect";
const Payment = ({ totalPrice, payment, setPayment }) => {
  const [paymentTab, setPaymentTab] = useState("card");
  const changePayTab = (tabName) => {
    tabName === "card" && setPayment("pay-card");
    tabName === "meet" && setPayment("pay-meet-card");
    setPaymentTab(tabName);
  };
  return (
    <div className="w-full my-10">
      <div className="flex justify-between">
        <h3 className="mb-2 pl-12 flex items-center bg-icon-pay bg-no-repeat bg-left">
          <span className="font-JUA text-2xl">결제 수단 선택</span>
        </h3>
        <ul className="flex">
          <PaymentSelect
            name="카드결제"
            value="card"
            changePayTab={changePayTab}
            paymentTab={paymentTab}
          />
          <PaymentSelect
            name="만나서 결제"
            value="meet"
            changePayTab={changePayTab}
            paymentTab={paymentTab}
          />
        </ul>
      </div>
      <div className="px-16 pt-16 pb-12 bg-white drop-shadow">
        {paymentTab === "card" ? (
          <PaymentCard payment={payment} setPayment={setPayment} />
        ) : (
          <PaymentMeet payment={payment} setPayment={setPayment} />
        )}
        <p className="pt-6 mt-8 flex justify-between border-t-2 border-ededed border-dashed">
          <span className="text-3xl font-black">총 결제금액</span>
          <span className="text-3xl text-bgwred font-black">{totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default Payment;
