import React from "react";

const UserName = ({userNname}) => {
  return (
    <form className="flex pb-10">
      <label className="w-1/3 py-4 font-black">이름</label>
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
        type="text"
        placeholder="이름"
        required
        value={userNname}
        onChange={userNname}
      />
    </form>
  );
};

export default UserName;
