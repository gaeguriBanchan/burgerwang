/** @format */

import React from "react";


const UserName = ({ joinName, userName }) => {

  return (
    <div className="text-2xl w-full">
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none py-4"
        type="text"
        name="name"
        placeholder="이름"
        value={joinName}
        onChange={(e) => userName(e)}
      />
      {joinName === "" ? (
        <p className="text-base text-bgwred pt-2">이름을 입력해 주세요</p>
      ) : (
        <p className="text-base text-bgwred pt-2">&nbsp;</p>
      )}
    </div>
  );
};

export default UserName;
