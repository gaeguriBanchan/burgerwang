/** @format */

import React from 'react';
import { useState, useEffect } from 'react';

const UserName = (name) => {
  const [joinName, steJoinName] = useState('');
  const userName = (e) => {
    steJoinName(e.target.value);
    console.log(joinName);
  };
  useEffect(() => {
    console.log('이름', joinName);
  }, [joinName, steJoinName]);

  return (
    <div className="flex text-2xl w-full pb-6">
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
        type="text"
        placeholder="이름"
        required
        value={joinName}
        onChange={(e) => userName(e)}
      />
    </div>
  );
};

export default UserName;
