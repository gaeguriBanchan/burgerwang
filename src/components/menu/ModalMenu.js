import { useState } from "react";
import ModalHeader from "./ModalHeader";
import ModalMenuList from "./ModalMenuList";
import ModalMenuIngredient from "./ModalMenuIngredient";
import ModalMenuSide from "./ModalMenuSide";
import ModalMenuDrink from "./ModalMenuDrink";

const ModalMenu = ({ closeModal }) => {
  const [modalKind, setModalKind] = useState("menu");
  const getModalTitle = () => {
    if (modalKind === "menu") {
      return "메뉴 선택";
    }
    if (modalKind === "ingredient") {
      return "재료 추가";
    }
    if (modalKind === "side") {
      return "사이드 변경";
    }
    if (modalKind === "drink") {
      return "드링크 변경";
    }
  };
  return (
    <>
      <ModalHeader title={getModalTitle()} closeModal={closeModal} />
      {modalKind === "menu" && <ModalMenuList setModalKind={setModalKind} />}
      {modalKind === "ingredient" && (
        <ModalMenuIngredient modalKind={modalKind} setModalKind={setModalKind} />
      )}
      {modalKind === "side" && <ModalMenuSide modalKind={modalKind} setModalKind={setModalKind} />}
      {modalKind === "drink" && <ModalMenuDrink modalKind={modalKind} />}
    </>
  );
};

export default ModalMenu;
