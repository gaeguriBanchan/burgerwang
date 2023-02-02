import React, { useState } from "react";
import ModalHeader from "./ModalHeader";
import DaumPostcode from "react-daum-postcode";

const ModalAddress = ({
  closeModal,
  setDeliAddress,
  selectedAddress,
  setSelectedAddress,
  detailAddress,
  setDetailAddress,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedJibunAddress, setSelectedJibunAddress] = useState("");
  const onSearchAddress = (data) => {
    setIsSelected(true);
    setSelectedAddress(data.roadAddress);
    setSelectedJibunAddress(data.jibunAddress);
  };
  const enterDetailAdress = () => {
    setDeliAddress(selectedAddress + " " + detailAddress);
    closeModal();
  };
  return (
    <>
      <ModalHeader title={"배달 받을 주소"} closeModal={closeModal} />
      <div className="max-h-[600px] overflow-visible">
        <DaumPostcode
          autoClose={false}
          onComplete={onSearchAddress}
          style={{ maxHeight: "350px" }}
        />
        {isSelected && (
          <div>
            <div className="bg-background px-4 py-4">
              <p className="flex items-center">
                <span className="inline-block w-14 py-1 mr-2 text-center text-white bg-8d8d8d rounded">
                  도로명
                </span>
                <span className="text-2xl">{selectedAddress}</span>
              </p>
              <p className="flex items-center mt-4">
                <span className="inline-block w-14 py-1 mr-2 text-center text-white bg-8d8d8d rounded">
                  지번
                </span>
                <span className="text-2xl">{selectedJibunAddress}</span>
              </p>
            </div>
            <div className="bg-white px-4 py-2">
              <input
                type="text"
                placeholder="상세 주소를 입력해주세요."
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                className="w-full text-xl h-16 bg-underline bg-no-repeat bg-bottom outline-none"
              />
            </div>
            <button
              onClick={() => enterDetailAdress()}
              className="w-full bg-e5e5e5 py-5 bg-737373 text-white text-2xl"
            >
              이 주소로 배달지 설정
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalAddress;
