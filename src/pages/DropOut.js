/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const DropOut = () => {
  return (
    <div className="container max-w-6xl px-5">
      <h2>회원탈퇴</h2>
      <ul>
        <li>
          <span>
            <span>■</span>
            <span>탈퇴사유</span>
          </span>
          <div>
            <select name="drop-out">
              <option value="" selected>
                탈퇴 사유를 선택해주세요
              </option>
              <option value="개인정보보호">개인정보보호</option>
              <option value="아이디변경">아이디변경</option>
              <option value="사이트이용불만">사이트이용불만</option>
              <option value="직접입력">직접입력</option>
            </select>
          </div>
        </li>
        <li>
          <span>
            <span>■</span>
            <span>계정확인</span>
          </span>
          <div>
            <div>
              <span>이메일</span>
              <span>이메일@email.com</span>
            </div>
          </div>
        </li>
      </ul>
      <p>
        <label>
          <input type="checkbox" />
          <span>위 내용을 확인하였으며, 버거킹 탈퇴를 합니다.</span>
        </label>
      </p>
      <div>
        <Link to="/mypage">취소</Link>
        <button>회원탈퇴</button>
      </div>
    </div>
  );
};

export default DropOut;
