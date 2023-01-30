import convertPrice from "../../utils/convertPrice";

const OrderInfoItemOptionInfo = ({ name, price }) => {
  return (
    <li className="flex mb-1 justify-between">
      <span className="text-xl">{name}</span>
      <span className="text-xl font-black">+{convertPrice(price)}원</span>
    </li>
  );
};

export default OrderInfoItemOptionInfo;
