const CartListItemOptionInfo = ({ optioninfo }) => {
  const { name, price } = optioninfo;
  return (
    <li className="flex mb-2 justify-between">
      <span className="text-xl">{name}</span>
      <span className="text-xl font-black">+{price}원</span>
    </li>
  );
};

export default CartListItemOptionInfo;
