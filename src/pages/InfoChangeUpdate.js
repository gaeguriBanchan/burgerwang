/** @format */

import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser, clearUser } from "../reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
import PageName from "../components/base/PageName";
import UserInfoType from "../components/base/UserInfoType";
import ChangeButton from "../components/base/ChangeButton";
import JoinOptional from "../components/join/JoinOptional";
import useInput from "../components/join/hook/useInput";
import PwChange from "./PwChange";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import ActiveButton from "../components/base/ActiveButton";

const InfoChangeUpdate = () => {
  const [loginPw, userloginPw] = useInput("");
  const [newPw, userNewPw] = useInput("");
  const [newPwCheck, userNewPwCheck] = useInput("");
  const [joinPhon, userPhon] = useInput("");

  const [ph, SetPh] = useState("");

  const [joinGen, setJoinGen] = useState("");
  const [birthYear, birthYearValue] = useInput("");
  const [birthMonth, birthMonthValue] = useInput("");
  const [birthDay, birthDayValue] = useInput("");

  const [edit, setEdit] = useState(true);

  const userGen = (e) => {
    setJoinGen(e.target.value);
  };

  const birth = birthYear + "-" + birthMonth + "-" + birthDay;
  console.log("birth", birth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.user);

  const seq = loginData.seq;

  axios
    .get(`http://192.168.0.122:9898/api/member/mypage/${seq}`, seq)
    .then((res) => {
      console.log(res);
      SetPh(res.data.list.memberPhone);
    })
    .catch((err) => {
      console.log(err);
      alert(err.response.data.message);
    });

  const registFunc = async (e) => {
    e.preventDefault();

    let params = {
      pwd: loginPw,
      changePwd: newPw,
      phone: joinPhon,
      gen: joinGen,
    };

    axios
      .post(`http://192.168.0.122:9898/api/member/update/${seq}`, params)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert(res.data.message);
        navigate("/mypage");
      })

      .catch((err) => {
        alert(err.response.data.message);
        // alert('다시 시도해 주세요');
      });

    // 최금옥
  };
  const email = loginData.email;
  const name = loginData.name;
  // console.log(loginData);

  const chBt = () => {
    setEdit(!edit);
  };

  const linkMypage = () => {
    navigate("/mypage");
  };

  const linkDropOut = () => {
    navigate("/dropOut");
  };

  console.log(
    "비번",
    loginPw,
    "새비번",
    newPw,
    "새확인",
    newPwCheck,
    "성",
    joinGen,
    "전화번호",
    joinPhon
  );
  return (
    <div>
      <Helmet>
        <title>회원정보 변경</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <div className="container w-9/12">
          <PageName pagename={"회원정보 변경"} />
          <h3 className="mb-4 pl-12 flex items-center bg-icon-out bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">기본정보</span>
          </h3>
          <div className="bg-white drop-shadow mb-6">
            <div className="px-16 py-6 text-2xl">
              <div className=" flex items-center pb-6">
                <UserInfoType name={"이메일"} />
                <p className="w-full  font-black mr-2">{email}</p>
              </div>
              <div className="flex  items-center text-2xl pb-6">
                <UserInfoType name={"이름"} />
                <p className="w-full font-black mr-2">{name}</p>
              </div>
              <div className="flex items-center text-2xl pb-6">
                <UserInfoType name={"핸드폰"} />
                <div className="flex justify-between items-center w-full font-black">
                  {edit ? (
                    <>
                      <p className=" mr-4">{ph}</p>
                      <div className="left-0">
                        <ChangeButton name={"변경"} event={chBt} />
                      </div>
                    </>
                  ) : (
                    <label>
                      <input
                        className="w-full outline-none py-4"
                        type="tel"
                        placeholder={ph}
                        required
                        value={joinPhon}
                        onChange={(e) => userPhon(e)}
                      ></input>
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>
          <JoinOptional
            joinGen={joinGen}
            userGen={userGen}
            birthYear={birthYear}
            birthYearValue={birthYearValue}
            birthMonth={birthMonth}
            birthMonthValue={birthMonthValue}
            birthDay={birthDay}
            birthDayValue={birthDayValue}
          />
          <PwChange
            loginPw={loginPw}
            userloginPw={userloginPw}
            newPw={newPw}
            userNewPw={userNewPw}
            newPwCheck={newPwCheck}
            userNewPwCheck={userNewPwCheck}
          />
          <div
            className="flex justify-end cursor-pointer"
            onClick={linkDropOut}
          >
            <h3 className="my-4 pl-8 flex items-center bg-icon-out2 bg-no-repeat bg-left left-0">
              <span className="font-JUA text-2xl">회원탈퇴</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pb-20">
        <div onClick={linkMypage}>
          <ActiveBlackButton>취소</ActiveBlackButton>
        </div>
        <div onClick={registFunc}>
          <ActiveButton>확인</ActiveButton>
        </div>
      </div>
    </div>
  );
};

export default InfoChangeUpdate;
