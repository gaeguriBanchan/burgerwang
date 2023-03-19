import style from "../join/Join.module.css";

const UserGender = ({ userGen }) => {
  return (
    <div className="flex w-full py-4">
      <label htmlFor="g-n" className="w-1/3 top-0">
        <input
          className={style.inputradio}
          id="g-n"
          type="radio"
          name="gender"
          value="0"
          onClick={(e) => userGen(e)}
        />
        <span className={style.labelradio}>선택안함</span>
      </label>

      <label htmlFor="g-m" className="w-1/3">
        <input
          className={style.inputradio}
          id="g-m"
          type="radio"
          name="gender"
          value="1"
          onClick={(e) => userGen(e)}
        />
        <span className={style.labelradio}>남</span>
      </label>
      <label htmlFor="g-w" className="w-1/3">
        <input
          className={style.inputradio}
          id="g-w"
          type="radio"
          name="gender"
          value="2"
          onClick={(e) => userGen(e)}
        />
        <span className={style.labelradio}>여</span>
      </label>
    </div>
  );
};

export default UserGender;
