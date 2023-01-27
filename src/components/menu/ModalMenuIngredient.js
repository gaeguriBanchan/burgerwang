import styles from "./Menu.module.css";
const ModalMenuIngredient = ({ ingredientData }) => {
  const { ingredientSeq, ingredientName, ingredientPrice, ingredientFile } = ingredientData;
  return (
    <li className="w-full">
      <div className={"relative w-full flex items-center " + styles.ingredient}>
        <label htmlFor={ingredientSeq} className={"w-full relative flex justify-between xd"}>
          <input
            type="checkbox"
            name={ingredientSeq}
            id={ingredientSeq}
            className={"hidden " + styles.ingredientcheck}
            checked={true}
            readOnly
          />
          <div className="absolute left-12 top-[50%] w-24 h-12 translate-y-[-50%] bg-black">
            <img className="w-full h-full" src="" alt="" />
          </div>
          <div className="pl-40 min-h-[100px] grow flex justify-between items-center ml-4">
            <span className="mr-8 text-2xl">{ingredientName}</span>
            <span className="text-2xl whitespace-nowrap">+{ingredientPrice}원</span>
          </div>
        </label>
      </div>
    </li>
  );
};

export default ModalMenuIngredient;
