/** @format */

import React, { useState } from 'react';
import BlindEyesButton from './BlindEyesButton';

const UserPassword = ({
  JoinPw,
  name,
  joinPw,
  userPw,
  joinPwCheck,
  userPwCheck,
  loginPw,
  userloginPw,
  newPw,
  userNewPw,
  newPwCheck,
  userNewPwCheck,

  checkpw,
}) => {
  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false,
  });
  const handlePwType = (e) => {
    e.preventDefault();
    setPwType(() => {
      if (!pwType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };
  if ((JoinPw, name === '비밀번호 영문 숫자 6자리 이상')) {
    return (
      <div className="w-full">
        <div className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
          <input
            className="w-full outline-none"
            required
            type={pwType.type}
            placeholder={name}
            minLength={6}
            value={joinPw}
            onChange={(e) => userPw(e)}
          />
          <BlindEyesButton
            pwType={pwType}
            setPwType={setPwType}
            handlePwType={handlePwType}
          />
        </div>
        {joinPw === '' ? (
          <p className="text-base text-bgwred pt-2">{name}를 입력해 주세요</p>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    );
  }
  if ((JoinPw, name === '비밀번호 확인')) {
    return (
      <div className="w-full">
        <div className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
          <input
            className="w-full outline-none"
            required
            type={pwType.type}
            placeholder={name}
            minLength={6}
            value={joinPwCheck}
            onChange={(e) => userPwCheck(e)}
          />
          <BlindEyesButton
            pwType={pwType}
            setPwType={setPwType}
            handlePwType={handlePwType}
          />
        </div>
        {checkpw()}
      </div>
    );
  }
  if (name === '현재 비밀번호') {
    return (
      <div className="w-full">
        <div className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
          <input
            className="w-full outline-none"
            required
            type={pwType.type}
            placeholder={name}
            minLength={6}
            value={loginPw}
            onChange={(e) => userloginPw(e)}
          />
          <BlindEyesButton
            pwType={pwType}
            setPwType={setPwType}
            handlePwType={handlePwType}
          />
        </div>
        {loginPw === '' ? (
          <p className="text-base text-bgwred pt-2">{name}를 입력해 주세요</p>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    );
  }
  if (name === '새 비밀번호') {
    return (
      <div className="w-full">
        <div className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
          <input
            className="w-full outline-none"
            required
            type={pwType.type}
            placeholder={name}
            minLength={6}
            value={newPw}
            onChange={(e) => userNewPw(e)}
          />
          <BlindEyesButton
            pwType={pwType}
            setPwType={setPwType}
            handlePwType={handlePwType}
          />
        </div>
        {newPw === '' ? (
          <p className="text-base text-bgwred pt-2">{name}를 입력해 주세요</p>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    );
  }
  if (name === '새 비밀번호 확인') {
    return (
      <div className="w-full">
        <div className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
          <input
            className="w-full outline-none"
            required
            type={pwType.type}
            placeholder={name}
            minLength={6}
            value={newPwCheck}
            onChange={(e) => userNewPwCheck(e)}
          />
          <BlindEyesButton
            pwType={pwType}
            setPwType={setPwType}
            handlePwType={handlePwType}
          />
        </div>
        {checkpw()}
      </div>
    );
  }
  if (name === '비밀번호') {
    return (
      <div className="w-full">
        <div className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
          <input
            className="w-full outline-none"
            required
            type={pwType.type}
            placeholder={name}
            minLength={6}
            value={loginPw}
            onChange={(e) => userloginPw(e)}
          />
          <BlindEyesButton
            pwType={pwType}
            setPwType={setPwType}
            handlePwType={handlePwType}
          />
        </div>
        <p className="text-base text-bgwred pt-2">&nbsp;</p>
      </div>
    );
  }
};

export default UserPassword;
