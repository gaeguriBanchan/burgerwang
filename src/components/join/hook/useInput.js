/** @format */

import { useEffect, useState } from 'react';

const useInput = (initialForm) => {
  const [joinEmail, setJoinEmail] = useState(initialForm);
  const [joinName, steJoinName] = useState(initialForm);
  const [joinPhon, setJoinPhon] = useState(initialForm);
  const [joinPw, setJoinPw] = useState(initialForm);
  const [joinPwCheck, setJoinPwCheck] = useState(initialForm);

  const userEmail = (e) => {
    setJoinEmail(e.target.value);
    console.log(joinEmail);
  };
  const userName = (e) => {
    steJoinName(e.target.value);
    // console.log(joinName);
  };
  const userPhon = (e) => {
    setJoinPhon(e.target.value);
    // console.log(joinPhon);
  };
  const userPw = (e) => {
    setJoinPw(e.target.value);
    console.log(joinPw);
  };
  const userPwCheck = (e) => {
    setJoinPwCheck(e.target.value);
  };

  useEffect(() => {
    console.log('이메일', joinEmail);
  }, [joinEmail]);

  return [
    joinEmail,
    userEmail,
    joinName,
    userName,
    joinPhon,
    userPhon,
    joinPw,
    userPw,
    joinPwCheck,
    userPwCheck,
  ];
};

export default useInput;
