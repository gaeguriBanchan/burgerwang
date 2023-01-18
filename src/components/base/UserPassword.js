import React, { useState } from "react";
import BlindEyesButton from "./BlindEyesButton";

const UserPassword = ({ pw }) => {
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });
  const handlePwType = (e) => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };
  //

  return (
    <div className="pb-10 w-full">
      <form className="flex justify-between bg-underline bg-repeat-x bg-bottom outline-none py-4">
        <input
          className="outline-none"
          type={pwType.type}
          placeholder={pw}
          required
        />
        <BlindEyesButton
          pwType={pwType}
          setPwType={setPwType}
          handlePwType={handlePwType}
        />
      </form>
    </div>
  );
};

export default UserPassword;
