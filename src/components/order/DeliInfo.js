import { useState } from "react";
import Modal from "../base/Modal/Modal";
import ModalAddress from "../base/Modal/ModalAddress";
import ChangeButton from "../base/ChangeButton";
const DeliInfo = ({
  deliMessage,
  setDeliMessage,
  deliAddress,
  deliPhone,
  setDeliPhone,
  storeName,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="w-full">
        <h3 className="mb-4 pl-12 flex items-center bg-icon-deli bg-no-repeat bg-left">
          <span className="font-JUA text-2xl">배달정보</span>
        </h3>

        <div className="px-16 pt-5 pb-16 bg-white">
          <div className="py-10 flex items-center border-b border-ededed">
            <span className="grow text-2xl">
              {deliAddress === "" ? "배달 받을 주소를 입력해주세요." : deliAddress}
            </span>
            <ChangeButton event={openModal} name="변경" />
          </div>
          <div className="w-full mt-8">
            <div className="w-full flex">
              <div className="w-3/6 h-16 flex items-center pr-32">
                <label className="inline-block w-32 text-2xl font-black">연락처</label>
                <input
                  className="grow text-xl h-16 bg-underline bg-no-repeat bg-bottom outline-none"
                  required
                  type="text"
                  placeholder="연락처를 입력해주세요."
                  value={deliPhone}
                  onChange={(e) => setDeliPhone(e.target.value)}
                />
              </div>
              <div className="w-3/6 h-16 flex items-center">
                <label className="inline-block w-32 text-2xl font-black">매장</label>
                <input
                  type="text"
                  className="grow px-4 h-16 bg-f7f7f7 text-xl text-bgwred outline-none"
                  value={storeName}
                  placeholder="매장 정보가 없습니다."
                  readOnly
                />
              </div>
            </div>
            <div className="w-full mt-8">
              <div className="w-full h-16 flex items-center">
                <label className="w-32 text-2xl font-black">요청사항</label>
                <input
                  className="grow h-16 text-xl bg-underline bg-repeat-x bg-bottom outline-none"
                  type="text"
                  placeholder="요청사항을 입력하세요"
                  value={deliMessage}
                  onChange={(e) => setDeliMessage(e.target.value)}
                />
              </div>
              <div className="w-full mt-2">
                <span className="float-right text-black/40">0/50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal modalIsOpen={modalIsOpen}>
        <ModalAddress closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default DeliInfo;
