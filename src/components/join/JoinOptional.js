/** @format */

import React from 'react';

const JoinOptional = () => {
  // const day = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  // ];

  const days = () => {
    let day = [];
    for (let i = 1; i < 32; i += 1) {
      day.push(i);
    }
    return day;
  };

  const month = () => {
    let month = [];
    for (let i = 1; i < 13; i += 1) {
      month.push(<option value={i}>{i}</option>);
    }
    return month;
  };

  const year = () => {
    let year = [];
    for (let i = 1920; i < 2023; i += 1) {
      year.push(<option value={i}>{i}</option>);
    }
    return year;
  };
  console.log(year());

  return (
    <div className="mb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-check bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">선택정보</span>
      </h3>
      <div className="bg-white drop-shadow">
        <ul className="px-16 py-6 text-2xl">
          <li className="flex pb-10">
            <span className="w-1/3 py-4 font-black">성별</span>
            <label className="flex w-full ">
              <input id="g_n" type="radio" name="gender" defaultChecked />
              <span className="py-4 ml-5 mr-12">선택안함</span>

              <input id="g_m" type="radio" name="gender" />
              <span className="py-4 ml-5 mr-12">남</span>

              <input id="g_w" type="radio" name="gender" />
              <span className="py-4 ml-5 mr-12">여</span>
            </label>
          </li>
          <li className="flex items-start">
            <span className="w-1/3 py-4 font-black">생년월일</span>
            <div className="flex flex-col  w-full ">
              <label className="py-4">
                <input id="g_n" type="radio" name="gender" defaultChecked />
                <span className="py-4 ml-5 mr-12">선택안함</span>
              </label>
              <label className="flex py-4">
                <select
                  className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 pb-5 "
                  name="year"
                >
                  <option value="" selected>
                    선택
                  </option>
                  {year.map}
                  {year()}
                </select>

                <select
                  className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 mx-10 pb-5  "
                  name="month"
                >
                  <option value="" selected>
                    선택
                  </option>
                  {month()}
                </select>

                <select
                  className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 pb-5 "
                  name="day"
                >
                  <option value="" selected>
                    선택
                  </option>
                  {days()}
                  {/*    {day.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
 */}
                </select>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JoinOptional;
