import DefaultImage from "../../assets/images/logo.png";
import convertPrice from "../../utils/convertPrice";
const OrderListDetailListItem = ({ order }) => {
  const { orderMenuName, menuEx, price, composition, count } = order;
  return (
    <li className="px-16 bg-white">
      <div className="relative py-8 flex justify-between border-b border-ededed border-dashed">
        <div className="flex justify-between items-center grow mr-12">
          <div className="absolute w-28 h-28">
            <img src={DefaultImage} alt={orderMenuName} className="w-full h-full" />
          </div>
          <div className="px-40">
            <p className="text-2xl font-black">{orderMenuName}</p>
            <p className="text-2xl font-black">{convertPrice(price)}원</p>
            <p className="text-xl mt-4 text-8d8d8d font-black">{menuEx}</p>
          </div>
        </div>
        <div className="absolute right-0 top-8">
          <span className="px-3 py-2 bg-ededed">수량 {count}개</span>
        </div>
      </div>
    </li>
  );
};

export default OrderListDetailListItem;
