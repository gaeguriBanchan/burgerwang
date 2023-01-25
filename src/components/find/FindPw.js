import React from "react";
import UserEmailId from "../base/UserEmailId";
import UserInfoType from "../base/UserInfoType";
import UserName from "../base/UserName";

const FindPw = () => {
  return (
    <div className="bg-white drop-shadow ">
      <p className="w-full bg-ededed px-16 py-6 text-xl">
        회원님의 정보(이메일)로 비밀벊 재설정을 위한 경로를 보내드립니다.
      </p>
      <div className="px-16 py-6 text-2xl pl-14">
        <div className="flex">
          <UserInfoType type={"이름"} />
          <UserName />
        </div>
        <div className="flex">
          <UserInfoType type={"이메일 주소"} />
          <UserEmailId />
        </div>
        <ul className="text-lg pt-20 pl-6" style={{ listStyle: "disc" }}>
          <li>
            가입 시 입력한 이메일로 비밀번호 재설정을 위한 경로가 발송 됩니다.
          </li>
          <li>
            네이버, 카카오톡, 삼성앱카드, 애플아이디로 가입하신 회원님께서는
            해당 서비스에서 아이디/
            <br />
            비밀번호 찾기를 진행해 주세요
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FindPw;
