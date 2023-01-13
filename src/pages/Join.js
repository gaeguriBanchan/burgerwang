/** @format */
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const Join = () => {
  return (
    <div>
      <Helmet>
        <title>회원가입</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">회원가입</h2>
        <ul>
          <li>
            <h3 className="mb-4 font-JUA text-2xl">기본정보</h3>
            <div className="bg-white drop-shadow">
              <p className="w-full bg-ededed px-12 py-6 text-xl">
                회원정보를 입력해주세요
              </p>
              <div className="flex flex-col px-12 py-6 text-2xl">
                <div className="flex pb-10">
                  <label className="w-1/3 py-4">이메일 아이디</label>
                  <input
                    type="email"
                    placeholder="아이디 (이메일)"
                    required
                    className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
                  />
                </div>
                <div className="flex pb-10">
                  <label className="w-1/3 py-4">이름</label>
                  <input
                    type="name"
                    placeholder="이름"
                    required
                    className="h-16 w-full bg-underline bg-repeat-x bg-bottom outline-none"
                  />
                </div>
                <div className="flex pb-10">
                  <label className="w-1/3 py-4">휴대폰 번호</label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    required
                    className="h-16 w-full bg-underline bg-repeat-x bg-bottom outline-none"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <span>
              <span>■</span>
              <span>선택정보</span>
            </span>
            <div>
              <div className="flex">
                <span>성별</span>
                <div className="flex">
                  <input type="radio" /> 선택안함
                  <input type="radio" /> 남
                  <input type="radio" /> 여
                </div>
              </div>
              <form>
                <span>생년월일</span>
                <input type="radio" /> 선택안함
              </form>
              <form>
                <span>생년월일</span>
                <select name="year">
                  <option value="" selected>
                    선택
                  </option>
                  <option value="2023">2023</option>
                </select>
                <select name="month">
                  <option value="" selected>
                    선택
                  </option>
                  <option value="01">01</option>
                </select>
                <select name="day">
                  <option value="" selected>
                    선택
                  </option>
                  <option value="1">1</option>
                </select>
              </form>
            </div>
          </li>
          <li>
            <div>
              <span>
                <span>■</span>
                <span>선택정보</span>
              </span>
              <div>
                <form>
                  <input type="password" required placeholder="비밀번호" />
                  <button> 버튼 </button>
                </form>
                <form>
                  <input type="password" required placeholder="비밀번호 확인" />
                  <button> 버튼 </button>
                </form>
              </div>
            </div>
          </li>
        </ul>
        <Link to="/login">회원가입</Link>
      </div>
    </div>
  );
};

export default Join;
