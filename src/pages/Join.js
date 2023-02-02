/** @format */
import { Helmet } from 'react-helmet-async';
import JoinProfile from '../components/join/JoinProfile';
import JoinOptional from '../components/join/JoinOptional';
import JoinPw from '../components/join/JoinPw';
import PageName from '../components/base/PageName';
import useInput from '../components/join/hook/useInput';
import axios from 'axios';

const Join = () => {
  const [joinEmail, userEmail] = useInput('aaa@aaa.net');
  const [joinName, userName] = useInput('홍길동');
  const [joinPhon, userPhon] = useInput('010-0000-0000');
  const [joinPw, userPw] = useInput('1111');
  const [joinPwCheck, userPwCheck] = useInput('1111');

  // 회원가입
  const registFunc = (e) => {
    e.preventDefault();
    if (!joinEmail) {
      window.scrollTo(0, 0);
      return alert('이메일을 입력하세요.');
    }
    if (!joinName) {
      window.scrollTo(0, 0);
      return alert('이름을 입력하세요.');
    }
    if (!joinPhon) {
      window.scrollTo(0, 0);
      return alert('휴대폰 번호를 입력하세요.');
    }
    if (!joinPw) {
      return alert('비밀번호를 입력하세요.');
    }
    if (!joinPwCheck) {
      return alert('비밀번호를 확인해주세요.');
    }
    if (joinPw !== joinPwCheck) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    console.log(
      '이메일',
      joinEmail,
      '이름',
      joinName,
      '폰',
      joinPhon,
      '비번',
      joinPw,
      '비번확인',
      joinPwCheck
    );
    // 최금옥
    const params = {
      miEmail: joinEmail,
      miName: joinName,
      miPhone: joinPhon,
      miGen: '',
      miBirth: '',
      miGrade: '',
      miStatus: '',
      miPwd: joinPw,
    };
    axios
      .put('http://192.168.0.122:9898/api/member/join', params)
      .then((res) => {
        // 서버에서 response(결과가 왔어요.)
        alert(res.massage);
        console.log(res.massage);
        console.log(res.status);
      })
      .catch((err) => {
        // 서버가 반응이 없다.
        console.log(err);
      });
  };

  return (
    <div>
      <Helmet>
        <title>회원가입</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <form>
        <div className="container max-w-6xl px-5 py-12">
          <PageName pagename={'회원가입'} />
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
            JoinPw={JoinPw}
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
