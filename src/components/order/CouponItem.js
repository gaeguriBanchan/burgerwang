import styles from "./Coupon.module.css";
import convertPrice from "../../utils/convertPrice";

const CouponItem = ({ couponData, selectedCoupon, setSelectedCoupon, disabled }) => {
  const { seq, name, availability, price } = couponData;
  const changeCoupon = () => {
    !disabled && selectedCoupon.couponSeq === seq
      ? setSelectedCoupon({ couponSeq: 0, couponPrice: 0 })
      : setSelectedCoupon({ couponSeq: seq, couponPrice: price });
  };
  return (
    availability !== disabled && (
      <li className="mb-2">
        <label htmlFor={seq}>
          <input
            type="checkbox"
            id={seq}
            checked={seq === selectedCoupon.couponSeq}
            onChange={() => changeCoupon()}
            className={styles.couponCheck}
            hidden
            disabled={disabled}
          />
          <div className={`${styles.coupon}`}>
            <div className="border-l-2 py-6 pl-8 border-dashed border-black">
              <span className={`text-2xl ${styles.couponText}`}>
                {name} - {convertPrice(price)}원 할인
              </span>
            </div>
            {disabled === true && (
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-white-100 z-20">
                <span className="text-bgwred text-3xl">이미 사용한 쿠폰입니다.</span>
              </div>
            )}
          </div>
        </label>
      </li>
    )
  );
};

export default CouponItem;
