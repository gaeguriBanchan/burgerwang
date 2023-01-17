import React from "react";

const UserGender = () => {
  return (
    <div className="flex pb-10">
      <span className="w-1/3 py-4 font-black">성별</span>
      <form className="flex w-full ">
        <input id="g-n" type="radio" name="gender" defaultChecked />
        <label htmlFor="g-n" className="py-4 ml-5 mr-12">
          선택안함
        </label>

        <input id="g-m" type="radio" name="gender" />
        <label htmlFor="g-m" className="py-4 ml-5 mr-12">
          남
        </label>

        <input id="g-w" type="radio" name="gender" />
        <label htmlFor="g-w" className="py-4 ml-5 mr-12">
          여
        </label>
      </form>
    </div>
  );
};

export default UserGender;
