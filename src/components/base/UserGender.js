/** @format */

import React, { useState } from "react";

const UserGender = ({ register }) => {
  const [gender, setGender] = useState(false);

  const userGender = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex text-2xl w-full">
      <div className="flex w-full ">
        <input
          id="g-n"
          type="radio"
          name="gender"
          value="0"
          onClick={(e) => userGender(e)}
        />
        <label htmlFor="g-n" className="w-1/4 py-4  ml-5 mr-12">
          선택안함
        </label>
        <input
          id="g-m"
          type="radio"
          name="gender"
          value="1"
          onClick={(e) => userGender(e)}
        />
        <label htmlFor="g-m" className="w-1/4 py-4  ml-5 mr-12">
          남
        </label>
        <input
          id="g-w"
          type="radio"
          name="gender"
          value="2"
          onClick={(e) => userGender(e)}
        />
        <label htmlFor="g-w" className="w-1/4 py-4  ml-5 mr-12">
          여
        </label>
      </div>
    </div>
  );
};

export default UserGender;
