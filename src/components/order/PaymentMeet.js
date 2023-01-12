const PaymentMeet = () => {
  return (
    <div>
      <ul>
        <li className="mb-3">
          <label htmlFor="pay-meet-card">
            <input type="radio" name="payment" id="pay-meet-card" className="hidden" />
            <span className="text-xl">현장에서 신용카드 결제</span>
          </label>
        </li>
        <li>
          <label htmlFor="pay-meet-cash">
            <input type="radio" name="payment" id="pay-meet-cash" className="hidden" />
            <span className="text-xl">현장에서 현금 결제</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PaymentMeet;
