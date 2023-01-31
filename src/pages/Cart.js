import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ActiveButton from "../components/base/ActiveButton";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import CartList from "../components/cart/CartList";
import CartPrice from "../components/cart/CartPrice";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);
  const [checkList, setCheckList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
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
  const navigateToOrder = () => {
    if (totalPrice < 15000) {
      alert("15000원 이상이면 주문이 가능해요!");
      return;
    }
    navigate("/order", { state: checkList });
  };
  return (
    <>
      <Helmet>
        <title>카트</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">딜리버리 카트</h2>
        <CartList cartList={cartList} checkList={checkList} setCheckList={setCheckList} />
        <CartPrice totalPrice={totalPrice} />
        <div className="flex justify-between items-center mt-8">
          <ul className="list-disc ml-4">
            <li>주문서를 작성하기 전에 선택하신 상품명, 수량 및 가격이 정확한지 확인해주세요.</li>
            <li> 해당매장의 주문배달 최소금액은 13,000원 입니다.</li>
          </ul>
          <div>
            <Link to="/menu">
              <ActiveBlackButton name="메뉴 추가" />
            </Link>
            <ActiveButton event={navigateToOrder}>주문하기</ActiveButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
