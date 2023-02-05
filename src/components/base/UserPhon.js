/** @format */
import { useEffect } from "react";
import React from "react";

const UserPhon = ({ userPhon, joinPhon }) => {
  useEffect(() => {}, [joinPhon]);

  // const hypenTel = (target) => {
  //   target.value = joinPhon
  //     .replace(/[^0-9]/g, "")
  //     .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  // };

  return (
    <div className="text-2xl w-full">
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none py-4"
        type="tel"
        placeholder="000-0000-0000"
        maxLength="13"
        required
        value={joinPhon}
        onChange={(e) => userPhon(e)}
      />
      {joinPhon === "" ? (
        <p className="text-base text-bgwred pt-2">
          휴대폰 번호를 입력해 주세요
        </p>
      ) : (
        <p className="text-base text-bgwred pt-2">&nbsp;</p>
      )}
    </div>
  );
};

export default UserPhon;
