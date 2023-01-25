<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const HomeLogin = () => {
  return (
    <div className='grid grid-cols-3 w-3/12 h-10 mx-auto'>
      <span className='bg-slate-600 text-white flex justify-center text-2xl py-1'>
        <Link to='/login'>로그인</Link>
      </span>
      <span className='bg-lime-600 text-white flex justify-center text-2xl py-1'>
        매장위치
      </span>
      <span className='bg-red-600 text-white flex justify-center text-2xl py-1'>
        <Link to='/menu'>메뉴보기</Link>
      </span>
=======
import React from "react";

const HomeLogin = () => {
  return (
    <div className="grid grid-cols-3 w-3/12 h-10 mx-auto">
      <span className="bg-slate-600 text-white flex justify-center text-2xl py-1">로그인</span>
      <span className="bg-lime-600 text-white flex justify-center text-2xl py-1">매장위치</span>
      <span className="bg-red-600 text-white flex justify-center text-2xl py-1">메뉴보기</span>
>>>>>>> 864ed5cb00e1b8451c035a0a06b327300ae24e69
    </div>
  );
};

export default HomeLogin;
