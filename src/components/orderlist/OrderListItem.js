import ChangeButton from "../base/ChangeButton";
import DefaultImage from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const OrderListItem = ({ order }) => {
  const { menuList, orderSeq, orderDate, cancellable } = order;
  let orderTitle = menuList;
  if (orderTitle.includes("+")) {
    const splitText = menuList.split("+");
    const size = splitText.length;
    const firstProduct = splitText[0];
    orderTitle = `${firstProduct} 외 ${size - 1}개`;
  }
  return (
    <li className="mb-4 py-8 bg-white">
      <div className="relative flex items-center px-16">
        <div className="absolute w-28 h-28">
          <img src={DefaultImage} alt={orderTitle} className="w-full h-full" />
        </div>
        <div className="px-40">
          <Link to={"/orderlistdetail/"} state={{ seq: orderSeq }}>
            <p className="mb-4 text-2xl font-black">{orderTitle}</p>
          </Link>
          <p className="text-xl text-8d8d8d">주문번호 : {orderSeq}</p>
          <p className="text-xl text-8d8d8d">주문시간 : {orderDate}</p>
        </div>
        <div className="absolute right-16 top-0">
          {cancellable && <ChangeButton name="주문 취소" />}
        </div>
      </div>
    </li>
  );
};

export default OrderListItem;
