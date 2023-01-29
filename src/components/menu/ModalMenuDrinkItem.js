import styles from "./Menu.module.css";
import convertPrice from "../../utils/convertPrice";
const ModalMenuDrinkItem = ({ drinkData, selectItem, setSelectItem }) => {
  const { drinkOptSeq, drinkOptName, drinkOptPrice, drinkOptFile } = drinkData;
  return (
    <li className="relative w-1/3 h-[185px]">
      <label htmlFor={drinkOptSeq} className="w-full h-full">
        <input
          type="radio"
          name="drinkoption"
          id={drinkOptSeq}
          className={"hidden " + styles.radioradio}
          checked={drinkOptSeq === selectItem}
          onChange={() => setSelectItem(drinkOptSeq)}
        />
        <span className={styles.radiocheck}></span>
        <div className="px-2 h-[100px]">
          <img src="" alt={drinkOptName} className="w-full h-full" />
        </div>
        <div className="px-2 mt-4">
          <p className="text-center text-l">{drinkOptName}</p>
          <p className="text-center text-l">+{convertPrice(drinkOptPrice)}원</p>
        </div>
      </label>
    </li>
  );
};

export default ModalMenuDrinkItem;
