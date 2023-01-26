import ChangeButton from "../base/ChangeButton";
import CartListItemOptionInfo from "./CartListItemOptionInfo";
const CartListItemOption = ({ optionname, optioninfo }) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="grow flex justify-between mr-28">
        <span className="w-32 text-xl text-737373">{optionname}</span>
        <ul className="grow">
          {optioninfo.map((item) => (
            <CartListItemOptionInfo key={item.seq} optioninfo={item} />
          ))}
        </ul>
      </div>
      <ChangeButton name="변경" />
    </li>
  );
};

export default CartListItemOption;
