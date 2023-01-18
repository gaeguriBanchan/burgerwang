import ChangeButton from "../base/ChangeButton";
import OrderInfoItemOptionInfo from "./OrderInfoItemOptionsInfo";
const OrderInfoItemOptions = ({ kind, option }) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="grow flex justify-between mr-28">
        <span className="w-32 text-xl text-737373">옵션명</span>
        <ul className="grow">
          {option.map(({ ingredientSeq, ingredientName, ingredientPrice }) => {
            return (
              <OrderInfoItemOptionInfo
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

export default OrderInfoItemOptions;
