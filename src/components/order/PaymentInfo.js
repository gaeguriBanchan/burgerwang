import { useEffect, useState } from "react";
import { getPayment } from "../../api/orderApi";
import PaymentItem from "./PaymentInfoItem";
export const PaymentInfo = ({ payment, setPayment, paymentTab }) => {
  const [payList, setPayList] = useState([]);
  const getPaymentList = async () => {
    const res = await getPayment(paymentTab);
    const { pays } = res.payList;
    setPayList(pays);
    setPayment(pays[0].seq);
  };
  useEffect(() => {
    getPaymentList();
  }, [paymentTab]);
  return (
    <div>
      <ul>
        {payList.map((item) => (
          <PaymentItem key={item.seq} payment={payment} setPayment={setPayment} payData={item} />
        ))}
      </ul>
    </div>
  );
};

export default PaymentInfo;
