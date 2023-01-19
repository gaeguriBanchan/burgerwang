import React from 'react';
import { Link } from 'react-router-dom';

const HomeLogout = () => {
  return (
    <div className='grid grid-cols-4 w-4/12 h-10 mx-auto'>
      <span className='bg-slate-600 text-white flex justify-center text-2xl py-1'>
        로그아웃
      </span>
      <span className='bg-amber-400 text-white flex justify-center text-2xl py-1'>
        MY왕
      </span>
      <span className='bg-lime-600 text-white flex justify-center text-2xl py-1'>
        매장위치
      </span>
      <span className='bg-red-600 text-white flex justify-center text-2xl py-1'>
        <Link to='/menu'>메뉴보기</Link>
      </span>
    </div>
  );
};

export default HomeLogout;
