import ChangeButton from "../base/ChangeButton";
import CartListItemOptionInfo from "./CartListItemOptionInfo";
const CartListItemOption = ({ optionname, optiontype, optioninfo }) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="grow flex justify-between mr-28">
        <span className="w-32 text-xl text-737373">{optionname}</span>
        <ul className="grow">
          {optiontype === "ingredient" &&
            optioninfo.map((item) => (
              <CartListItemOptionInfo
                key={item.ingredirentSeq}
                name={item.ingredientName}
                price={item.ingredientPrice}
              />
            ))}
          {optiontype === "side" &&
            optioninfo.map((item) => (
              <CartListItemOptionInfo
                key={item.sideOptSeq}
                name={item.sideOptName}
                price={item.sideOptPrice}
              />
            ))}
          {optiontype === "drink1" &&
            optioninfo.map((item) => (
              <CartListItemOptionInfo
                key={item.drinkOptSeq}
                name={item.drinkOptName}
                price={item.drinkOptPrice}
              />
            ))}
          {optiontype === "drink2" &&
            optioninfo.map((item) => (
              <CartListItemOptionInfo
                key={item.drinkOptSeq}
                name={item.drinkOptName}
                price={item.drinkOptPrice}
              />
            ))}
        </ul>
      </div>
      <ChangeButton name="변경" />
    </li>
  );
};

export default CartListItemOption;
