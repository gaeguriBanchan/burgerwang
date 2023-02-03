/** @format */

import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import PageName from '../components/base/PageName';
import UserInfoType from '../components/base/UserInfoType';
import ChangeButton from '../components/base/ChangeButton';
import JoinOptional from '../components/join/JoinOptional';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../components/join/hook/useInput';
import { useSelector } from 'react-redux';
import PwChange from './PwChange';
import ActiveBlackButton from '../components/base/ActiveBlackButton';
import ActiveButton from '../components/base/ActiveButton';

const InfoChangeUpdate = () => {
  // const [use, userEmail] = useInput('');
  // const [loginPw, userloginPw] = useInput('');

  const navigate = useNavigate();

  const liginData = useSelector((state) => state.user);

  const registFunc = async (e) => {
    e.preventDefault();

    let params = {
      email: 'user002@email.com',
      pwd: 123456,
      chagePwd: 123456,
      phone: '010-1010-4425',
      gen: 1,
    };
    const seq = liginData.seq;
    // console.log(liginData);
    axios
      .get(`http://192.168.0.122:9898/api/member/update/${seq}`, params)
      .then((res) => {
        console.log(res);
        console.log(res.data.status);
        navigate('/infoChangeUpdate');
        // dispatch(loginUser(res.data.loginUser));
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response.data.message);
      });
  };
  const email = liginData.email;
  const name = liginData.name;
  const phone = liginData.phone;

  console.log(liginData);

  const linkMypage = () => {
    // 최금옥
    navigate('/mypage');
  };

  return (
    <div>
      <Helmet>
        <title>회원정보 변경</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <div className="container w-9/12">
          <PageName pagename={'회원정보 변경'} />
          <h3 className="mb-4 pl-12 flex items-center bg-icon-out bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">기본정보</span>
          </h3>
          <div className="bg-white drop-shadow mb-6">
            <div className="px-16 py-6 text-2xl">
              <div className=" flex items-center pb-6">
                <UserInfoType name={'이메일'} />
                <p className="w-full  font-black mr-2">{email}</p>
              </div>
              <div className="flex  items-center text-2xl pb-6">
                <UserInfoType name={'이름'} />
                <p className="w-full font-black mr-2">{name}</p>
              </div>
              <div className="flex  items-center text-2xl pb-6">
                <UserInfoType name={'핸드폰'} />
                <div className="flex items-center w-full font-black">
                  <p className=" mr-4">{phone}</p>
                  <div>
                    <ChangeButton name={'변경'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <JoinOptional />
          <PwChange />
        </div>
      </div>
      <div
        className="flex items-center justify-center pb-20
      "
      >
        <div onClick={linkMypage}>
          <ActiveBlackButton>취소</ActiveBlackButton>
        </div>
        <div onClick={registFunc}>
          <ActiveButton>확인</ActiveButton>
        </div>
      </div>
    </div>
  );
};

export default InfoChangeUpdate;
