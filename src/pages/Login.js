/** @format */
import { Helmet } from 'react-helmet-async';
import ActiveButton from '../components/base/ActiveButton';
import ActiveBlackButton from '../components/base/ActiveBlackButton';
import { Link } from 'react-router-dom';
import UserEmailId from '../components/base/UserEmailId';
import UserPassword from '../components/base/UserPassword';
import useInput from '../components/join/hook/useInput';

const Login = () => {
  const [loginEmail, userLoginEmail, loginPw, userloginPw] = useInput('');

  const registFunc = (e) => {
    e.preventDefault();
    if (!loginEmail) {
      return alert('이메일을 입력하세요.');
    }
    if (!loginPw) {
      return alert('비밀번호를 입력하세요.');
    }
    // if (joinPw !== joinPwCheck) {
    //   return alert('비밀번호가 일치하지 않습니다.');
    // }
  };

  return (
    <div>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <div className="container w-9/12">
          <h2 className="flex flex-col font-JUA pb-12 text-4xl ">
            <em className="not-italic text-bgwred">YOUR WAY</em>
            <span className="font-[BMJUA]">어서오세요! 버거왕입니다.</span>
          </h2>
          <h3 className="mb-4 pl-12 flex items-center h-10 bg-icon-key bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">일반 로그인</span>
          </h3>

          <div className=" px-16 py-6 text-2xl pl-14">
            <div className="pb-10">
              <UserEmailId
                emailId={'이메일 아이디'}
                loginEmail={loginEmail}
                userLoginEmail={userLoginEmail}
              />
              <UserPassword
                name={'비밀번호'}
                joinPw={loginPw}
                userloginPw={userloginPw}
              />
            </div>
            <div className="pb-6">
              <button onClick={(e) => registFunc(e)}>
                <ActiveButton children={'로그인'} />
              </button>
              <Link to="/join">
                <ActiveBlackButton name={'회원가입'} />
              </Link>
            </div>
            <div className="flex font-JUA">
              <Link to="/findinfoId" className="mr-4">
                아이디 찾기
              </Link>
              <Link to="/findinfoPw" className="ml-4">
                비밀번호 찾기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
