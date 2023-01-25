import ChangeButton from "../base/ChangeButton";
import CartListItemOptionInfo from "./CartListItemOptionsInfo";
const CartListItemOption = ({ kind, option }) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="grow flex justify-between mr-28">
        <span className="w-32 text-xl text-737373">{kind}</span>
        <ul className="grow">
          {option.map(({ ingredientSeq, ingredientName, ingredientPrice }) => {
            return (
              <CartListItemOptionInfo
                key={ingredientSeq}
                name={ingredientName}
                price={ingredientPrice}
              />
            );
          })}
        </ul>
      </div>
      <ChangeButton name="변경" />
    </li>
  );
};

export default CartListItemOption;
