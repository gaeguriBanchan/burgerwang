import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { putOrder } from "../api/orderApi";
import { removeCart } from "../reducer/cartReducer";
import ActiveButton from "../components/base/ActiveButton";
import DisabledButton from "../components/base/DisabledButton";
import DeliInfo from "../components/order/DeliInfo";
import OrderInfo from "../components/order/OrderInfo";
import Payment from "../components/order/Payment";
import Coupon from "../components/order/Coupon";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [payment, setPayment] = useState(0);
  const [deliAddress, setDeliAddress] = useState("");
  const [deliMessage, setDeliMessage] = useState("");
  const [deliPhone, setDeliPhone] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCoupon, setSelectedCoupon] = useState({ couponSeq: 0, couponPrice: 0 });
  const [disableButton, setDisableButton] = useState(false);
  const { state } = useLocation();
  useEffect(() => {
    if (!state) {
      navigate("/menu");
    }
  }, [state]);
  const address = useSelector((state) => state.address);
  const { addressJibun, addressRoad, addressDetail } = address;
  const { storeSeq, storeName } = useSelector((state) => state.storeInfo);
  useEffect(() => {
    const fullAddress = `${addressRoad ? addressRoad : addressJibun} ${addressDetail}`;
    setDeliAddress(fullAddress);
  }, [address]);
  const { cartList } = useSelector((state) => state.cart);
  const checkedCart = state && cartList.filter((item) => state.includes(item.date));
  const updateTotalPrice = () => {
    let totalPrice = 0;
    checkedCart && checkedCart.forEach((item) => (totalPrice += item.totalPrice * item.count));
    totalPrice -= selectedCoupon.couponPrice;
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    updateTotalPrice();
  }, [checkedCart]);
  const sendOrder = () => {
    if (deliAddress === "") {
      alert("주소를 입력해 주세요.");
      return;
    }
    if (deliPhone === "") {
      alert("연락처를 입력해 주세요.");
      return;
    }
    if (!storeName) {
      alert("매장 정보가 없습니다. 배달 가능한 주소를 입력해 주세요.");
      return;
    }
    if (totalPrice < 15000) {
      alert("주문 가능한 금액은 15000원 이상입니다.");
      return;
    }
    const orderCartList = checkedCart.map((item) => {
      const updateCart = {
        count: item.count,
        menu: item.menuInfo.seq,
        ...(item.sideInfo && { sideOpt: item.sideInfo[0].sideOptSeq }),
        ...(item.drinkInfo && { drinkOpt: item.drinkInfo[0].drinkOptSeq }),
        ...(item.drink2Info && { drinkOpt2: item.drink2Info[0].drinkOptSeq }),
        ...(item.ingredientInfo && {
          ingredient: item.ingredientInfo.map((item) => item.ingredirentSeq),
        }),
      };
      return updateCart;
    });
    const orderSheet = {
      pay: payment,
      cart: orderCartList,
      message: deliMessage,
      address: addressRoad ? addressRoad : addressJibun,
      detailAddress: addressDetail,
      store: storeSeq,
      // member:""
      ...(selectedCoupon.couponSeq !== 0 && { couponSeq: selectedCoupon.couponSeq }),
    };
    console.log(orderSheet);
    putOrder(orderSheet)
      .then((res) => {
        setDisableButton(true);
        if (res.status) {
          navigate("/orderSuccess", { state: "isDone" });
          dispatch(removeCart(state));
        } else {
          alert(res.message);
          setDisableButton(false);
        }
      })
      .catch((err) => {
        alert("문제가 발생하였습니다. 다시 시도해주세요.");
        setDisableButton(false);
      });
  };
  return (
    <>
      <Helmet>
        <title>주문하기</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">주문하기</h2>
        <div className="py-4">
          <DeliInfo
            deliMessage={deliMessage}
            setDeliMessage={setDeliMessage}
            deliAddress={deliAddress}
            setDeliAddress={setDeliAddress}
            deliPhone={deliPhone}
            setDeliPhone={setDeliPhone}
            storeName={storeName}
          />
          <OrderInfo orderData={checkedCart} />
          <Coupon selectedCoupon={selectedCoupon} setSelectedCoupon={setSelectedCoupon} />
          <Payment totalPrice={totalPrice} payment={payment} setPayment={setPayment} />
        </div>
        <div className="flex justify-end gap-4">
          <DisabledButton name="취소" />
          <ActiveButton event={sendOrder} disabled={disableButton}>
            결제하기
          </ActiveButton>
        </div>
      </div>
    </>
  );
};

export default Order;
