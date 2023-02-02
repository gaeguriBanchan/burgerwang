/** @format */

// /** @format */

import { Outlet } from 'react-router';
import logo from '../../assets/logo.png';
import man from '../../assets/ninggen.jpg';
import { Link, useNavigate } from 'react-router-dom';

import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import man from '../../assets/ninggen.jpg';
import { useSelector, useDispatch } from 'react-redux';
// 김재진 : 타이틀 출력
import GoMypage from './GoMypage';
const Header = () => {
  const navigate = useNavigate();
  const linkMypage = () => {
    navigate('/myPage');
  };

  
  // 김재진 : 타이틀 출력
  // const navigate = useNavigate();
  // const disptach = useDispatch();
  // const goMypage = () => {
  //   navigate('/mypage');
  //   disptach(setTitle({ title: '마이페이지' }));
  // };
  // const userInfo = useSelector((state) => {
  //   return state.user;
  // });
  return (
    <div>
      <div className="w-full bg-bgwred h-40 flex items-center">
        <div className="container max-w-6xl px-5 m-auto flex justify-between items-center">
          <Link to="/menu">
            <div className="flex gap-5 items-center">
              <img src={logo} alt="logo" className="max-h-20" />
              <span className="font-JUA text-6xl text-white">버거왕</span>
            </div>
          </Link>
          <div className="flex justify-between gap-5 items-center">
            <div className="w-12 h-12">
              <img src={profile} alt="man" className="rounded-full" />
            </div>
            <div>
              <p className="text-xl text-white">김그린 님 안녕하세요</p>
              <span className="text-xl text-white font-black" onClick={linkMypage}
                style={{ cursor: 'pointer' }}>MY왕 바로가기 {">"}</span>
            </div>
          </div>
          {/* {userInfo.emil !== '' ? <GoMypage/>: ''} */}
          <GoMypage />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
