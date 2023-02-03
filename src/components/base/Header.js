/** @format */
import { Outlet } from "react-router";
import logo from "../../assets/images/logo.png";
// import profile from "../../assets/images/icon_profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearUser } from '../../reducer/userSlice';
// 김재진 : 타이틀 출력
import GoMypage from "./GoMypage";
const Header = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const userInfo = useSelector((state) => {
    return state.user;
  });
  return (
    <div>
      <div className="w-full bg-bgwred h-40 flex items-center">
        <div className="container max-w-6xl px-5 m-auto flex justify-between items-center">
          <Link to="/home">
            <div className="flex gap-5 items-center">
              <img src={logo} alt="logo" className="max-h-20" />
              <span className="font-JUA text-6xl text-white">버거왕</span>
            </div>
          </Link>
          {userInfo.email !== '' ? <GoMypage/>: ''}
          {/* <GoMypage /> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
