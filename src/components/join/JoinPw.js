/** @format */

import React, { useState } from 'react';

const JoinPw = () => {
  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false,
  });

  //password type 변경하는 함수
  const handlePwType = (e) => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  return (
    <div className="pb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-key1 bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">비밀번호 입력</span>
      </h3>
      <div className="bg-white drop-shadow">
        <div className="px-16 py-6 text-2xl">
          <div className="flex pb-10">
            <span className="w-1/3 py-4 font-black">비밀번호</span>
            <ul className="w-full">
              <li className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
                <input
                className='outline-none'
                  type={pwType.type}
                  placeholder="비밀번호"
                  required
                />
                <button onClick={handlePwType}>
                {  pwType.visible ? <span>숨기기</span> : <span>보이기</span>  }
                </button>
              </li>
              <li className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  required
                />
                <button>버튼</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPw;
