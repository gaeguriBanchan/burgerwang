import { useEffect } from "react";

const Modal = ({ modalIsOpen, children }) => {
  useEffect(() => {
    modalIsOpen
      ? (document.body.style = `overflow: hidden`)
      : (document.body.style = `overflow: auto`);
    return () => (document.body.style = `overflow: auto`);
  }, [modalIsOpen]);
  return (
    modalIsOpen && (
      <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center bg-black/50 z-10">
        <div className="w-[564px] max-h-[95%]">{children}</div>
      </div>
    )
  );
};

export default Modal;
