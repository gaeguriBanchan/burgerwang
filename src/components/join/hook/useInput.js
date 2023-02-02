/** @format */

import { useEffect } from 'react';
import { useState } from 'react';

const useInput = (initialForm) => {
  const [data, setData] = useState(initialForm);

  const userData = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {}, [data]);



  return [data, userData];

  // const [joinEmail, setJoinEmail] = useState(initialForm);
  // const [loginEmail, setLoginEmail] = useState(initialForm);
  // const [joinName, steJoinName] = useState(initialForm);
  // const [joinPhon, setJoinPhon] = useState(initialForm);
  // const [joinPw, setJoinPw] = useState(initialForm);
  // const [joinPwCheck, setJoinPwCheck] = useState(initialForm);
  // const [loginPw, setLoginPw] = useState(initialForm);
  // const [newPw, setNewPw] = useState(initialForm);
  // const [newPwCheck, setNewPwCheck] = useState(initialForm);

  // const userEmail = (e) => {
  //   setJoinEmail(e.target.value);
  //   console.log(joinEmail);
  // };
  // const userName = (e) => {
  //   steJoinName(e.target.value);
  //   // console.log(joinName);
  // };
  // const userPhon = (e) => {
  //   setJoinPhon(e.target.value);
  //   // console.log(joinPhon);
  // };
  // const userPw = (e) => {
  //   setJoinPw(e.target.value);
  //   console.log(joinPw);
  // };
  // const userPwCheck = (e) => {
  //   setJoinPwCheck(e.target.value);
  // };
  // const userLoginEmail = (e) => {
  //   setLoginEmail(e.target.value);
  //   console.log(loginEmail);
  // };
  // const userloginPw = (e) => {
  //   setLoginPw(e.target.value);
  //   console.log(loginPw);
  // };

  // const userNewPw = (e) => {
  //   setNewPw(e.target.value);
  //   console.log(newPw);
  // };

  // const userNewPwCheck = (e) => {
  //   setNewPwCheck(e.target.value);
  //   console.log(newPwCheck);
  // };

  // return [
  //   joinEmail,
  //   userEmail,
  //   loginEmail,
  //   userLoginEmail,
  //   joinName,
  //   userName,
  //   joinPhon,
  //   userPhon,
  //   joinPw,
  //   userPw,
  //   joinPwCheck,
  //   userPwCheck,
  //   loginPw,
  //   userloginPw,
  //   newPw,
  //   userNewPw,
  //   newPwCheck,
  //   userNewPwCheck,
  // ];
};

export default useInput;
