import ChangeButton from "../base/ChangeButton";
import CartListItemOptionInfo from "./CartListItemOptionInfo";
import CartListItemOptionEmpty from "./CartListItemOptionEmpty";
const CartListItemOption = ({ optionname, optiontype, optioninfo, changeOptionHandler }) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="grow flex justify-between mr-28">
        <span className="w-32 text-xl text-737373">{optionname}</span>
        <ul className="grow">
          {optiontype === "ingredient" &&
            (optioninfo.length > 0 ? (
              optioninfo.map((item) => (
                <CartListItemOptionInfo
                  key={item.ingredirentSeq}
                  name={item.ingredientName}
                  price={item.ingredientPrice}
                />
              ))
            ) : (
              <CartListItemOptionEmpty />
            ))}
          {optiontype === "side" &&
            (optioninfo.length > 0 ? (
              optioninfo.map((item) => (
                <CartListItemOptionInfo
                  key={item.sideOptSeq}
                  name={item.sideOptName}
                  price={item.sideOptPrice}
                />
              ))
            ) : (
              <CartListItemOptionEmpty />
            ))}
          {optiontype === "drink1" &&
            (optioninfo.length > 0 ? (
              optioninfo.map((item) => (
                <CartListItemOptionInfo
                  key={item.drinkOptSeq}
                  name={item.drinkOptName}
                  price={item.drinkOptPrice}
                />
              ))
            ) : (
              <CartListItemOptionEmpty />
            ))}
          {optiontype === "drink2" &&
            (optioninfo.length > 0 ? (
              optioninfo.map((item) => (
                <CartListItemOptionInfo
                  key={item.drinkOptSeq}
                  name={item.drinkOptName}
                  price={item.drinkOptPrice}
                />
              ))
            ) : (
              <CartListItemOptionEmpty />
            ))}
        </ul>
      </div>
      <ChangeButton name="변경" event={() => changeOptionHandler({ optiontype, optioninfo })} />
    </li>
  );
};

export default CartListItemOption;
