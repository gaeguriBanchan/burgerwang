/** @format */

import React from 'react';

const JoinProfile = () => {
  return (
    <div className="mb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-person bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">기본정보</span>
      </h3>
      <div className="bg-white drop-shadow">
        <p className="w-full bg-ededed px-16 py-6 text-xl">
          회원정보를 입력해주세요
        </p>
        <ul className="flex flex-col px-16 py-6 text-2xl">
          <li className="flex pb-10">
            <label className="w-1/3 py-4 font-black">이메일 아이디</label>
            <input
              className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
              type="email"
              placeholder="아이디 (이메일)"
              required

            />
          </li>
          <li className="flex pb-10">
            <label className="w-1/3 py-4 font-black">이름</label>
            <input
              className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
              type="text"
              placeholder="이름"
              required
            />
          </li>
          <li className="flex pb-10">
            <label className="w-1/3 py-4 font-black">휴대폰 번호</label>
            <input
              className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
              type="email"
              placeholder="아이디 (이메일)"
              required
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JoinProfile;
