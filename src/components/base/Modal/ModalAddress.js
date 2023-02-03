/** @format */

import React, { useState } from "react";
import ModalHeader from "./ModalHeader";
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from "react-redux";
import { getStore } from "../../../api/commonApi";
import { modifyAdress } from "../../../reducer/addressReducer";
import { modifyStoreInfo } from "../../../reducer/storeInfoReducer";
const ModalAddress = ({ closeModal }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedJibunAddress, setSelectedJibunAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const onSearchAddress = (addressData) => {
    setIsSelected(true);
    const { roadAddress, jibunAddress } = addressData;
    setSelectedAddress(roadAddress);
    setSelectedJibunAddress(jibunAddress);
  };
  const dispatch = useDispatch();
  const enterDetailAdress = async () => {
    const fullAddress = `${
      selectedAddress ? selectedAddress : selectedJibunAddress
    } ${detailAddress}`;
    await getStore(fullAddress)
      .then((storeData) => {
        const { status, message, store } = storeData;
        if (status) {
          const { seq, name } = store;
          dispatch(
            modifyAdress({
              addressJibun: selectedJibunAddress,
              addressRoad: selectedAddress,
              addressDetail: detailAddress,
            })
          );
          dispatch(modifyStoreInfo({ storeSeq: seq, storeName: name }));
          closeModal();
        } else {
          alert(message);
        }
      })
      .catch((err) => {
        alert("에러가 발생하였습니다. 다시 시도해 주세요.");
      });
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
              className={`w-full bg-e5e5e5 py-5 ${
                detailAddress.length > 0 ? "bg-bgwred" : "bg-737373"
              } text-white text-2xl`}
              disabled={detailAddress.length > 0 ? false : true}
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
