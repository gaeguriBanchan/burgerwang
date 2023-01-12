export const PaymentCard = () => {
  return (
    <div>
      <ul>
        <li>
          <label htmlFor="pay-card">
            <input type="radio" name="payment" id="pay-card" className="hidden" />
            <span className="text-xl">신용카드 결제</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
