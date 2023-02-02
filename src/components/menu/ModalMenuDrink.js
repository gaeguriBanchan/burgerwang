import { useContext, useEffect, useState } from "react";
import { getMenuDrink } from "../../api/menuApi";
import ModalDrink from "../base/Modal/ModalDrink";
import { MenuContext } from "./context/MenuContext";

const ModalMenuDrink = ({ modalKind }) => {
  const [drinkList, setDrinkList] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  const { manageValue, manageCart } = useContext(MenuContext);
  const { selectedMenu } = manageValue;
  const { addCartInfo } = manageCart;
  const getDrink = async () => {
    const res = await getMenuDrink(selectedMenu);
    setDrinkList(res.list);
  };
  const getSelectedItem = () => {
    for (let i = 0; i < drinkList.length; i++) {
      if (drinkList[i].drinkOptSeq === selectItem) {
        return drinkList[i];
      }
    }
  };
  const selectDrink = () => {
    const isDone = true;
    const data = getSelectedItem();
    addCartInfo({ type: "drink", data, isDone });
  };
  useEffect(() => {
    modalKind === "drink" && getDrink();
  }, [modalKind]);
  return (
    <>
      <ModalDrink drinkList={drinkList} selectItem={selectItem} setSelectItem={setSelectItem} />
      <button onClick={() => selectDrink()} className="w-full px-4 py-5 bg-bgwred">
        <span className="text-white font-black text-3xl">선택</span>
      </button>
    </>
  );
};

export default ModalMenuDrink;
