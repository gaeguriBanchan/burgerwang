/** @format */
import React from 'react';
import UserInfoType from '../base/UserInfoType';
import UserPassword from '../base/UserPassword';

const JoinPw = ({ joinPw, userPw, joinPwCheck, userPwCheck }) => {


  return (
    <div className="pb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-key1 bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">비밀번호 입력</span>
      </h3>
      <div className="bg-white drop-shadow  px-16 py-6 text-2xl">
        <div className="flex py-6">
          <div className="w-1/3 py-4 font-black">
            <UserInfoType name={'비밀번호'} />
          </div>
          <div className="w-full">
            <UserPassword name={'비밀번호'} 
            joinPw={joinPw} 
            userPw={userPw} />
            <UserPassword
              name={'비밀번호 확인'}
              joinPwCheck={joinPwCheck}
              userPwCheck={userPwCheck}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPw;
