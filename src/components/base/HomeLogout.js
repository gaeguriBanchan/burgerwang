import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../reducer/userSlice';

const HomeLogout = () => {
  // 김재진 : 로그아웃 기능
  const disptach = useDispatch();
  const clickLogout = () => {
    disptach(clearUser());
  };
  // Mypage 이동
  const navigate = useNavigate();
  const clickMypage = () => {
    navigate('/mypage');
  };
  return (
    <div className='grid grid-cols-4 w-4/12 h-10 mx-auto'>
      <span
        onClick={clickLogout}
        className='bg-slate-600 text-white flex justify-center text-2xl py-1 cursor-pointer'
      >
        로그아웃
      </span>
      <span
        onClick={clickMypage}
        className='bg-amber-400 text-white flex justify-center text-2xl py-1 cursor-pointer'
      >
        MY왕
      </span>
      <span className='bg-lime-600 text-white flex justify-center text-2xl py-1'>
        <Link to='/mapPage'>매장위치</Link>
      </span>
      <span className='bg-red-600 text-white flex justify-center text-2xl py-1'>
        <Link to='/menu'>메뉴보기</Link>
      </span>
    </div>
  );
};

export default HomeLogout;
