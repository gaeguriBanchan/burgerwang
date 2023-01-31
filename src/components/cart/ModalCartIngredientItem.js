import convertPrice from "../../utils/convertPrice";
import styles from "./Cart.module.css";
const ModalCartIngredientItem = ({ ingredientData, changeChecked, isChecked }) => {
  const { ingredirentSeq, ingredientName, ingredientPrice, ingredientFile } = ingredientData;
  return (
    <li className="w-full flex items-center">
      <label htmlFor={ingredirentSeq} className="w-full">
        <input
          type="checkbox"
          name={ingredirentSeq}
          id={ingredirentSeq}
          className={"hidden " + styles.ingredientcheck}
          checked={isChecked(ingredirentSeq)}
          onChange={() => changeChecked(ingredirentSeq)}
        />
        <div className={"relative w-full flex justify-end " + styles.ingredient}>
          <div className="absolute left-12 top-[50%] w-24 h-12 translate-y-[-50%]">
            <img
              className="w-full h-full"
              src={`${process.env.REACT_APP_IMAGE_URL}/ingredients/${ingredientFile}`}
              alt=""
            />
          </div>
          <div className="w-full min-h-[100px] ml-40 flex items-center">
            <span className="block grow ml-4 mr-8 text-2xl">{ingredientName}</span>
            <span className="text-2xl whitespace-nowrap">+{convertPrice(ingredientPrice)}원</span>
          </div>
        </div>
      </label>
    </li>
  );
};

export default ModalCartIngredientItem;
