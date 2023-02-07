/** @format */
import { Helmet } from 'react-helmet-async';
import JoinProfile from '../components/join/JoinProfile';
import JoinOptional from '../components/join/JoinOptional';
import JoinPw from '../components/join/JoinPw';
import PageName from '../components/base/PageName';
import useInput from '../components/join/hook/useInput';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Join = () => {
  const [joinEmail, userEmail] = useInput('');
  const [joinName, userName] = useInput('');
  const [joinPhon, userPhon] = useInput('');
  const [joinPw, userPw] = useInput('');
  const [joinPwCheck, userPwCheck] = useInput('');

  const [joinGen, setJoinGen] = useState('');
  let [birthYear, setBirthYear] = useState('');
  let [birthMonth, birthMonthValue] = useInput('');
  let [birthDay, birthDayValue] = useInput('');
  const [ch, setCh] = useState(false);
  console.log('year', birthYear);
  console.log(birthMonth);
  console.log(birthDay);

  let birth = birthYear + '-' + birthMonth + '-' + birthDay;
  if (birthYear === '') {
    birth = null;
    console.log('aaa');
  }
  if (birthMonth === '') {
    birth = null;
    console.log('vvv');
  }
  if (birthDay === '') {
    birth = null;
    console.log('ccc');
  }
  console.log('birth', birth);

  const userGen = (e) => {
    setJoinGen(e.target.value);
  };
  const birthYearValue = (e) => {
    setBirthYear(e.target.value);
    if (!birthYearValue) {
      setCh(true);
    } else {
      setCh(false);
    }
  };

  const chcheck = () => {
    setCh(!ch);
    console.log(ch);
  };
  useEffect(() => {
    console.log('chcheck', ch);
  }, [ch]);

  const navigate = useNavigate();

  // 회원가입
  const registFunc = (e) => {
    e.preventDefault();
    if (!joinEmail) {
      window.scrollTo(0, 0);
      return alert('이메일을 입력하세요.');
    }
    if (joinEmail) {
      let input = joinEmail;
      let email_format =
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      if (!email_format.test(input)) alert('잘못된 이메일 형식입니다');
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
      joinPwCheck,
      '성별',
      joinGen,
      '생년월일',
      birth
    );
    // 최금옥
    const params = {
      miEmail: joinEmail,
      miName: joinName,
      miPhone: joinPhon,
      miGen: joinGen,
      miBirth: birth,
      miGrade: '1',
      miStatus: '1',
      miPwd: joinPw,
    };
    axios
      .put('http://192.168.0.122:9898/api/member/join', params)
      .then((res) => {
        alert(res.data.message);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
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
          <JoinOptional
            userGen={userGen}
            birthYear={birthYear}
            birthYearValue={birthYearValue}
            birthMonth={birthMonth}
            birthMonthValue={birthMonthValue}
            birthDay={birthDay}
            birthDayValue={birthDayValue}
            chcheck={chcheck}
            ch={ch}
          />
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
