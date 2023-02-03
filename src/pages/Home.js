/** @format */

// import React from 'react';
// 스와이퍼
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import HomeLogin from '../components/base/HomeLogin';
import HomeLogout from '../components/base/HomeLogout';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearUser } from '../reducer/userSlice';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';

const Home = () => {
  // 김재진 : 로그인 데모 테스트를 위한 기능 추후 삭제
  // const disptach = useDispatch();
  // const demoLogin = () => {
  //   disptach(loginUser({ email: 'aaa@aaa.net', name: '김재진' }));
  // };
  // const demoLogOut = () => {
  //   disptach(clearUser());
  // };
  const navigate = useNavigate();
  const goMenu = () => {
    navigate('/menu');
  };
  const userInfo = useSelector((state) => {
    return state.user;
  });

  return (
    <div className='h-screen'>
      <Helmet>
        <title>홈</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      {/* 임시 로그인 로그아웃 버튼 */}
      {/* <button onClick={demoLogin}>로그인 테스트</button>
      <button onClick={demoLogOut}>/로그아웃 테스트</button> */}
      <div className='w-full flex justify-between items-start absolute z-50'>
        {userInfo.email === '' ? <HomeLogin /> : <HomeLogout />}
      </div>
      <div className='h-full flex-row'>
        <div className='w-9/12 h-2/5 m-auto'>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img
                src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/8c87dd03-5ec9-4238-90b0-770da9a3d55f.png'
                alt=''
                onClick={goMenu}
                className='cursor-pointer'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/c7b65061-ecb5-4b5a-873f-5f6d7e004656.png'
                alt=''
                onClick={goMenu}
                className='cursor-pointer'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/4ce2f84f-bd7c-4484-a2b9-d93965cd725c.png'
                alt=''
                onClick={goMenu}
                className='cursor-pointer'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/d53633e4-28d6-4b03-af79-f34ff65f9413.png'
                alt=''
                onClick={goMenu}
                className='cursor-pointer'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/665a420f-55cc-4468-90b7-5d43fc458062.png'
                alt=''
                onClick={goMenu}
                className='cursor-pointer'
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <iframe
          className='m-auto h-3/5 w-9/12'
          width='560'
          height=''
          src='https://www.youtube.com/embed/Ugc6oiYNSE8'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
