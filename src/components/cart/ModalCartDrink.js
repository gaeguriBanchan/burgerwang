import { useEffect, useState } from "react";
import { getMenuDrink } from "../../api/menuApi";
import ModalCartDrinkItem from "./ModalCartDrinkItem";
import { useDispatch } from "react-redux";
import { changeOption } from "../../reducer/cartReducer";
const ModalCartDrink = ({ menuSeq, optiontype, optioninfo, date, closeModal }) => {
  const dispatch = useDispatch();
  const [drinkList, setDrinkList] = useState([]);
  const [selectItem, setSelectItem] = useState();
  const getDrink = async () => {
    const res = await getMenuDrink(menuSeq);
    setDrinkList(res.list);
    getCurrentSelectedItem();
  };
  const getCurrentSelectedItem = () => {
    if (optioninfo[0].drinkOptSeq !== undefined) {
      setSelectItem(optioninfo[0].drinkOptSeq);
    }
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
    dispatch(changeOption({ optiontype, date, res }));
    closeModal();
  };
  useEffect(() => {
    getDrink();
  }, []);
  return (
    <>
      <div className="max-h-[530px] overflow-auto">
        <ul className="bg-background p-8 flex justify-between flex-wrap">
          {drinkList.map((item) => (
            <ModalCartDrinkItem
              key={item.drinkOptSeq}
              drinkData={item}
              selectItem={selectItem}
              setSelectItem={setSelectItem}
            />
          ))}
        </ul>
      </div>
      <button onClick={() => selectDrink()} className="w-full px-4 py-5 bg-bgwred">
        <span className="text-white font-black text-3xl">확인</span>
      </button>
    </>
  );
};

export default ModalCartDrink;
