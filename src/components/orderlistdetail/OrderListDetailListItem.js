import DefaultImage from "../../assets/images/logo.png";
const OrderListDetailListItem = ({ order }) => {
  const { orderMenuName, price, composition, count } = order;
  return (
    <li className="px-16 bg-white">
      <div className="py-8 flex justify-between border-b border-ededed border-dashed">
        <div className="flex justify-between items-center grow mr-12">
          <div className="w-48 h-32 flex justify-center items-center">
            <img src={DefaultImage} alt="상품 이미지" className="h-28" />
          </div>
          <div className="grow ml-12">
            <p className="text-2xl font-black">{orderMenuName}</p>
            <p className="text-2xl mt-1 font-black">{price}</p>
            <p className="text-xl mt-3 text-8d8d8d font-black">{composition}</p>
          </div>
        </div>
        <div>
          <span className="px-3 py-2 bg-ededed">수량 {count}개</span>
        </div>
      </div>
    </li>
  );
};

export default OrderListDetailListItem;
