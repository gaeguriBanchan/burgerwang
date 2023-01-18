import React from "react";

const UserEmailId = ({ usdrEmail, emailId }) => {
  return (
    <form className="flex pb-10">
      <label className="w-1/3 py-4 font-black">{emailId}</label>
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
        type="email"
        placeholder={emailId}
        required
        value={usdrEmail}
        onChange={usdrEmail}
      />
    </form>
  );
};

export default UserEmailId;
