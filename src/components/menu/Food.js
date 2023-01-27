import { useState } from "react";
import Modal from "./Modal";
import ModalMenu from "./ModalMenu";
import { useNavigate } from "react-router";

const Food = ({ menu }) => {
  const { cate, seq, name, count, uri, detail, price, soldout } = menu;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //menu,side,drink
  const navigate = useNavigate();
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const selectMenuHandler = () => {
    if (count > 1) {
      openModal();
    } else {
      navigate("/cart");
    }
  };
  return (
    <>
      <div className="grid grid-rows-none" onClick={() => selectMenuHandler()}>
        <div className="relative">
          <img
            className="flex justify-center"
            src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/d33eb7d4-f31f-48a8-a921-5cbb9136f5f6.png"
            alt=""
          />
          {menu.new && (
            <span className="absolute left-0 top-0 w-12 h-9 bg-icon-new bg-no-repeat"></span>
          )}
          {menu.best && (
            <span className="absolute left-0 top-0 w-12 h-9 bg-icon-best bg-no-repeat"></span>
          )}
        </div>
        <span className="flex justify-center font-JUA text-xl">{name}</span>
        {detail && (
          <span className="flex justify-center text-center font-JUA text-xl text-8d8d8d">
            {detail}
          </span>
        )}
        <span className="flex justify-center font-JUA text-xl font-black text-bgwred">
          \{price}
          {count > 1 && "~"}
        </span>
      </div>
      <Modal modalIsOpen={modalIsOpen}>
        <ModalMenu
          closeModal={closeModal}
          menuCate={cate === "event" ? "burger" : cate}
          menuSeq={seq}
        />
      </Modal>
    </>
  );
};

export default Food;
