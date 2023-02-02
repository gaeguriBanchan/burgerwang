import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStore } from "../../api/commonApi";

const DeliInfoLine = () => {
  const [storeName, setStoreName] = useState("");
  const address = useSelector((state) => state.address);
  const { addressJibun, addressRoad, addressDetail } = address;
  const fullAddress = `${addressRoad ? addressRoad : addressJibun} ${addressDetail}`;
  const getStoreName = async () => {
    await getStore(fullAddress).then((res) => {
      const { name } = res.store;
      setStoreName(name);
    });
  };
  useEffect(() => {
    getStoreName();
  }, [address]);
  return (
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
        </div>
      </div>
    </div>
  );
};

export default DeliInfoLine;
