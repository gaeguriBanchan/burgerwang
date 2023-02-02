/** @format */

// /** @format */

import { Outlet } from 'react-router';
import logo from '../../assets/logo.png';
import man from '../../assets/ninggen.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const linkMypage = () => {
    navigate('/myPage');
  };

  return (
    <div className="w-full grid grid-row-2">
      <div className="w-full p-7 bg-red-500 h-40 flex justify-between">
        <div className="container max-w-6xl px-5 m-auto flex justify-between">
          <div className="flex gap-5">
            <Link to="/home">
              <img src={logo} alt="logo" className="self-center max-h-24" />
            </Link>
            <span className="self-center text-6xl text-white ">
              <Link to="/home">버거왕</Link>
            </span>
          </div>
          {/* <span className='self-center p-2 px-10 rounded-full text-white bg-orange-900 text-2xl'>
          Home
        </span> */}
          <div className="flex justify-between gap-5 self-center">
            <img src={man} alt="man" className="w-16 h-16 rounded-full" />

            <div>
              <p className="text-2xl">김그린 님 안녕하세요</p>
              <span
                className="text-2xl "
                onClick={linkMypage}
                style={{ cursor: 'pointer' }}
              >
                MY왕 바로가기 {'>'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-black h-10 flex justify-between">
        <div className="container max-w-6xl px-5 m-auto flex justify-between">
          <div className=" grid grid-cols-4 gap-5 self-center">
            <p className="text-white">딜리버리</p>
            <p className="text-white">딜리버리</p>
            <p className="text-white">딜리버리</p>
            <p className="text-white">딜리버리</p>
          </div>
          <div className="grid grid-cols-3 gap-10 self-center">
            <p className="text-white">배달주소</p>
            <p className="text-white">배달매장</p>
            <p className="text-white">금액</p>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
