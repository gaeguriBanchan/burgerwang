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
      menuSeq: 19,
      menuName: "킹치킨 라지세트",
      menuPrice: 6800,
      menuFile: "킹치킨라지세트",
      menuUri: "uri8",
      menuEx: "부드러운 에그번과 킹치킨패티의 만남! 풍부한 마요 소스로 고소하게!",
      menuSize: 2,
      menuSelect: true,
      drink: [
        {
          drinkOptSeq: 6,
          drinkOptName: "스프라이트 R",
          drinkOptPrice: 2600,
          drinkOptSize: 1,
        },
      ],
      drink2: [
        {
          drinkOptSeq: 6,
          drinkOptName: "스프라이트 R",
          drinkOptPrice: 2600,
          drinkOptSize: 1,
        },
      ],
      side: [
        {
          sideOptSeq: 1,
          sideOptName: "프렌치 프라이L",
          sideOptPrice: 3200,
          sideOptSize: 2,
        },
      ],
    };
    dispatch(addCartList(newCart));
  };
  const { cartList } = useSelector((state) => state.cart);
  const [checkList, setCheckList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const updateTotalPrice = () => {
    let totalPrice = 0;
    cartList.forEach((item) =>
      checkList.includes(item.cartSeq) ? (totalPrice += item.totalprice * item.count) : ""
    );
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    updateTotalPrice();
  }, [checkList]);
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
        <CartList cartList={cartList} checkList={checkList} setCheckList={setCheckList} />
        <CartPrice totalPrice={totalPrice} />
        <div className="flex justify-between items-center mt-8">
          <ul className="list-disc ml-4">
            <li>주문서를 작성하기 전에 선택하신 상품명, 수량 및 가격이 정확한지 확인해주세요.</li>
            <li> 해당매장의 주문배달 최소금액은 13,000원 입니다.</li>
          </ul>
          <div>
            <Link to="menu">
              <ActiveBlackButton name="메뉴 추가" />
            </Link>
            <Link to="/order" state={{ orderList: checkList }}>
              <ActiveButton>주문하기</ActiveButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
