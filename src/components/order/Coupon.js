import useGetCoupon from "./hooks/useGetCoupon";
import CouponList from "./CouponList";

const Coupon = ({ selectedCoupon, setSelectedCoupon }) => {
  const memberId = 56;
  const { couponList } = useGetCoupon(memberId);

  return (
    <div className="w-full my-10">
      <div className="flex justify-between">
        <h3 className="mb-2 pl-12 flex items-center bg-icon-coupon bg-no-repeat bg-left">
          <span className="font-JUA text-2xl">쿠폰 선택</span>
        </h3>
      </div>
      <div className="px-16 pt-16 pb-12 bg-white">
        <CouponList
          couponList={couponList}
          selectedCoupon={selectedCoupon}
          setSelectedCoupon={setSelectedCoupon}
          disabled={false}
        />
        <CouponList
          couponList={couponList}
          selectedCoupon={selectedCoupon}
          setSelectedCoupon={setSelectedCoupon}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default Coupon;
