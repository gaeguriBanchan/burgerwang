import styles from "./Payment.module.css";
export const PaymentCard = ({ payment, changePayment }) => {
  return (
    <div>
      <ul>
        <li>
          <label htmlFor="pay-card">
            <input
              type="radio"
              name="pay-card"
              id="pay-card"
              value="pay-card"
              checked={payment === "pay-card"}
              onChange={changePayment}
              className={"hidden " + styles.paymentcheck}
            />
            <span className={"text-xl " + styles.paymentradio}>신용카드 결제</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PaymentCard;
