import { useEffect, useState } from "react";
import { getMenuDrink } from "../../api/menuApi";
import { useDispatch } from "react-redux";
import { changeOption } from "../../reducer/cartReducer";
import ModalDrink from "../base/Modal/ModalDrink";
const ModalCartDrink = ({ menuSeq, optiontype, optioninfo, date, closeModal }) => {
  const dispatch = useDispatch();
  const [drinkList, setDrinkList] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
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
      <ModalDrink drinkList={drinkList} selectItem={selectItem} setSelectItem={setSelectItem} />
      <button onClick={() => selectDrink()} className="w-full px-4 py-5 bg-bgwred">
        <span className="text-white font-black text-3xl">확인</span>
      </button>
    </>
  );
};

export default ModalCartDrink;
