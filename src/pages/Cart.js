import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ActiveButton from "../components/base/ActiveButton";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import CartPrice from "../components/cart/CartPrice";
import CartList from "../components/cart/CartList";
import { useDispatch, useSelector } from "react-redux";
import { addCartList } from "../reducer/cartReducer";
import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const addProduct = () => {
    const newCart = {
      cartSeq: Date.now(),
      count: 1,
      name: "블랙어니언와퍼 라지세트",
      event: "이벤트 설명",
      side: [
        {
          seq: 1,
          name: "프렌치 프라이L",
          price: 200,
        },
      ],
      drink: [
        {
          seq: 1,
          name: "콜라 L",
          price: 0,
        },
      ],
      drink2: [],
      ingredient: [
        {
          seq: 44,
          name: "SPICY 토마토 소스",
          price: 0,
        },
        {
          seq: 45,
          name: "불고기 소스",
          price: 0,
        },
        {
          seq: null,
          name: "재료 추가",
          price: 400,
        },
        {
          seq: 46,
          name: "디아블로 소스",
          price: 0,
        },
      ],
      totalprice: 15000,
    };
    dispatch(addCartList(newCart));
  };
  const { cartList } = useSelector((state) => state.cart);
  const [checkList, setCheckList] = useState([]);
  const checkedItem = () => checkList.filter((item) => item.checked);
  const refreshData = () => {
    const filterCartList = cartList.map((item) => ({ ...item, checked: true }));
    setCheckList(filterCartList);
  };
  useEffect(() => {
    refreshData();
  }, [cartList]);
  return (
    <>
      <Helmet>
        <title>카트</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      {/* test 버튼 */}
      <button className="bg-white" onClick={() => addProduct()}>
        상품 추가
      </button>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">딜리버리 카트</h2>
        <CartList cartList={checkList} setCheckList={setCheckList} checkedItem={checkedItem} />
        <CartPrice />
        <div className="flex justify-between items-center mt-8">
          <ul className="list-disc ml-4">
            <li>주문서를 작성하기 전에 선택하신 상품명, 수량 및 가격이 정확한지 확인해주세요.</li>
            <li> 해당매장의 주문배달 최소금액은 13,000원 입니다.</li>
          </ul>
          <div>
            <Link to="/order">
              <ActiveButton name="주문하기" />
            </Link>
            <ActiveBlackButton name="메뉴 추가" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
