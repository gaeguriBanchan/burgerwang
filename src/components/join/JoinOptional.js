/** @format */

import React from "react";
import UserBirthDate from "../base/UserBirthDate";
import UserGender from "../base/UserGender";

const JoinOptional = () => {

  return (
    <div className="mb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-check bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">선택정보</span>
      </h3>
      <div className="bg-white drop-shadow">
        <ul className="px-16 py-6 text-2xl">
          <UserGender />
          <UserBirthDate />
        </ul>
      </div>
    </div>
  );
};

export default JoinOptional;
