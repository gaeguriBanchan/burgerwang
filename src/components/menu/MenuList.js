import { useState } from "react";
import { useContext } from "react";
import { MenuContext } from "./context/MenuContext";
import Modal from "../base/Modal/Modal";
import ModalMenu from "./ModalMenu";
import MenuItem from "./MenuItem";
const MenuList = ({ menuList }) => {
  const { manageValue, manageCart } = useContext(MenuContext);
  const { setSelectedMenu, selectedMenuCate, setSelectedMenuCate } = manageValue;
  const { addCartInfo } = manageCart;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const selectMenuHandler = (menu, cate, seq) => {
    let isDone = false;
    setSelectedMenuCate(cate);
    setSelectedMenu(seq);
    const { count } = menu;
    if (count > 1) {
      openModal();
    } else {
      isDone = true;
      if (cate === "event") {
        addCartInfo({ type: "event", data: menu });
        return;
      }
      addCartInfo({ type: "menu", data: menu, isDone });
    }
  };
  const list = menuList.map((item) => (
    <MenuItem key={item.seq} menu={item} selectMenuHandler={selectMenuHandler} />
  ));
  return (
    <>
      <div className="grid grid-cols-4 gap-x-9 gap-y-28 my-20">{list}</div>
      <Modal modalIsOpen={modalIsOpen}>
        <ModalMenu
          closeModal={closeModal}
          menuCate={selectedMenuCate === "event" ? "burger" : selectedMenuCate}
        />
      </Modal>
    </>
  );
};

export default MenuList;
