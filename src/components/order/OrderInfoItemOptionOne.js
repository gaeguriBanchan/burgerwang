import ChangeButton from "../base/ChangeButton";
const OrderInfoItemOptionOne = () => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="grow flex justify-between mr-28">
        <span className="w-32 text-xl text-737373">옵션명</span>
        <div className="grow flex mb-1 justify-between">
          <span className="text-xl">옵션명</span>
          <span className="text-xl font-black">가격</span>
        </div>
      </div>
      <ChangeButton name="변경" />
    </li>
  );
};

export default OrderInfoItemOptionOne;
