const UserGender = ({userGender}) => {
  


  return (
    <div className="flex text-2xl items-center w-full">
      <label htmlFor="g-n">
        <input
          id="g-n"
          type="radio"
          name="gender"
          value="0"
          onClick={(e) => userGender(e)}
        />
        <span className="py-4 ml-5 mr-12">선택안함</span>
      </label>
      <label htmlFor="g-m">
        <input
          id="g-m"
          type="radio"
          name="gender"
          value="1"
          onClick={(e) => userGender(e)}
        />
        <span className="py-4 ml-5 mr-12">남</span>
      </label>
      <label htmlFor="g-w">
        <input
          id="g-w"
          type="radio"
          name="gender"
          value="2"
          onClick={(e) => userGender(e)}
        />
        <span className="py-4 ml-5 mr-12">여</span>
      </label>
    </div>
  );
};

export default UserGender;
