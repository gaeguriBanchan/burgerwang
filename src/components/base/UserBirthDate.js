import React from "react";

const UserBirthDate = () => {
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
    for (let i = 1950; i < 2023; i += 1) {
      year.push(i);
    }
    return year.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };

  return (
    <div className="flex items-start">
      <span className="w-1/3 py-4 font-black">생년월일</span>
      <form className="flex flex-col  w-full ">
        <label className="py-4">
          <input id="birth-none" type="radio" defaultChecked />
          <span name="birth" className="py-4 ml-5 mr-12">
            선택안함
          </span>
        </label>
        <label className="flex py-4">
          <select
            className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 pb-5 "
            name="year"
          >
            <option value="" select="true">
              선택
            </option>
            {year()}
          </select>

          <select
            className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 mx-10 pb-5  "
            name="month"
          >
            <option value="" select="true">
              선택
            </option>
            {month()}
          </select>

          <select
            className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 pb-5 "
            name="day"
          >
            <option value="" select="true">
              선택
            </option>
            {days()}
          </select>
        </label>
      </form>
    </div>
  );
};

export default UserBirthDate;
