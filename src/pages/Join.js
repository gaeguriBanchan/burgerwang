import { Link } from "react-router-dom";
const Join = () => {
  return (
    <div className="bg-f7f7f7">
      <div className="container max-w-6xl px-5">
        <h2>회원가입</h2>
        <ul>
          <li>
            <span>
              <span>■</span>
              <span>기본정보</span>
            </span>
            <p>회원정보를 입력해주세요</p>
            <div className="flex flex-col">
              <label>
                이메일 아이디
                <input type="email" placeholder="아이디 (이메일)" required />
              </label>
              <label>
                이름
                <input type="name" placeholder="이름" required />
              </label>
              <label>
                휴대폰 번호
                <input type="number" placeholder="010-0000-0000" required />
              </label>
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
