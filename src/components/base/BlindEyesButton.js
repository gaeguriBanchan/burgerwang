/** @format */

import style from '../join/Join.module.css';

const BlindEyesButton = ({ pwType, setPwType }) => {
  const handlePwType = (e) => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

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
