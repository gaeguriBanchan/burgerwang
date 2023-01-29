import convertPrice from "../../utils/convertPrice";
const CartListItemOptionInfo = ({ name, price }) => {
  return (
    <li className="flex mb-2 justify-between">
      <span className="text-xl">{name}</span>
      <span className="text-xl font-black">+{convertPrice(price)}원</span>
    </li>
  );
};

export default CartListItemOptionInfo;
