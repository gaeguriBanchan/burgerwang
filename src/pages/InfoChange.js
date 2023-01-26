/** @format */
import { Helmet } from "react-helmet-async";
import React from "react";
import PageName from "../components/base/PageName";
import UserInfoType from "../components/base/UserInfoType";
import UserEmailId from "../components/base/UserEmailId";
import UserPassword from "../components/base/UserPassword";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import DisabledButton from "../components/base/DisabledButton";

const InfoChange = () => {
  return (
    <div>
      <Helmet>
        <title>회원정보 변경</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <div className="container w-9/12">
          <PageName pagename={"회원정보 변경"} />
          <h3 className="mb-4 pl-12 flex items-center bg-icon-person bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">기본정보</span>
          </h3>
          <div className="bg-white drop-shadow">
            <p className="w-full bg-ededed px-16 py-6 text-xl">
              안전한 개인정보 보호를 위해 버거킹 회원 비밀번호를 한 번 더
              입력해주세요
            </p>
            <div className="px-16 py-6 text-2xl">
              <div className="flex pb-6">
                <UserInfoType type={"이메일 아이디"} />
                <UserEmailId emailId={"이메일 아이디"} />
              </div>
              <div className="flex text-2xl pb-6">
                <UserInfoType type={"현재 비밀번호"} />
                <UserPassword pw={"현재 비밀번호"} />
              </div>
            </div>
          </div>
          <center className=" pt-10">
            <DisabledButton name={"취소"} />
            <ActiveBlackButton name={"완료"} />
          </center>
        </div>
      </div>
    </div>
  );
};

export default InfoChange;
