/** @format */

import React, { useState, useEffect } from "react";
import BlindEyesButton from "./BlindEyesButton";

const UserPassword = ({ name, joinPw, userPw, joinPwCheck, userPwCheck }) => {
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });

  const handlePwType = (e) => {
    e.preventDefault();
    setPwType(() => {
      if (!pwType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };
  useEffect(() => {
    console.log("비밀번호", joinPw);
  }, [joinPw]);
  useEffect(() => {
    console.log("비밀번호 확인", joinPwCheck);
  }, [joinPwCheck]);

  if (name === "비밀번호 ") {
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
            onChange={(e)=>userPw(e)}
          />
          <BlindEyesButton
            pwType={pwType}
            setPwType={setPwType}
            handlePwType={handlePwType}
          />
        </div>
        <p className="text-base text-bgwred pt-2">{name} 을 입력해 주세요</p>
      </div>
    );
  } else {
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
        <p className="text-base text-bgwred pt-2">{name} 을 입력해 주세요</p>
      </div>
    );
  }
};

export default UserPassword;
