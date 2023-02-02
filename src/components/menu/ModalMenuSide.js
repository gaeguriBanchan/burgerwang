import { useEffect, useState } from "react";
import { getMenuSide } from "../../api/menuApi";
import ModalMenuSideItem from "./ModalMenuSideItem";
import { MenuContext } from "./context/MenuContext";
import { useContext } from "react";
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
      <div className="max-h-[530px] overflow-auto">
        <ul className="bg-background p-8 flex justify-between flex-wrap">
          {sideList.map((item) => (
            <ModalMenuSideItem
              key={item.sideOptSeq}
              sideData={item}
              selectItem={selectItem}
              setSelectItem={setSelectItem}
            />
          ))}
        </ul>
      </div>
      <button onClick={() => selectSide()} className="w-full px-4 py-5 bg-bgwred">
        <span className="text-white font-black text-3xl">선택</span>
      </button>
    </>
  );
};

export default ModalMenuSide;
