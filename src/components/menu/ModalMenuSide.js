import { useEffect, useState } from "react";
import { getMenuSide } from "../../api/menuApi";
import { MenuContext } from "./context/MenuContext";
import { useContext } from "react";
import ModalSide from "../base/Modal/ModalSide";
const ModalMenuSide = ({ modalKind, setModalKind }) => {
  const [sideList, setSideList] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  const { manageValue, manageCart } = useContext(MenuContext);
  const { selectedMenu } = manageValue;
  const { addCartInfo } = manageCart;
  const getSide = async () => {
    const res = await getMenuSide(selectedMenu);
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
    const data = getSelectedItem();
    addCartInfo({ type: "side", data });
    setModalKind("drink");
  };
  useEffect(() => {
    modalKind === "side" && getSide();
  }, [modalKind]);
  return (
    <>
      <ModalSide sideList={sideList} selectItem={selectItem} setSelectItem={setSelectItem} />
      <button onClick={() => selectSide()} className="w-full px-4 py-5 bg-bgwred">
        <span className="text-white font-black text-3xl">선택</span>
      </button>
    </>
  );
};

export default ModalMenuSide;
