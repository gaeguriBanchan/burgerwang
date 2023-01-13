import PaymentMeet from "./PaymentMeet";
import PaymentCard from "./PaymentCard";
import { useState } from "react";
const Payment = () => {
  const [paymentTab, setPaymentTab] = useState("card");
  const [payment, setPayment] = useState("pay-card");
  const changePayTab = (e) => {
    const tabName = e.target.value;
    tabName === "card" ? setPayment("pay-card") : setPayment("pay-meet-card");
    setPaymentTab(tabName);
  };
  const changePayment = (e) => {
    setPayment(e.target.value);
  };
  return (
    <div className="w-full my-10">
      <div className="flex justify-between">
        <h3 className="mb-2 pl-12 flex items-center bg-icon-pay bg-no-repeat bg-left">
          <span className="font-JUA text-2xl">결제 수단 선택</span>
        </h3>
        <ul className="flex">
          <li className="px-3 mb-2 font-JUA text-2xl">
            <button
              onClick={(e) => changePayTab(e)}
              value="card"
              className={
                "pb-1 " +
                (paymentTab === "card" ? "text-bgwred border-b-4  border-bgwred" : "text-black")
              }
            >
              카드결제
            </button>
          </li>
          <li className="px-3 mb-2 font-JUA text-2xl">
            <button
              onClick={(e) => changePayTab(e)}
              value="meet"
              className={
                "pb-1 " +
                (paymentTab === "card" ? "text-black" : "text-bgwred border-b-4  border-bgwred")
              }
            >
              만나서 결제
            </button>
          </li>
        </ul>
      </div>
      <div className="px-16 pt-16 pb-12 bg-white drop-shadow">
        {paymentTab === "card" ? (
          <PaymentCard payment={payment} changePayment={changePayment} />
        ) : (
          <PaymentMeet payment={payment} changePayment={changePayment} />
        )}
        <p className="pt-6 mt-8 flex justify-between border-t-2 border-ededed border-dashed">
          <span className="text-3xl font-black">총 결제금액</span>
          <span className="text-3xl text-bgwred font-black">결제금액</span>
        </p>
      </div>
    </div>
  );
};

export default Payment;
