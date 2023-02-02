import { useEffect, useState } from "react";
import { getMenuSide } from "../../api/menuApi";
import { useDispatch } from "react-redux";
import { changeOption } from "../../reducer/cartReducer";
import ModalSide from "../base/Modal/ModalSide";
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
      <ModalSide sideList={sideList} selectItem={selectItem} setSelectItem={setSelectItem} />
      <button onClick={() => selectSide()} className="w-full px-4 py-5 bg-bgwred">
        <span className="text-white font-black text-3xl">확인</span>
      </button>
    </>
  );
};

export default ModalCartSide;
