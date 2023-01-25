/** @format */
import { Helmet } from 'react-helmet-async';
import JoinProfile from '../components/join/JoinProfile';
import JoinOptional from '../components/join/JoinOptional';
import JoinPw from '../components/join/JoinPw';
import { Link } from 'react-router-dom';
import PageName from '../components/base/PageName';

const Join = () => {
  return (
    <div>
      <Helmet>
        <title>회원가입</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <PageName pagename={'회원가입'} />
        <JoinProfile />
        <JoinOptional />
        <JoinPw />
      </div>
      <center>
        <Link to="/login">
          <button className="w-48 h-16 ml-1 bg-[#C0AFA6] text-white text-2xl font-black rounded-xl">
            회원가입
          </button>
        </Link>
      </center>
    </div>
  );
};

export default Join;
