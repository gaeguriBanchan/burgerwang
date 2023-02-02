import PaymentInfo from "./PaymentInfo";
import { useState } from "react";
import PaymentSelect from "./PaymentSelect";
import convertPrice from "../../utils/convertPrice";
const Payment = ({ totalPrice, payment, setPayment }) => {
  const [paymentTab, setPaymentTab] = useState(1);
  const changePayTab = (tabNum) => {
    setPaymentTab(parseInt(tabNum));
  };
  return (
    <div className="w-full my-10">
      <div className="flex justify-between">
        <h3 className="mb-2 pl-12 flex items-center bg-icon-pay bg-no-repeat bg-left">
          <span className="font-JUA text-2xl">결제 수단 선택</span>
        </h3>
        <ul className="flex">
          <PaymentSelect value={1} changePayTab={changePayTab} paymentTab={paymentTab}>
            카드결제
          </PaymentSelect>
          <PaymentSelect value={2} changePayTab={changePayTab} paymentTab={paymentTab}>
            만나서 결제
          </PaymentSelect>
        </ul>
      </div>
      <div className="px-16 pt-16 pb-12 bg-white">
        <PaymentInfo paymentTab={paymentTab} payment={payment} setPayment={setPayment} />
        <p className="pt-6 mt-8 flex justify-between border-t-2 border-ededed border-dashed">
          <span className="text-3xl font-black">총 결제금액</span>
          <span className="text-3xl text-bgwred font-black">{convertPrice(totalPrice)}원</span>
        </p>
      </div>
    </div>
  );
};

export default Payment;
