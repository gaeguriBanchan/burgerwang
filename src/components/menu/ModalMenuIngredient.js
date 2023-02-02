import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { getMenuIngredient } from "../../api/menuApi";
import { MenuContext } from "./context/MenuContext";
import ModalIngredient from "../base/Modal/ModalIngredient";
const ModalMenuIngredient = ({ modalKind, setModalKind }) => {
  const [ingredientList, setIngeidientList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const { manageValue, manageCart } = useContext(MenuContext);
  const { selectedMenu } = manageValue;
  const { addCartInfo } = manageCart;
  const freeCount = useRef(0);
  const getIngredient = async () => {
    const res = await getMenuIngredient(selectedMenu);
    setIngeidientList(res.list);
  };
  const getSelectedList = () => {
    const selectedList = ingredientList.filter(
      (item) => checkList.includes(item.ingredirentSeq) && item
    );
    return selectedList;
  };
  useEffect(() => {
    modalKind === "ingredient" && getIngredient();
  }, [modalKind]);
  const isIngredientFreeOver = () => {
    return freeCount.current > 1;
  };
  const freeIngredientList = () => {
    const freeIngredientList = ingredientList.filter((item) => item.ingredientPrice === 0);
    const freeIngredientIdList = freeIngredientList.map((item) => item.ingredirentSeq);
    return freeIngredientIdList;
  };
  const addIngredient = () => {
    const isIFreeOver = isIngredientFreeOver();
    const data = getSelectedList();
    addCartInfo({ type: "ingredient", data, isIFreeOver });
    setModalKind("side");
  };
  const cancelIngredient = () => {
    setModalKind("side");
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
  return (
    <>
      <ModalIngredient
        resetCheckList={resetCheckList}
        ingredientList={ingredientList}
        changeChecked={changeChecked}
        isChecked={isChecked}
      />
      <div className="flex w-full">
        <button onClick={() => cancelIngredient()} className="w-3/6 px-4 py-4 bg-2e2e2e">
          <span className="text-white font-black text-3xl">추가안함</span>
        </button>
        <button onClick={() => addIngredient()} className="w-3/6 px-4 py-4 bg-bgwred">
          <span className="text-white font-black text-3xl">추가하기</span>
        </button>
      </div>
    </>
  );
};

export default ModalMenuIngredient;
