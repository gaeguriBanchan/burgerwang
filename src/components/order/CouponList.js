import CouponItem from "./CouponItem";

const CouponList = ({ couponList, selectedCoupon, setSelectedCoupon, disabled }) => {
  return (
    <>
      <p className="pb-4 font-JUA text-2xl">
        {disabled === true ? "사용 불가능한 쿠폰" : "사용 가능한 쿠폰"}
      </p>
      <ul>
        {couponList &&
          couponList.map((coupon) => (
            <CouponItem
              key={coupon.seq}
              couponData={coupon}
              selectedCoupon={selectedCoupon}
              setSelectedCoupon={setSelectedCoupon}
              disabled={disabled}
            />
          ))}
      </ul>
    </>
  );
};

export default CouponList;
