/** @format */

import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MapPage = () => {
  const { kakao } = window;

  const mapContainer = useRef(null); // 지도를 표시할 div
  const mapOption = {
    center: new kakao.maps.LatLng(35.868306, 128.594091), // 지도의 중심좌표
    level: 7, // 지도의 확대 레벨
  };

  const position = [
    {
      title: '대구성서이마트점',
      latlng: new kakao.maps.LatLng(35.853453, 128.510252),
      lat: 35.853453,
      long: 128.510252,
    },
    {
      title: '상인SK점',
      latlng: new kakao.maps.LatLng(35.817987, 128.535511),
      lat: 35.817987,
      long: 128.535511,
    },

    {
      title: '대구율하점',
      latlng: new kakao.maps.LatLng(35.866349, 128.696164),
      lat: 35.866349,
      long: 128.696164,
    },
    {
      title: '대구만촌점',
      latlng: new kakao.maps.LatLng(35.857172, 128.648845),
      lat: 35.857172,
      long: 128.648845,
    },
    {
      title: '삼성창조캠퍼스점',
      latlng: new kakao.maps.LatLng(35.883865, 128.59468),
      lat: 35.883865,
      long: 128.59468,
    },
    {
      title: '경대병원역SK점',
      latlng: new kakao.maps.LatLng(35.862645, 128.603182),
      lat: 35.862645,
      long: 128.603182,
    },
    {
      title: '대구지산점',
      latlng: new kakao.maps.LatLng(35.822715, 128.637763),
      lat: 35.822715,
      long: 128.637763,
    },
    {
      title: '대구평리DT점',
      latlng: new kakao.maps.LatLng(35.871733, 128.563524),
      lat: 35.871733,
      long: 128.563524,
    },
  ];
  const navigate = useNavigate();
  const goMenu = () => {
    navigate('/menu');
  };

  useEffect(() => {
    // // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    // const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    //지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(mapContainer.current, mapOption);

    for (let i = 0; i < position.length; i++) {
      // 마커가 표시될 위치입니다
      const markerPosition = position[i].latlng;
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
      // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      const iwContent = `<div style="padding:5px;">${position[i].title} <br><a href="https://map.kakao.com/link/to/${position[i].title},${position[i].lat}, ${position[i].long}" style="color:blue" target="_blank">길찾기</a></div>`;
      const iwPosition = position[i].latlng; //인포윈도우 표시 위치입니다
      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });
      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map);
    }
    map.relayout();
  }, []);
  return (
    <div>
      <div className="bg-black text-center">
        <span
          className="bg-black text-3xl text-white cursor-pointer"
          onClick={goMenu}
        >
          주문하러 가기
        </span>
      </div>
      <div
        className="w-full h-9oo"
        id="map"
        ref={mapContainer}
        style={{ height: 895 }}
      ></div>
    </div>
  );
};

export default MapPage;
