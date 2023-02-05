import style from "./DropOut.module.css";

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import ActiveButton from "../components/base/ActiveButton";
import UserInfoType from "../components/base/UserInfoType";
import { loginUser, clearUser } from "../reducer/userSlice";
import useInput from "../components/join/hook/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
const DropOut = () => {
  const list = ["개인정보보호", "아이디변경", "사이트이용불만", "직접입력"];
  const [out, userOut] = useInput("");

  const [totalLength, setTotalLength] = useState("");
  const [checkBt, setCheckBt] = useState(false);

  const navigate = useNavigate();
  const disptach = useDispatch();
  console.log(out);

  const loginData = useSelector((state) => state.user);
  const email = loginData.email;

  const tL = (e) => {
    setTotalLength(e.target.value);
  };

  const chcheck = (e) => {
    setCheckBt(!checkBt);
  };
  useEffect(() => {
    console.log(totalLength, checkBt);
  }, [totalLength, checkBt]);

  const outBt = () => {
    if (!checkBt) {
      return alert("탈퇴 동의를 체크해주세요");
    }
    const seq = loginData.seq;
    // console.log(loginData);
    // console.log(loginData.seq);
    let params = {
      seq: loginData.seq,
    };
    axios
      .delete(`http://192.168.0.122:9898/api/member/delete/${seq}`, params)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        disptach(clearUser());
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>회원 탈퇴</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5">
        <div className="container w-9/12 pt-12">
          <h3 className="mb-4 pl-12 flex items-center bg-icon-out bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">탈퇴 사유</span>
          </h3>
          <div className="bg-white drop-shadow px-16 py-10 text-2xl mb-10">
            <select
              className="w-full bg-underline bg-repeat-x bg-bottom outline-none pb-5"
              onChange={userOut}
            >
              <option value="" select="true">
                탈퇴사유를 선택해주세요
              </option>
              {list.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>

            {out === "직접입력" ? (
              <label>
                <input
                  className="mt-5 overflow-y-scroll"
                  type="textarea"
                  wrap="off"
                  maxLength={1000}
                  physical="true"
                  placeholder="탈퇴하시려는 이유에 대해서 입력해 주세요. (최대 1,000자)"
                  value={totalLength}
                  onChange={(e) => tL(e)}
                />
                <p
                  className="flex justify-end test;
}"
                >
                  {totalLength.length}/1000
                </p>
              </label>
            ) : (
              <p></p>
            )}
          </div>

          <h3 className="mb-4 pl-12 flex items-center bg-icon-person bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">계정확인</span>
          </h3>
          <div className="bg-white drop-shadow mb-6">
            <div className="px-16 py-6 text-2xl">
              <div className=" flex items-center">
                <UserInfoType name={"이메일"} />
                <p className="w-full  font-black mr-2">{email}</p>
              </div>
            </div>
          </div>

          <label className="flex justify-end mb-6">
            <input
              className={style.inputcheckbox}
              htmlFor="out"
              type="checkbox"
              checked={checkBt}
              onChange={(e) => chcheck(e)}
            />
            <span className={style.labelcheckbox}>버거왕을 탈퇴를 합니다.</span>
          </label>
          <div className="flex justify-center">
            <ActiveButton children={"취소"} />
            <div onClick={outBt}>
              <ActiveBlackButton> 확인 </ActiveBlackButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropOut;
