const PaymentSelect = ({ children, value, changePayTab, paymentTab }) => {
  return (
    <li className="px-3 mb-2 font-JUA text-2xl">
      <button
        onClick={(e) => changePayTab(e.target.value)}
        value={value}
        className={
          "pb-1 " + (paymentTab === value ? "text-bgwred border-b-4  border-bgwred" : "text-black")
        }
      >
        {children}
      </button>
    </li>
  );
};

export default PaymentSelect;
