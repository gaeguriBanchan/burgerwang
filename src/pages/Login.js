/** @format */
import { Helmet } from 'react-helmet-async';
import ActiveButton from '../components/base/ActiveButton';
import ActiveBlackButton from '../components/base/ActiveBlackButton';
import { Link, useNavigate } from 'react-router-dom';
import UserEmailId from '../components/base/UserEmailId';
import UserPassword from '../components/base/UserPassword';
import useInput from '../components/join/hook/useInput';
import axios from 'axios';
import { loginUser } from '../reducer/userSlice';
import { useDispatch, useSelector } from 'react-redux';
//
const Login = () => {
  // 최금옥

  const [joinEmail, userEmail] = useInput('user002@email.com');
  const [loginPw, userloginPw] = useInput('123456');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const a = useSelector((state) => state.user);
  console.log(a);

  // 로그인 항목 입력
  const registFunc = async (e) => {
    e.preventDefault();

    if (!joinEmail) {
      return alert('이메일을 입력하세요.');
    }
    if (!loginPw) {
      return alert('비밀번호를 입력하세요.');
    }
    console.log('입력된 내용', joinEmail, loginPw);

    let params = {
      email: joinEmail,
      pwd: loginPw,
    };

    axios
      .post('http://192.168.0.122:9898/api/member/login', params)
      .then((res) => {
        alert('환영합니다');

        console.log(res);
        dispatch(loginUser(res.data.loginUser));
        // navigate('/menu');
        navigate('/');
      })
      .catch((err) => {
        // 서버가 반응이 없다.
        console.log(err);
        alert(err.data.message);
      });
  };
  // 회원가입 이동
  const linkJoin = () => {
    // 최금옥
    console.log('해해해');
    navigate('/join');
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
                joinEmail={joinEmail}
                userEmail={userEmail}
              />
              <UserPassword
                name={'비밀번호'}
                joinPw={loginPw}
                userloginPw={userloginPw}
              />
            </div>
            <div className="flex pb-6">
              <div onClick={registFunc}>
                <ActiveButton children={'로그인'} />
              </div>
              <div onClick={linkJoin}>
                <ActiveBlackButton name={'회원가입'} />
              </div>
            </div>
            <div className="font-JUA">
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
