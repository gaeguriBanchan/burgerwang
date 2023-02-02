/** @format */

import { Helmet } from 'react-helmet-async';
import UserPassword from '../components/base/UserPassword';
import ActiveBlackButton from '../components/base/ActiveBlackButton';
import ActiveButton from '../components/base/ActiveButton';
import UserInfoType from '../components/base/UserInfoType';
import useInput from '../components/join/hook/useInput';
import { useEffect } from 'react';
import axios from 'axios';

const PwChange = () => {
  const [loginPw, userloginPw] = useInput('');
  const [newPw, userNewPw] = useInput('');
  const [newPwCheck, userNewPwCheck] = useInput('');

  const checkpw = () => {
    console.log(newPw, newPwCheck);
    if (newPw !== newPwCheck) {
      return (
        <p className="text-base text-bgwred pt-2">
          비밀번호가 일치하지 않습니다.
        </p>
      );
    }
    if (!newPwCheck) {
      return (
        <p className="text-base text-bgwred pt-2">
          새 비밀번호 확인을 입력해 주세요
        </p>
      );
    } else {
      return <p>&nbsp;</p>;
    }
  };

  const registFunc = async (e) => {
    e.preventDefault();
    console.log('비번', loginPw, '새비번', newPw, '새확인', newPwCheck);
    if (!loginPw) {
      return alert('비밀번호를 입력하세요.');
    }
    if (!newPw) {
      return alert('새 비밀번호를 입력하세요.');
    }
    if (!newPwCheck) {
      return alert('새 비밀번호 확인을 입력하세요.');
    }
    if (newPw !== newPwCheck) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    if (loginPw === newPw) {
      return alert('현재 비밀번호는 새 비밀번호로 설정 할 수 없습니다.');
    }
    console.log('입력된 내용', loginPw, newPw, newPwCheck);
    // 최금옥
    const params = {
      pwd: loginPw,
    };
    axios
      .post('http://192.168.0.122:9898/api/member/login', { params })
      .then((res) => {
        // 서버에서 response(결과가 왔어요.)
        console.log(res);
      })
      .catch((err) => {
        // 서버가 반응이 없다.
        console.log(err);
      });
    // await loginUser (loginPw, newPw, newPwCheck)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get('http://192.168.0.122:9898/api/member/mypage')
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container max-w-6xl px-5 py-12">
      <Helmet>
        <title>비밀번호 변경</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container w-10/12">
        <h2 className=" font-JUA pb-12 text-4xl">비밀번호 변경</h2>
        <h3 className="mb-4 pl-12 flex items-center bg-icon-key1 bg-no-repeat bg-left">
          <span className="font-JUA text-2xl">비밀번호 입력</span>
        </h3>
        <div className="bg-white drop-shadow  px-16 py-6 text-2xl pl-14">
          <div className="flex text-2xl">
            <UserInfoType name={'현재 비밀번호'} />
            <UserPassword
              name={'현재 비밀번호'}
              loginPw={loginPw}
              userloginPw={userloginPw}
            />
          </div>
          <div className="flex">
            <div className="w-1/3 py-4 font-black">
              <UserInfoType name={'새 비밀번호'} />
            </div>
            <div className="w-full">
              <UserPassword
                name={'새 비밀번호'}
                newPw={newPw}
                userNewPw={userNewPw}
              />
              <UserPassword
                name={'새 비밀번호 확인'}
                newPwCheck={newPwCheck}
                userNewPwCheck={userNewPwCheck}
                checkpw={checkpw}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <div>
          <ActiveBlackButton name={'취소'} />
        </div>
        <div onClick={registFunc}>
          <ActiveButton children={'확인'} />
        </div>
      </div>
    </div>
  );
};

export default PwChange;
