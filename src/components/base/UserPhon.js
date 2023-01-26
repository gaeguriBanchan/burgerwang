/** @format */
// import { useState, useEffect } from 'react';
import React from 'react';

const UserPhon = ({ register }) => {
  // const [joinPhon, setJoinPhon] = useState('');
  // const userPhon = (e) => {
  //   setJoinPhon(e.target.value);
  //   console.log(joinPhon);
  // };
  // useEffect(() => {
  //   console.log('핸드폰', joinPhon);
  // }, [joinPhon, setJoinPhon]);

  return (
    <div className="flex text-2xl w-full">
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none py-4"
        type="tel"
        placeholder="000-0000-0000"
        required
        // onChange={(e) => userPhon(e)}
        {...register('phon')}
      />
    </div>
  );
};

export default UserPhon;
