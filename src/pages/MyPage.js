/** @format */
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageName from '../components/base/PageName';

const MyPage = () => {
//   {
//     "status": false,
//     "message": "로그인 먼저 해주세요.",
//     "code": "BAD_REQUEST"
// }

//   {
//     "list": {
//         "memberSeq": 12,
//         "memberEmail": "user002@email.com",
//         "memberName": "신입",
//         "memberPhone": "010-6666-1111",
//         "memberGen": 2,
//         "memberBirth": "2000-10-11",
//         "memberGrade": "웰컴"
//     },
//     "message": "회원정보 조회완료!",
//     "code": "ACCEPTED"
// }

// async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }






  useEffect(() => {
    axios.get('http://192.168.0.122:9898/api/member/mypage')
    .then()
    .catch();
  }, []);

  return (
    <div>
      <Helmet>
        <title>MY킹</title>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <PageName pagename={'MY킹'} />

        <div className="flex justify-between ">
          <div className="text-2xl">
            <span className="font-JUA">
              <em className="not-italic font-black">김그린</em> &nbsp;님!&nbsp;
            </span>
            <span>반갑습니다</span>
            <ul
              className="
            flex font-JUA text-base"
            >
              <Link to="/infoChange" className="mr-5">
                정보변경 &#62;
              </Link>
              <Link>MY 배달지 &#62;</Link>
            </ul>
          </div>
          <ul className="h-14 flex justify-between font-black">
            <li className="mb-4 px-16 flex flex-col bg-icon-welcome bg-no-repeat bg-contain bg-left">
              <span className="text-gray-500">멤버십</span>
              <span>WELCOME</span>
            </li>
            <li className="mb-4 px-16 flex items-center bg-icon-coupon bg-no-repeat bg-contain  bg-left">
              <span>나의쿠폰</span>
            </li>
            <li className="mb-4 px-16 flex items-center bg-icon-order bg-no-repeat bg-contain  bg-left">
              <span>주문이력</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
