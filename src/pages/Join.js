/** @format */
import { Helmet } from "react-helmet-async";
import JoinProfile from "../components/join/JoinProfile";
import JoinOptional from "../components/join/JoinOptional";
import JoinPw from "../components/join/JoinPw";

import PageName from "../components/base/PageName";
import { useEffect, useState } from "react";

const Join = () => {
  const [joinEmail, setJoinEmail] = useState("");
  const [joinName, steJoinName] = useState("");
  const [joinPhon, setJoinPhon] = useState("");
  const [joinPw, setJoinPw] = useState("");
  const [joinPwCheck, setJoinPwCheck] = useState("");

  const userEmail = (e) => {
    setJoinEmail(e.target.value);
    console.log(joinEmail);
  };
  const userName = (e) => {
    steJoinName(e.target.value);
    console.log(joinName);
  };

  const userPhon = (e) => {
    setJoinPhon(e.target.value);
    console.log(joinPhon);
  };
  const userPw = (e) => {
    setJoinPw(e.target.value);
    console.log(joinPw);
  };
  const userPwCheck = (e) => {
    setJoinPwCheck(e.target.value);
    console.log(joinPwCheck);
  };

  const registFunc = (e) => {
    e.preventDefault();
    if (!joinEmail) {
      window.scrollTo(0, 0);
      return alert("이메일을 입력하세요.");
    }
    if (!joinName) {
      window.scrollTo(0, 0);
      return alert("이름을 입력하세요.");
    }
    if (!joinPhon) {
      window.scrollTo(0, 0);
      return alert("휴대폰 번호를 입력하세요.");
    }
    if (!joinPw) {
      return alert("비밀번호를 입력하세요.");
    }
    if (!joinPwCheck) {
      return alert("비밀번호를 확인해주세요.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>회원가입</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <form>
        <div className="container max-w-6xl px-5 py-12">
          <PageName pagename={"회원가입"} />
          <JoinProfile
            userEmail={userEmail}
            joinEmail={joinEmail}
            joinName={joinName}
            userName={userName}
            joinPhon={joinPhon}
            userPhon={userPhon}
          />
          <JoinOptional />
          <JoinPw
            joinPw={joinPw}
            userPw={userPw}
            joinPwCheck={joinPwCheck}
            userPwCheck={userPwCheck}
          />
        </div>
        <center>
          <button
            className="w-48 h-16 ml-1 bg-[#C0AFA6] text-white text-2xl font-black rounded-xl mb-20"
            type="submit"
            onClick={(e) => {
              registFunc(e);
            }}
          >
            회원가입
          </button>
        </center>
      </form>
    </div>
  );
};

export default Join;
