import styles from "./Payment.module.css";
import React from "react";

const PaymentItem = ({ payment, setPayment, payData }) => {
  const { seq, method } = payData;
  return (
    <li className="mb-2">
      <label htmlFor={seq}>
        <input
          type="radio"
          id={seq}
          value={seq}
          checked={parseInt(payment) === seq}
          onChange={(e) => setPayment(parseInt(e.target.value))}
          className={"hidden " + styles.paymentcheck}
        />
        <span className={"text-xl " + styles.paymentradio}>{method}</span>
      </label>
    </li>
  );
};

export default PaymentItem;
