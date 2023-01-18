import ChangeButton from "../base/ChangeButton";
const CartListItemOptionOne = ({ kind, name, price }) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="grow flex justify-between mr-28">
        <span className="w-32 text-xl text-737373">{kind}</span>
        <div className="grow flex mb-1 justify-between">
          <span className="text-xl">{name}</span>
          <span className="text-xl font-black">{price}</span>
        </div>
      </div>
      <ChangeButton name="변경" />
    </li>
  );
};

export default CartListItemOptionOne;
