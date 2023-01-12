import OrderInfoItemOption from "./OrderInfoItemOption";

const OrderInfoItem = () => {
  return (
    <li className="pt-14 border-b border-ededed">
      <div className="pb-10 border-b border-ededed">
        <p className="text-4xl font-black">햄버거명</p>
        <p className="text-xl mt-3 font-black">구성품 리스트 없으면 안 보임</p>
        <p className="text-3xl mt-3 font-black">가격</p>
      </div>
      <ul className="py-8 border-b border-ededed border-dashed">
        <OrderInfoItemOption />
      </ul>
      <div className="py-8 flex items-center">
        <div className="w-3/6 flex">
          <span className="w-32 text-xl font-black">수량</span>
          <div className="drop-shadow-md">
            <button className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-l">-</button>
            <input
              type="text"
              className="w-12 h-10 text-xl font-black text-center bg-white outline-none"
              value={"1"}
            />
            <button className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-r">+</button>
          </div>
        </div>
        <div className="w-3/6 flex justify-between">
          <span className="text-xl font-black">합계금액</span>
          <span className="text-3xl text-bgwred font-black">가격</span>
        </div>
      </div>
    </li>
  );
};

export default OrderInfoItem;
