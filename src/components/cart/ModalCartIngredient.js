import { useEffect, useRef } from "react";
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
  const freeCount = useRef(0);
  const getIngredient = async () => {
    await getMenuIngredient(menuSeq).then((data) => {
      setIngeidientList(data.list);
      getCurrentSelectedList();
    });
  };
  const getCurrentSelectedList = () => {
    const currentSelectedList = optioninfo.map((item) => item.ingredirentSeq);
    setCheckList(currentSelectedList);
  };
  const getCurrentFreeList = () => {
    const currentFreeList = checkList.filter((id) => freeIngredientList().includes(id));
    freeCount.current = currentFreeList.length;
  };
  const getSelectedList = () => {
    const selectedList = ingredientList.filter(
      (item) => checkList.includes(item.ingredirentSeq) && item
    );
    return selectedList;
  };
  const isIngredientFreeOver = () => {
    return freeCount.current > 1;
  };
  const freeIngredientList = () => {
    const freeIngredientList = ingredientList.filter((item) => item.ingredientPrice === 0);
    const freeIngredientIdList = freeIngredientList.map((item) => item.ingredirentSeq);
    return freeIngredientIdList;
  };
  const addIngredient = () => {
    const res = getSelectedList();
    dispatch(changeOption({ optiontype, date, res, isIFreeOver: isIngredientFreeOver() }));
    closeModal();
  };
  const changeChecked = (checkId) => {
    let updateList = [];
    if (checkId === 64) {
      freeCount.current = 0;
      if (checkList.includes(checkId)) {
        updateList = checkList.filter((id) => id !== checkId);
      } else {
        updateList = checkList.filter((item) => !freeIngredientList().includes(item));
        updateList = [...updateList].concat(checkId);
      }
      setCheckList(updateList);
    } else if (freeIngredientList().includes(checkId)) {
      let prevCount = freeCount.current;
      if (checkList.includes(checkId)) {
        freeCount.current--;
        updateList = checkList.filter((id) => id !== checkId);
      } else {
        freeCount.current++;
        if (checkList.includes(64)) {
          updateList = checkList.filter((id) => id !== 64);
          updateList = [...updateList].concat(checkId);
        } else {
          updateList = [...checkList].concat(checkId);
        }
      }
      if (freeCount.current === 2) {
        freeCount.current > prevCount && alert("0원 재료 중 2개 이상 선택 시 400원이 추가됩니다");
      }
      setCheckList(updateList);
    } else {
      if (checkList.includes(checkId)) {
        updateList = checkList.filter((id) => id !== checkId);
      } else {
        updateList = [...checkList].concat(checkId);
      }
      setCheckList(updateList);
    }
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
  useEffect(() => {
    getCurrentFreeList();
  }, [checkList]);
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
