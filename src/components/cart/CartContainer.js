import ActiveButton from "../base/ActiveButton";
import ActiveBlackButton from "../base/ActiveBlackButton";
import CartList from "../cart/CartList";
import CartPrice from "../cart/CartPrice";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkStoreOpen } from "../../api/commonApi";
import { useSelector } from "react-redux";
const CartContainer = ({ cartList }) => {
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { storeSeq } = useSelector((state) => state.storeInfo);
  const updateTotalPrice = () => {
    let totalPrice = 0;
    cartList.forEach((item) =>
      checkList.includes(item.date) ? (totalPrice += item.totalPrice * item.count) : ""
    );
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    updateTotalPrice();
  }, [checkList]);
  const navigateToOrder = async () => {
    await checkStoreOpen(storeSeq).then((storeOpenData) => {
      const { status, store } = storeOpenData;
      const { openStatus, name, open, close } = store;
      if (openStatus) {
        if (totalPrice < 15000) {
          alert("주문 가능한 금액은 15000원 이상입니다.");
          return;
        }
        navigate("/order", { state: checkList });
      } else {
        alert(`버거왕 ${name}의 배달 운영 시간이 아닙니다.\n운영 시간 : ${open} ~ ${close}`);
        return;
      }
    });
  };
  return (
    <>
      <CartList cartList={cartList} checkList={checkList} setCheckList={setCheckList} />
      <CartPrice totalPrice={totalPrice} />
      <div className="flex justify-between items-center mt-8">
        <ul className="list-disc ml-4">
          <li>주문서를 작성하기 전에 선택하신 상품명, 수량 및 가격이 정확한지 확인해주세요.</li>
          <li>해당매장의 주문배달 최소금액은 15,000원 입니다.</li>
        </ul>
        <div className="flex gap-4">
          <Link to="/menu">
            <ActiveBlackButton>메뉴 추가</ActiveBlackButton>
          </Link>
          <ActiveButton event={navigateToOrder}>주문하기</ActiveButton>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
