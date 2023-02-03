import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal/Modal";
import ModalAddress from "./Modal/ModalAddress";

const DeliInfoLine = () => {
  const address = useSelector((state) => state.address);
  const { storeName } = useSelector((state) => state.storeInfo);
  const { addressJibun, addressRoad, addressDetail } = address;
  const fullAddress = `${addressRoad ? addressRoad : addressJibun} ${addressDetail}`;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="bg-black py-2">
        <div className="container max-w-6xl px-5">
          <div className="flex justify-end gap-8">
            <p className="text-white flex items-center gap-2">
              <span className="block bg-icon-position-white w-4 h-4 bg-no-repeat bg-contain"></span>
              {(addressRoad || addressJibun) && addressDetail ? fullAddress : "주소 없음"}
            </p>
            <p className="text-white flex items-center gap-2">
              <span className="block bg-icon-store-white w-4 h-4 bg-no-repeat bg-contain"></span>
              {storeName ? storeName : "지점 없음"}
            </p>
            <button className="px-3 py-1 bg-white rounded" onClick={() => openModal()}>
              변경
            </button>
          </div>
        </div>
      </div>
      <Modal modalIsOpen={modalIsOpen}>
        <ModalAddress closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default DeliInfoLine;
