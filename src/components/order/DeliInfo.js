import ChangeButton from "../base/ChangeButton";
import { useState } from "react";
const DeliInfo = () => {
  const [deliPhone, setDeliPhone] = useState("000-0000-0000");
  const [deliMessage, setDeliMessage] = useState("");

  return (
    <div className="w-full">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-deli bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">배달정보</span>
      </h3>

      <div className="px-16 pt-5 pb-16 bg-white drop-shadow">
        <div className="py-10 flex items-center border-b border-ededed">
          <span className="grow text-2xl">주소</span>
          <ChangeButton name="변경" />
        </div>
        <div className="w-full mt-8">
          <div className="w-full flex">
            <div className="w-3/6 h-16 flex items-center pr-32">
              <label className="inline-block w-32 text-2xl font-black">연락처</label>
              <input
                className="grow text-xl h-16 bg-underline bg-no-repeat bg-bottom outline-none"
                required
                type="text"
                value={deliPhone}
                onChange={() => setDeliPhone}
              />
            </div>
            <div className="w-3/6 h-16 flex items-center">
              <label className="inline-block w-32 text-2xl font-black">매장</label>
              <input
                type="text"
                className="grow px-4 h-16 bg-f7f7f7 text-xl text-bgwred outline-none"
                value={"버거왕 본점"}
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
                onChange={() => setDeliMessage}
              />
            </div>
            <div className="w-full mt-2">
              <span className="float-right text-black/40">0/50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliInfo;
