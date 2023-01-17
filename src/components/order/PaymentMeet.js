import styles from "./Payment.module.css";
const PaymentMeet = ({ payment, setPayment }) => {
  return (
    <div>
      <ul>
        <li className="mb-3">
          <label htmlFor="pay-meet-card">
            <input
              type="radio"
              name="pay-meet"
              id="pay-meet-card"
              value="pay-meet-card"
              checked={payment === "pay-meet-card"}
              onChange={(e) => setPayment(e.target.value)}
              className={"hidden " + styles.paymentcheck}
            />
            <span className={"text-xl " + styles.paymentradio}>현장에서 신용카드 결제</span>
          </label>
        </li>
        <li>
          <label htmlFor="pay-meet-cash">
            <input
              type="radio"
              name="pay-meet"
              id="pay-meet-cash"
              value="pay-meet-cash"
              checked={payment === "pay-meet-cash"}
              onChange={(e) => setPayment(e.target.value)}
              className={"hidden " + styles.paymentcheck}
            />
            <span className={"text-xl " + styles.paymentradio}>현장에서 현금 결제</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PaymentMeet;
