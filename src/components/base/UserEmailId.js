/** @format */

// import React, { useEffect } from 'react';
// import { useState } from 'react';
const UserEmailId = ({ emailId, register }) => {
  // const [joinEmail, setJoinEmail] = useState('');

  // const userEmail = (e) => {
  //   setJoinEmail(e.target.value);
  //   console.log(joinEmail);
  // };

  // useEffect(() => {
  //   console.log('이메일', joinEmail);
  // }, [joinEmail, setJoinEmail]);

  return (
    <div className="flex text-2xl w-full ">
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none py-4"
        type="email"
        placeholder={emailId}
        {...register('email', { required: '이메일을 입력해주세요' })}
        required
        // value={joinEmail}
        // onChange={(e) => userEmail(e)}
      />
    </div>
  );
};

export default UserEmailId;
