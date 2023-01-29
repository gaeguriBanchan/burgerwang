import style from "../join/Join.module.css";
import React, { useEffect, useState } from "react";

const UserBirthDate = () => {
  // const [test, setTest] = useState({ value: "", defaultChecked: false });
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [ch, setCh] = useState(false);
  const days = () => {
    let days = [];
    for (let i = 1; i < 32; i += 1) {
      days.push(i);
    }
    return days.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };
  const month = () => {
    let month = [];
    for (let i = 1; i < 13; i += 1) {
      month.push(i);
    }

    return month.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };
  const year = () => {
    let year = [];
    for (let i = 1990; i < 2023; i += 1) {
      year.push(i);
    }
    return year.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };

  const birthYearValue = (e) => {
    setBirthYear(e.target.value);
    if (!birthYearValue) {
      setCh(true);
    } else {
      setCh(false);
    }
  };

  const birthMonthValue = (e) => {
    setBirthMonth(e.target.value);
  };

  const birthDayValue = (e) => {
    setBirthDay(e.target.value);
  };

  const birth = birthYear + "-" + birthMonth + "-" + birthDay;
  console.log(birth);

  const chcheck = () => {
    setCh(!ch);
    console.log(ch);
  };
  useEffect(() => {
    console.log("chcheck", ch);
  }, [ch]);

  return (
    <div className="flex flex-col  w-full ">
      <label className="py-4">
        <input
          className={style.radiooff}
          id="birth-none"
          type="radio"
          value=""
          name="none"
          checked={ch}
          onChange={() => chcheck()}
        />
        <span name="birth" className="py-4 ml-5 mr-12">
          선택안함
        </span>
      </label>
      <label className="flex py-4">
        <select
          className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 pb-5 "
          name="year"
          onChange={(e) => {
            birthYearValue(e);
          }}
        >
          <option value="">선택</option>
          {year()}
        </select>
        <select
          className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 mx-10 pb-5  "
          name="month"
          onChange={(e) => {
            birthMonthValue(e);
          }}
        >
          <option value="">선택</option>
          {month()}
        </select>
        <select
          className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 pb-5 "
          name="day"
          onChange={(e) => {
            birthDayValue(e);
          }}
        >
          <option value="">선택</option>
          {days()}
        </select>
      </label>
    </div>
  );
};

export default UserBirthDate;
