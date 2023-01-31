/** @format */

const UserEmailId = ({
  emailId,
  userEmail,
  joinEmail,
  loginEmail,
  userLoginEmail,
  JoinProfile,
}) => {
  if (JoinProfile) {
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
        {joinEmail === '' ? (
          <p className="text-base text-bgwred pt-2">
            사용 가능한 이메일 주소를 입력해 주세요. (예: name.mail.com)
          </p>
        ) : (
          <p className="text-base text-bgwred pt-2">&nbsp;</p>
        )}
      </div>
    );
  } else {
    return (
      <div className="text-2xl w-full ">
        <input
          className="w-full bg-underline bg-repeat-x bg-bottom outline-none py-4"
          type="email"
          placeholder={emailId}
          required
          value={loginEmail}
          onChange={(e) => userLoginEmail(e)}
        />
        {loginEmail === '' ? (
          <p className="text-base text-bgwred pt-2">
            이메일 주소를 입력해 주세요.
          </p>
        ) : (
          <p className="text-base text-bgwred pt-2">&nbsp;</p>
        )}
      </div>
    );
  }
};

export default UserEmailId;
