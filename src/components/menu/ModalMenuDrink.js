import { useContext, useEffect, useState } from "react";
import { getMenuDrink } from "../../api/menuApi";
import { MenuContext } from "./context/MenuContext";
import ModalMenuDrinkItem from "./ModalMenuDrinkItem";

const ModalMenuDrink = ({ modalKind }) => {
  const [drinkList, setDrinkList] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  const [
    { selectedMenu, selectedMenuCate },
    setSelectedMenu,
    setSelectedMenuCate,
    addCartInfo,
    addToCart,
  ] = useContext(MenuContext);
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
    const res = getSelectedItem();
    addCartInfo("drink", res);
    addToCart();
  };
  useEffect(() => {
    modalKind === "drink" && getDrink();
  }, [modalKind]);
  return (
    <>
      <div className="max-h-[530px] overflow-auto">
        <ul className="bg-background p-8 flex justify-between flex-wrap">
          {drinkList.map((item) => (
            <ModalMenuDrinkItem
              key={item.drinkOptSeq}
              drinkData={item}
              selectItem={selectItem}
              setSelectItem={setSelectItem}
            />
          ))}
        </ul>
      </div>
      <button onClick={() => selectDrink()} className="w-full px-4 py-5 bg-bgwred">
        <span className="text-white font-black text-3xl">선택</span>
      </button>
    </>
  );
};

export default ModalMenuDrink;
