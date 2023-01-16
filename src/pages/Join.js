/** @format */
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import JoinProfile from '../components/join/JoinProfile';
import JoinOptional from '../components/join/JoinOptional';
import JoinPw from '../components/join/JoinPw';
const Join = () => {
  const [joinEmail, setJoinEmail] = useState('');
  const [joinName, steJoinName] = useState('');
  const [joinPhon, setJoinPhon] = useState();

  const email = (e) => {
    setJoinEmail(e.target.value);
    console.log(joinEmail);
  };
  const name = (e) => {
    steJoinName(e.target.value);
    console.log(joinName);
  };
  const phon = (e) => {
    setJoinPhon(e.target.value);
    console.log(joinPhon);
  };

  return (
    <div>
      <Helmet>
        <title>회원가입</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>

      <div className="container max-w-6xl px-5 py-12">
        <h2 className=" font-JUA pb-12 text-4xl">회원가입</h2>
        <JoinProfile email={email} name={name} phon={phon} />
        <JoinOptional />
        <JoinPw />
        <center>
          <button className="w-48 h-16 ml-1 bg-[#C0AFA6] text-white text-2xl font-black rounded-xl">
            회원가입
          </button>
        </center>
      </div>
    </div>
  );
};

export default Join;
