import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import { Helmet } from "react-helmet-async";
import ActiveButton from "../components/base/ActiveButton";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
const OrderDone = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (!state) {
      navigate("/menu");
    }
  }, [state]);
  return (
    <>
      <Helmet>
        <title>주문완료</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="flex flex-col items-center px-20 py-32">
        <img src={logo} alt="버거왕" className="w-52" />
        <p className="mt-8 text-2xl font-black text-9a918c">주문이 완료되었습니다.</p>
        <div className="flex justify-between gap-4 mt-12">
          <Link to="/orderList">
            <ActiveButton>메뉴로 이동하기</ActiveButton>
          </Link>
          <Link to="/orderList">
            <ActiveBlackButton>주문 내역 확인</ActiveBlackButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderDone;
