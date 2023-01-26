import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import PageName from "../components/base/PageName";
import FindId from "../components/find/FindId";
import FindPw from "../components/find/FindPw";

import FindSelect from "../components/find/FindSelect";

const FindInfo = () => {
  const [faindTab, setFaindTab] = useState("아이디 찾기");

  return (
    <div className="container max-w-6xl px-5 py-12">
      <Helmet>
        <title>아이디/비밀번호 찾기</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container w-10/12">
        <PageName pagename={"아이디/비밀번호 찾기"} />
        <ul className="flex">
          <FindSelect
            name={"아이디 찾기"}
            value="findid"
            // changePayTab={changeTab}
            // faindTab={faindTab}
          />
          <FindSelect
            name={"비밀번호 찾기"}
            value="findpw"
            // changePayTab={changeTab}
            // faindTab={faindTab}
          />
        </ul>

        {faindTab === "아이디 찾기" ? <FindId /> : <FindPw />}
      </div>
      <div className="flex justify-center pt-20">
        <ActiveBlackButton name={"tabName"} />
      </div>
    </div>
  );
};

export default FindInfo;
