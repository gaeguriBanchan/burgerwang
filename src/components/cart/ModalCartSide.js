import { useEffect, useState } from "react";
import { getMenuSide } from "../../api/menuApi";
import ModalCartSideItem from "./ModalCartSideItem";
import { useDispatch } from "react-redux";
import { changeOption } from "../../reducer/cartReducer";
const ModalCartSide = ({ menuSeq, optiontype, optioninfo, date, closeModal }) => {
  const dispatch = useDispatch();
  const [sideList, setSideList] = useState([]);
  const [selectItem, setSelectItem] = useState(optioninfo[0].sideOptSeq);
  const getSide = async () => {
    const res = await getMenuSide(menuSeq);
    setSideList(res.list);
  };
  const getSelectedItem = () => {
    for (let i = 0; i < sideList.length; i++) {
      if (sideList[i].sideOptSeq === selectItem) {
        return sideList[i];
      }
    }
  };
  const selectSide = () => {
    const res = getSelectedItem();
    dispatch(changeOption({ optiontype, date, res }));
    closeModal();
  };
  useEffect(() => {
    getSide();
  }, []);
  return (
    <>
      <div className="max-h-[530px] overflow-auto">
        <ul className="bg-background p-8 flex justify-between flex-wrap">
          {sideList.map((item) => (
            <ModalCartSideItem
              key={item.sideOptSeq}
              sideData={item}
              selectItem={selectItem}
              setSelectItem={setSelectItem}
            />
          ))}
        </ul>
      </div>
      <button onClick={() => selectSide()} className="w-full px-4 py-5 bg-bgwred">
        <span className="text-white font-black text-3xl">확인</span>
      </button>
    </>
  );
};

export default ModalCartSide;
