import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ActiveBlackButton from "../base/ActiveBlackButton";
const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center px-20 py-10">
      <img src={logo} alt="버거왕" className="w-52" />
      <p className="mt-8 text-2xl font-black text-9a918c">카트에 담긴 메뉴가 없습니다.</p>
      <Link to="/menu" className="mt-8">
        <ActiveBlackButton name="메뉴 추가" />
      </Link>
    </div>
  );
};

export default CartEmpty;
