/** @format */

import style from '../join/Join.module.css';

const BlindEyesButton = ({ pwType, handlePwType }) => {
  return (
    <>
      {pwType.visible ? (
        <button className={style.blindbt} onClick={handlePwType}></button>
      ) : (
        <button className={style.showbt} onClick={handlePwType}></button>
      )}
    </>
  );
};

export default BlindEyesButton;
