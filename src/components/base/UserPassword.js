/** @format */

import React, { useState, useEffect } from 'react';
import BlindEyesButton from './BlindEyesButton';

const UserPassword = ({ pw }) => {
  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false,
  });
  const [password, setPassword] = useState();
  const userPassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    // console.log('비밀번호', password);
  }, [password, setPassword]);

  const handlePwType = (e) => {
    e.preventDefault();
    setPwType(() => {
      if (!pwType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  return (
    <div className="w-full">
      <div className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
        <input
          className="w-full outline-none"
          type={pwType.type}
          placeholder={pw}
          required
          onChange={(e) => userPassword(e)}
        />
        <BlindEyesButton
          pwType={pwType}
          setPwType={setPwType}
          handlePwType={handlePwType}
        />
      </div>
    </div>
  );
};

export default UserPassword;
