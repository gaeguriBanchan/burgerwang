import { useEffect } from "react";

const OptionModal = ({ modalIsOpen, closeModal }) => {
  useEffect(() => {
    modalIsOpen
      ? (document.body.style = `overflow: hidden`)
      : (document.body.style = `overflow: auto`);
  }, [modalIsOpen]);
  return (
    modalIsOpen && (
      <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center bg-black/50 z-10">
        <div className="w-564 max-h-full">
          <div className="flex justify-between items-center bg-white">
            <p className="px-10 py-5 font-JUA text-3xl">메뉴 선택</p>
            <button
              onClick={() => closeModal()}
              className="bg-icon-close bg-no-repeat bg-center w-24 h-24"
            ></button>
          </div>
        </div>
      </div>
    )
  );
};

export default OptionModal;
