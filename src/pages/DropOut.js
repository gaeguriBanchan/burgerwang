/** @format */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import ActiveBlackButton from '../components/base/ActiveBlackButton';
import ActiveButton from '../components/base/ActiveButton';
import UserInfoType from '../components/base/UserInfoType';
import UserPassword from '../components/base/UserPassword';
import useInput from '../components/join/hook/useInput';
const DropOut = () => {
  const list = ['개인정보보호', '아이디변경', '사이트이용불만', '직접입력'];
  const [loginPw, userloginPw] = useInput('');

  return (
    <div>
      <Helmet>
        <title>회원 탈퇴</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container max-w-6xl px-5">
        <div className="container w-9/12 pt-12">
          <h3 className="mb-4 pl-12 flex items-center bg-icon-out bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">탈퇴 사유</span>
          </h3>
          <div className="bg-white drop-shadow px-16 py-10 text-2xl mb-10">
            <select className="w-full bg-underline bg-repeat-x bg-bottom outline-none pb-5">
              <option value="" select="true">
                탈퇴사유를 선택해주세요
              </option>
              {list.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <h3 className="mb-4 pl-12 flex items-center bg-icon-person bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">기본정보</span>
          </h3>
          <div className="bg-white drop-shadow mb-6">
            <div className="px-16 py-6 text-2xl">
              <div className=" flex items-center pb-6">
                <UserInfoType name={'이메일'} />
                <p className="w-full  font-black mr-2">User@email.com</p>
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
          <label className="flex justify-end mb-12" id="out">
            <input className="mr-2" htmlFor="out" type="checkbox" />위 내용을
            확인하였으며, 버거킹 탈퇴를 합니다.
          </label>
        </div>
        <center>
          <ActiveButton children={'취소'} />
          <ActiveBlackButton name={'변경'} />
        </center>
      </div>
    </div>
  );
};

export default DropOut;
