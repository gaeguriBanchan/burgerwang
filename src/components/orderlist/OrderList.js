const OrderList = () => {
  return (
    <ul className="pt-5">
      <li className="px-16 py-8 bg-white">
        <div>
          <p>상품명 외 몇건</p>
          <p>주문번호 : 0000000000</p>
          <p>주문시간 : 2022.12.22 PM 15:20</p>
        </div>
        <button>주문 취소</button>
      </li>
    </ul>
  );
};

export default OrderList;
