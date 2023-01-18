const CartPrice = () => {
  return (
    <div className="px-16 py-8 mt-8 bg-white drop-shadow">
      <p className="flex justify-between">
        <span className="text-3xl font-black">총 주문금액</span>
        <span className="text-3xl text-bgwred font-black">결제금액</span>
      </p>
    </div>
  );
};

export default CartPrice;
