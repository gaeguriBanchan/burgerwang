/** @format */

import React from 'react';
import UserEmailId from '../base/UserEmailId';
import UserInfoType from '../base/UserInfoType';
import UserName from '../base/UserName';
import UserPhon from '../base/UserPhon';

const JoinProfile = () => {
  return (
    <div className="mb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-person bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">기본정보</span>
      </h3>
      <p className="w-full bg-ededed px-16 py-6 text-xl">
        회원정보를 입력해주세요
      </p>
      <div className="bg-white drop-shadow  px-16 py-6 text-2xl">
        <div className="flex  py-6">
          <UserInfoType type={'이메일 아이디'} />
          <UserEmailId emailId={'이메일 아이디'} />
        </div>
        <div className="flex ">
          <UserInfoType type={'이름'} />
          <UserName />
        </div>
        <div className="flex  py-6">
          <UserInfoType type={'휴대폰 번호'} />
          <UserPhon />
        </div>
      </div>
    </div>
  );
};

export default JoinProfile;
