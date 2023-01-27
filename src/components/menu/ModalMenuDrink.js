import styles from "./Menu.module.css";
const ModalMenuDrink = ({ drinkData }) => {
  const { drinkOptSeq, drinkOptName, drinkOptPrice, drinkOptFile } = drinkData;
  return (
    <li className="relative w-1/3 h-[185px]">
      <label htmlFor={drinkOptSeq} className="w-full h-full">
        <input
          type="radio"
          name="drinkoption"
          id={drinkOptSeq}
          className={"hidden " + styles.sideradio}
        />
        <div className="px-2 h-[100px]">
          <img src="" alt={drinkOptName} className="w-full h-full" />
        </div>
        <div className="px-2 mt-4">
          <p className="text-center text-l">{drinkOptName}</p>
          <p className="text-center text-l">+{drinkOptPrice}원</p>
        </div>
        <div
          className={
            "absolute left top-0 w-full h-full bg-icon-check-red bg-top bg-no-repeat " +
            styles.sidecheck
          }
        ></div>
      </label>
    </li>
  );
};

export default ModalMenuDrink;
