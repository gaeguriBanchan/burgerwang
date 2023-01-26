/** @format */

import React from 'react';

const UserBirthDate = ({ register }) => {
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
    for (let i = 1960; i < 2023; i += 1) {
      year.push(i);
    }
    return year.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };

  // {disabled}

  return (
    <div className="flex flex-col  w-full ">
      <label className="py-4">
        <input id="birth-none" type="radio" />
        <span name="birth" className="py-4 ml-5 mr-12">
          선택안함
        </span>
      </label>
      <label className="flex py-4">
        <select
          {...register('year')}
          className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 pb-5 "
          name="year"
        >
          <option value="none" select="true">
            선택
          </option>
          {year()}
        </select>

        <select
          {...register('month')}
          className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 mx-10 pb-5  "
          name="month"
        >
          <option value="none" select="true">
            선택
          </option>
          {month()}
        </select>

        <select
          {...register('day')}
          className="bg-underline bg-repeat-x bg-bottom outline-none w-1/3 pb-5 "
          name="day"
        >
          <option value="none" select="true">
            선택
          </option>
          {days()}
        </select>
      </label>
    </div>
  );
};

export default UserBirthDate;
