import { useEffect, useState } from "react";
import { getCoupon } from "../../../api/orderApi";

const useGetCoupon = (memberId) => {
  const [couponList, setCouponList] = useState([]);
  const getCouponList = async () => {
    await getCoupon(memberId).then((couponListData) => {
      const { coupon } = couponListData;
      setCouponList(coupon);
    });
  };
  useEffect(() => {
    getCouponList();
  }, [memberId]);

  return { couponList };
};

export default useGetCoupon;
