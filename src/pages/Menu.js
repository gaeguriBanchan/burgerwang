import React, { Fragment } from 'react';
import Food from '../components/base/Food';

const Menu = () => {
  return (
    <Fragment className=''>
      <div className='container max-w-6xl px-5 m-auto '>
        <div className='flex justify-between mb-14 mt-9'>
          <span className='text-4xl font-black'>메뉴</span>
          <ul className='flex justify-between basis-3/4 items-end '>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              스페셜&할인팩
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              신제품(new)
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              프리미엄
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              와퍼&주니어
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              치킨&슈림프버거
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              사이드
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              음료&디저트
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              독퍼
            </li>
          </ul>
        </div>
        <div className='grid grid-cols-4 gap-x-9 gap-y-28 mt-20'>
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
