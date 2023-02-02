/** @format */
import React from 'react';
import UserInfoType from '../base/UserInfoType';
import UserPassword from '../base/UserPassword';

const JoinPw = ({ joinPw, userPw, joinPwCheck, userPwCheck, JoinPw, name }) => {
  const checkpw = () => {
    console.log(joinPw, joinPwCheck);
    if (joinPw !== joinPwCheck) {
      return (
        <p className="text-base text-bgwred pt-2">
          비밀번호가 일치하지 않습니다.
        </p>
      );
    }
    if (!joinPwCheck) {
      return (
        <p className="text-base text-bgwred pt-2">
          비밀번호 확인을 입력해 주세요
        </p>
      );
    } else {
      return <p>&nbsp;</p>;
    }
  };

  return (
    <div className="pb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-key1 bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">비밀번호 입력</span>
      </h3>
      <div className="bg-white drop-shadow  px-16 py-6 text-2xl">
        <div className="flex py-6">
          <div className="w-1/3 py-4 font-black">
            <UserInfoType name={'비밀번호'} />
          </div>
          <div className="w-full">
            <UserPassword
              name={'비밀번호 영문 숫자 6자리 이상'}
              JoinPw={JoinPw}
              joinPw={joinPw}
              userPw={userPw}
            />
            <UserPassword
              name={'비밀번호 확인'}
              JoinPw={JoinPw}
              joinPwCheck={joinPwCheck}
              userPwCheck={userPwCheck}
              checkpw={checkpw}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPw;
