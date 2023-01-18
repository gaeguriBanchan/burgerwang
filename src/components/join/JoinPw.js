/** @format */
import React from "react";
import UserPassword from "../base/UserPassword";

const JoinPw = () => {
  return (
    <div className="pb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-key1 bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">비밀번호 입력</span>
      </h3>
      <div className="flex bg-white drop-shadow px-16 py-6 text-2xl">
        <span className="w-1/3 py-4 font-black">비밀번호</span>
        <div className="w-full">
          <UserPassword pw={"비밀번호"} />
          <UserPassword pw={"비밀번호 확인"} />
        </div>
      </div>
    </div>
  );
};

export default JoinPw;
