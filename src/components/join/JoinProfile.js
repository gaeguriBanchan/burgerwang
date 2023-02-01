/** @format */

import React from 'react';
import UserEmailId from '../base/UserEmailId';
import UserInfoType from '../base/UserInfoType';
import UserName from '../base/UserName';
import UserPhon from '../base/UserPhon';

const JoinProfile = ({
  joinEmail,
  userEmail,
  userPhon,
  joinPhon,
  joinName,
  userName,
}) => {
  //   // 전화번호 자동 정규식 처리
  // const regexPhoneNumber = (target) => {
  //   target.value = target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
  // }
  //input  oninput={regexPhoneNumber(this)}

  return (
    <div className="mb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-person bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">기본정보</span>
      </h3>
      <div className="bg-white drop-shadow">
        <p className="w-full bg-ededed px-16 py-6 text-xl">
          회원정보를 입력해주세요
        </p>
        <div className="px-16 py-6 text-2xl">
          <div className="flex  py-6">
            <UserInfoType name={'이메일 아이디'} />
            <UserEmailId
              userEmail={userEmail}
              joinEmail={joinEmail}
              emailId={'이메일 아이디'}
              JoinProfile={JoinProfile}
            />
          </div>
          <div className="flex ">
            <UserInfoType name={'이름'} />
            <UserName joinName={joinName} userName={userName} />
          </div>
          <div className="flex  py-6">
            <UserInfoType name={'휴대폰 번호'} />
            <UserPhon joinPhon={joinPhon} userPhon={userPhon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProfile;
