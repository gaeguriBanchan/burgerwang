/** @format */

import React from 'react';
import UserInfoType from '../base/UserInfoType';
import UserName from '../base/UserName';
import UserPhon from '../base/UserPhon';

const FindId = ({ joinName, userName, joinPhon, userPhon }) => {
  return (
    <div className="bg-white drop-shadow ">
      <p className="w-full bg-ededed px-16 py-6 text-xl">
        가입시 회원정보로 등록한 이름과 휴대폰 번호를 입력해 주세요
      </p>
      <div className="px-16 py-6 text-2xl pl-14">
        <div className="flex">
          <UserInfoType name={'이름'} />
          <UserName joinName={joinName} userName={userName} />
        </div>
        <div className="flex">
          <UserInfoType name={'휴대폰 번호'} />
          <UserPhon joinPhon={joinPhon} userPhon={userPhon} />
        </div>
        <ul className="text-lg pt-10 pl-6" style={{ listStyle: 'disc' }}>
          <li>
            가입 시 입력한 이름과 휴대폰번호로 아이디 정보를 찾을 수 있습니다.
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

export default FindId;
