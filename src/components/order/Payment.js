import PaymentMeet from "./PaymentMeet";
const Payment = () => {
  return (
    <div className="w-full my-10">
      <div className="flex justify-between">
        <h3 className="mb-4 font-JUA text-2xl">결제 수단 선택</h3>
        <ul className="flex">
          <li className="px-3 mb-4 font-JUA text-2xl">
            <button>카드결제</button>
          </li>
          <li className="px-3 mb-4 font-JUA text-2xl">
            <button>만나서 결제</button>
          </li>
        </ul>
      </div>
      <div className="px-16 pt-16 pb-12 bg-white drop-shadow">
        <PaymentMeet />
        <p className="pt-6 mt-8 flex justify-between border-t-2 border-ededed border-dashed">
          <span className="text-3xl font-black">총 결제금액</span>
          <span className="text-3xl text-bgwred font-black">결제금액</span>
        </p>
      </div>
    </div>
  );
};

export default Payment;
