import ChangeButton from "../base/ChangeButton";
import OrderInfoItemOptionInfo from "./OrderInfoItemOptionInfo";
const OrderInfoItemOption = () => {
  return (
    <li className="flex justify-between items-center">
      <div className="grow flex justify-between mr-28">
        <span className="w-32 text-xl">옵션명</span>
        <ul className="grow">
          <OrderInfoItemOptionInfo />
        </ul>
      </div>
      <ChangeButton name="변경" />
    </li>
  );
};

export default OrderInfoItemOption;
