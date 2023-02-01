/** @format */
import { Helmet } from 'react-helmet-async';
import React from 'react';
import PageName from '../components/base/PageName';
import UserInfoType from '../components/base/UserInfoType';
import UserEmailId from '../components/base/UserEmailId';
import UserPassword from '../components/base/UserPassword';
import ActiveBlackButton from '../components/base/ActiveBlackButton';
import DisabledButton from '../components/base/DisabledButton';
import useInput from '../components/join/hook/useInput';
import { Link } from 'react-router-dom';

const InfoChange = () => {
  const [joinEmail, userEmail] = useInput('');
  const [loginPw, userloginPw] = useInput('');

  return (
    <div>
      <Helmet>
        <title>회원정보 변경</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <div className="container w-9/12">
          <PageName pagename={'회원정보 변경'} />
          <h3 className="mb-4 pl-12 flex items-center bg-icon-person bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">기본정보</span>
          </h3>
          <div className="bg-white drop-shadow">
            <p className="w-full bg-ededed px-16 py-6 text-xl">
              안전한 개인정보 보호를 위해 버거킹 회원 비밀번호를 한 번 더
              입력해주세요
            </p>
            <div className="px-16 py-6 text-2xl">
              <div className="flex">
                <UserInfoType name={'이메일'} />
                <UserEmailId
                  emailId={'이메일 아이디'}
                  joinEmail={joinEmail}
                  userEmail={userEmail}
                />
              </div>
              <div className="flex text-2xl pb-6">
                <UserInfoType name={'현재 비밀번호'} />
                <UserPassword
                  name={'현재 비밀번호'}
                  loginPw={loginPw}
                  userloginPw={userloginPw}
                />
              </div>
            </div>
          </div>
          <div className=" pt-10 flex justify-center items-center">
            <div>
              <DisabledButton name={'취소'} />
            </div>
            <Link to="/infoChangeUpdate">
              <ActiveBlackButton name={'완료'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoChange;
