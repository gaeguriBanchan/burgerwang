/** @format */

import React from "react";
import UserEmailId from "../base/UserEmailId";
import UserName from "../base/UserName";
import UserPhon from "../base/UserPhon";

const JoinProfile = ({ userEmail, userName, userPhon }) => {
  return (
    <div className="mb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-person bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">기본정보</span>
      </h3>
      <div className="bg-white drop-shadow">
        <p className="w-full bg-ededed px-16 py-6 text-xl">
          회원정보를 입력해주세요
        </p>
        <div className="flex flex-col px-16 py-6 text-2xl">
          <UserEmailId userEmail={userEmail} emailId={"이메일 아이디"} />
          <UserName name={userName} />
          <UserPhon phon={userPhon} />
        </div>
      </div>
    </div>
  );
};

export default JoinProfile;
