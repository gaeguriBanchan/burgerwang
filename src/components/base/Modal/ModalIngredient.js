import styles from "./SelectModal.module.css";
import ModalIngredientItem from "./ModalIngredientItem";

const ModalIngredient = ({ resetCheckList, ingredientList, changeChecked, isChecked }) => {
  return (
    <>
      <div className="max-h-[530px] overflow-auto">
        <button onClick={() => resetCheckList()} className="w-full px-4 py-5 bg-white">
          <span className={"relative text-black font-black text-2xl " + styles.reset}>
            기본 재료로 변경
          </span>
        </button>
        <ul className="bg-background px-8 py-4">
          {ingredientList.map((item) => (
            <ModalIngredientItem
              key={item.ingredirentSeq}
              ingredientData={item}
              changeChecked={changeChecked}
              isChecked={isChecked}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ModalIngredient;
