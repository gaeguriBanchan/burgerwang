import React from "react";

const JoinPw = () => {
  return (
    <div className="pb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-key_1 bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">비밀번호 입력</span>
      </h3>
      <div className="bg-white drop-shadow">
        <div className="px-16 py-6 text-2xl">
          <div className="flex pb-10">
            <span className="w-1/3 py-4 font-black">비밀번호</span>
            <ul className="w-full">
              <li className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
                <input
                  className=""
                  type="password"
                  placeholder="비밀번호"
                  required
                />
                <button>버튼</button>
              </li>
              <li className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
                <input
                  className=""
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