import React from "react";

const UserPhon = ({ userPhon }) => {
  return (
    <form className="flex pb-10">
      <label className="w-1/3 py-4 font-black">휴대폰 번호</label>
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
        type="tel"
        placeholder="휴대폰 번호"
        required
        value={userPhon}
        onChange={userPhon}
      />
    </form>
  );
};

export default UserPhon;
