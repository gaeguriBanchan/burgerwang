import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import man from '../../assets/ninggen.jpg';
import { useNavigate } from 'react-router';

const GoMypage = () => {
  // 김재진 : 타이틀 출력
  const navigate = useNavigate();
  const disptach = useDispatch();
  const goMypage = () => {
    navigate('/mypage');
  };
  const userInfo = useSelector((state) => {
    return state.user;
  });
  return (
    <>
      <div className='flex justify-between gap-5 self-center'>
        <img src={man} alt='man' className='w-16 h-16 rounded-full' />
        <div>
          <p className='text-2xl'>김그린 님 안녕하세요</p>
          {/* 김재진 : 마이페이지이동 */}
          <span className='text-2xl  cursor-pointer' onClick={goMypage}>
            MY왕 바로가기 {'>'}
          </span>
        </div>
      </div>
    </>
  );
};

export default GoMypage;
