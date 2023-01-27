import styles from "./Menu.module.css";
const ModalMenuSide = ({ sideData }) => {
  const { sideOptSeq, sideOptName, sideOptPrice, sideOptFile } = sideData;
  return (
    <li className="relative w-1/3 h-[185px]">
      <label htmlFor={sideOptSeq} className="w-full h-full">
        <input
          type="radio"
          name="sideoption"
          id={sideOptSeq}
          className={"hidden " + styles.sideradio}
        />
        <div className="px-2 h-[100px]">
          <img src="" alt={sideOptName} className="w-full h-full" />
        </div>
        <div className="px-2 mt-4">
          <p className="text-center text-l">{sideOptName}</p>
          <p className="text-center text-l">+{sideOptPrice}원</p>
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

export default ModalMenuSide;
