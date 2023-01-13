import ChangeButton from "../base/ChangeButton";
import DefaultImage from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const OrderListItem = () => {
  return (
    <li className="mb-4 py-8 bg-white drop-shadow">
      <div className="flex justify-between items-center px-16">
        <div className="w-48 h-32 flex justify-center items-center">
          <img src={DefaultImage} alt="상품 이미지" className="h-28" />
        </div>
        <div className="grow mx-12">
          <Link to="/orderlistdetail">
            <p className="mb-4 text-2xl font-black">상품명 외 몇건</p>
          </Link>
          <p className="text-xl text-8d8d8d">주문번호 : 0000000000</p>
          <p className="text-xl text-8d8d8d">주문시간 : 2022.12.22 PM 15:20</p>
        </div>
        <ChangeButton name="주문 취소" />
      </div>
    </li>
  );
};

export default OrderListItem;
