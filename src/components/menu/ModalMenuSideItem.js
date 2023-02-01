import styles from "./Menu.module.css";
import convertPrice from "../../utils/convertPrice";
const ModalMenuSideItem = ({ sideData, selectItem, setSelectItem }) => {
  const { sideOptSeq, sideOptName, sideOptPrice, sideOptUri } = sideData;
  return (
    <li className="relative w-1/3 h-[185px] mb-8 last:mb-0">
      <label htmlFor={sideOptSeq} className="w-full h-full">
        <input
          type="radio"
          name="sideoption"
          id={sideOptSeq}
          className={"hidden " + styles.radioradio}
          checked={sideOptSeq === selectItem}
          onChange={() => setSelectItem(sideOptSeq)}
        />
        <span className={styles.radiocheck}></span>
        <div className="sidecon">
          <div className="px-2 h-[100px]">
            {sideOptUri && (
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}/sideOpt/${sideOptUri}`}
                alt={sideOptName}
                className="w-full h-full"
              />
            )}
          </div>
          <div className="px-2 mt-4">
            <p className="text-center text-l">{sideOptName}</p>
            <p className="text-center text-l">+{convertPrice(sideOptPrice)}원</p>
          </div>
        </div>
      </label>
    </li>
  );
};

export default ModalMenuSideItem;
