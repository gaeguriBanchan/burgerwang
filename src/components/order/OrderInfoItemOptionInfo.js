const OrderInfoItemOptionInfo = ({ optioninfo }) => {
  const { name, price } = optioninfo;
  return (
    <li className="flex mb-1 justify-between">
      <span className="text-xl">{name}</span>
      <span className="text-xl font-black">{price}</span>
    </li>
  );
};

export default OrderInfoItemOptionInfo;
