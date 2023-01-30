import { useEffect } from "react";
import { useState } from "react";
import { getMenuIngredient } from "../../api/menuApi";
import ModalCartIngredientItem from "./ModalCartIngredientItem";
import styles from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { changeOption } from "../../reducer/cartReducer";
const ModalCartIngredient = ({ menuSeq, optiontype, optioninfo, date, closeModal }) => {
  const dispatch = useDispatch();
  const [ingredientList, setIngeidientList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const getIngredient = async () => {
    const res = await getMenuIngredient(menuSeq);
    setIngeidientList(res.list);
    getCurrentSelectedList();
  };
  const getCurrentSelectedList = () => {
    const currentSelectedList = optioninfo.map((item) => item.ingredirentSeq);
    setCheckList(currentSelectedList);
  };
  const getSelectedList = () => {
    const selectedList = ingredientList.filter(
      (item) => checkList.includes(item.ingredirentSeq) && item
    );
    return selectedList;
  };
  const addIngredient = () => {
    const res = getSelectedList();
    dispatch(changeOption({ optiontype, date, res }));
    closeModal();
  };
  const changeChecked = (checkId) => {
    let updateList = [];
    if (checkList.includes(checkId)) {
      updateList = checkList.filter((id) => id !== checkId);
    } else {
      updateList = [...checkList].concat(checkId);
    }
    setCheckList(updateList);
  };
  const isChecked = (id) => {
    const checkBool = checkList.includes(id);
    return checkBool;
  };
  const resetCheckList = () => {
    setCheckList([]);
  };
  useEffect(() => {
    getIngredient();
  }, []);
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
            <ModalCartIngredientItem
              key={item.ingredirentSeq}
              ingredientData={item}
              changeChecked={changeChecked}
              isChecked={isChecked}
            />
          ))}
        </ul>
      </div>
      <div className="flex w-full">
        <button onClick={() => addIngredient()} className="w-full px-4 py-5 bg-bgwred">
          <span className="text-white font-black text-3xl">재료 추가</span>
        </button>
      </div>
    </>
  );
};

export default ModalCartIngredient;
