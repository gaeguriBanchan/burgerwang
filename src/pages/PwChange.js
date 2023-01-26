/** @format */

import { Helmet } from "react-helmet-async";
import UserPassword from "../components/base/UserPassword";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import ActiveButton from "../components/base/ActiveButton";
import UserInfoType from "../components/base/UserInfoType";

const PwChange = () => {
  return (
    <div className="container max-w-6xl px-5 py-12">
      <Helmet>
        <title>비밀번호 변경</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container w-10/12">
        <h2 className=" font-JUA pb-12 text-4xl">비밀번호 변경</h2>
        <h3 className="mb-4 pl-12 flex items-center bg-icon-key1 bg-no-repeat bg-left">
          <span className="font-JUA text-2xl">비밀번호 입력</span>
        </h3>
        <div className="bg-white drop-shadow  px-16 py-6 text-2xl pl-14">
          <div className="flex text-2xl">
            <UserInfoType type={"현재 비밀번호"} />
            <UserPassword pw={"현재 비밀번호"} />
          </div>
          <div className="flex">
            <div className="w-1/3 py-4 font-black">
              <UserInfoType type={"새 비밀번호"} />
            </div>
            <div className="w-full">
              <UserPassword pw={"새 비밀번호"} />
              <UserPassword pw={"새 비밀번호 확인"} />
            </div>
          </div>
        </div>
      </div>
      <center className="pt-20">
        <ActiveBlackButton name={"취소"} />
        <ActiveButton name={"확인"} />
      </center>
    </div>
  );
};

export default PwChange;
