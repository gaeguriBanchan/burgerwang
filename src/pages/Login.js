/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="container max-w-6xl px-5">
      <h2 className="flex flex-col ">
        <em className="not-italic text-burgerRed font-[BMJUA]">YOUR WAY</em>
        <span className="font-[BMJUA]">어서오세요! 버거왕입니다.</span>
      </h2>
      <div>
        <span>■</span>
        <span>일반로그인</span>
      </div>
      <ul>
        <li>
          <form>
            <input type="email" required placeholder="아이디 (이메일)" />
          </form>
        </li>
        <li>
          <form>
            <input type="password" required placeholder="비밀번호" />
            <button> 버튼 </button>
          </form>
        </li>
      </ul>
      <div>
        <Link to="/menu">로그인</Link>
        <Link to="/join">회원가입</Link>
      </div>
      <ul className="flex ">
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
      </ul>
    </div>
  );
};

export default Login;
