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

const Home = () => {
  return (
    <div>
      <div className='w-full flex justify-between items-start absolute z-50'>
        {/* <HomeLogin/> */}
        <HomeLogout/>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/c7b65061-ecb5-4b5a-873f-5f6d7e004656.png'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/4ce2f84f-bd7c-4484-a2b9-d93965cd725c.png'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/d53633e4-28d6-4b03-af79-f34ff65f9413.png'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/665a420f-55cc-4468-90b7-5d43fc458062.png'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
