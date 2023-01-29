/** @format */

import { useEffect } from "react";

const UserEmailId = ({ emailId, userEmail, joinEmail }) => {
  useEffect(() => {
    console.log("이메일", joinEmail);
  }, [joinEmail]);

  return (
    <div className="text-2xl w-full ">
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none py-4"
        type="email"
        placeholder={emailId}
        required
        value={joinEmail}
        onChange={(e) => userEmail(e)}
      />
      {joinEmail === "" ? (
        <p className="text-base text-bgwred pt-2">
          사용 가능한 이메일 주소를 입력해 주세요. (예: name.mail.com)
        </p>
      ) : (
        <p className="text-base text-bgwred pt-2">&nbsp;</p>
      )}
    </div>
  );
};

export default UserEmailId;
