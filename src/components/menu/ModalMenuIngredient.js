import { useContext, useEffect } from "react";
import { useState } from "react";
import { getMenuIngredient } from "../../api/menuApi";
import { MenuContext } from "./context/MenuContext";
import ModalMenuIngredientItem from "./ModalMenuIngredientItem";
const ModalMenuIngredient = ({ modalKind, setModalKind }) => {
  const [ingredientList, setIngeidientList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [
    { selectedMenu, selectedMenuCate },
    setSelectedMenu,
    setSelectedMenuCate,
    addCartInfo,
    addToCart,
  ] = useContext(MenuContext);
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
  const addIngredient = () => {
    const res = getSelectedList();
    addCartInfo("ingredient", res);
    setModalKind("side");
  };
  const cancelIngredient = () => {
    setModalKind("side");
  };
  useEffect(() => {
    modalKind === "ingredient" && getIngredient();
  }, [modalKind]);
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
  return (
    <>
      <div className="max-h-[530px] overflow-auto">
        <ul className="bg-background p-8">
          {ingredientList.map((item) => (
            <ModalMenuIngredientItem
              key={item.ingredirentSeq}
              ingredientData={item}
              changeChecked={changeChecked}
              isChecked={isChecked}
            />
          ))}
        </ul>
      </div>
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
