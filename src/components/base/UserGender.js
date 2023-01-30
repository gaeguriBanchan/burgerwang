/** @format */
import style from '../join/Join.module.css';

const UserGender = () => {
  const userGender = (e) => {
    console.log(e.target.value);
  };

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
        선택안함
      </label>
      <label htmlFor="g-m">
        <input
          id="g-m"
          type="radio"
          name="gender"
          value="1"
          onClick={(e) => userGender(e)}
        />
        남
      </label>
      <label htmlFor="g-w">
        <input
          id="g-w"
          type="radio"
          name="gender"
          value="2"
          onClick={(e) => userGender(e)}
        />
        여
      </label>
    </div>
  );
};

export default UserGender;
