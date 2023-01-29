import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeCount } from "../../reducer/cartReducer";
import convertPrice from "../../utils/convertPrice";
import styles from "./Cart.module.css";
import CartListItemOption from "./CartListItemOption";
import DefaultImage from "../../assets/images/logo.png";

const CartListItem = ({ cartinfo, isChecked, changeChecked }) => {
  const dispatch = useDispatch();
  const { date, menuInfo, count, totalPrice, ingredientInfo, sideInfo, drinkInfo, drink2Info } =
    cartinfo;
  const [orderCount, setOrderCount] = useState(count);
  const plusOrderCount = () => {
    setOrderCount(orderCount + 1);
  };
  const minusOrderCount = () => {
    if (orderCount > 1) {
      setOrderCount(orderCount - 1);
    }
  };
  useEffect(() => {
    dispatch(changeCount({ date, orderCount }));
  }, [orderCount]);
  return (
    <li className="my-6 px-16 pt-14 pb-8 bg-white drop-shadow ">
      <div className="pb-10 flex justify-between items-center border-b border-ededed">
        <label htmlFor={date}>
          <input
            type="checkbox"
            name={date}
            id={date}
            checked={isChecked(date)}
            className={"hidden " + styles.cartcheck}
            onChange={() => changeChecked(date)}
          />
          <div className={"relative grow mr-12 pl-12 " + styles.cartcheckbox}>
            <p className="text-4xl font-black">{menuInfo.name}</p>
            {menuInfo.event && (
              <p className="text-xl mt-3 text-8d8d8d font-black">{menuInfo.event}</p>
            )}
            <p className="text-3xl mt-3 font-black">{totalPrice}원</p>
          </div>
        </label>
        <img src={DefaultImage} alt="상품 이미지" className="h-28" />
      </div>
      {!ingredientInfo && !sideInfo && !drinkInfo && !drink2Info ? (
        ""
      ) : (
        <ul className="py-8 border-b border-ededed border-dashed">
          {ingredientInfo && ingredientInfo.length > 0 && (
            <CartListItemOption
              optionname="재료추가"
              optiontype="ingredient"
              optioninfo={ingredientInfo}
            />
          )}
          {sideInfo && sideInfo.length > 0 && (
            <CartListItemOption optionname="사이드" optiontype="side" optioninfo={sideInfo} />
          )}
          {drinkInfo && drinkInfo.length > 0 && (
            <CartListItemOption
              optionname={drink2Info ? "음료1" : "음료"}
              optiontype="drink1"
              optioninfo={drinkInfo}
            />
          )}
          {drink2Info && drink2Info.length > 0 && (
            <CartListItemOption optionname="음료2" optiontype="drink2" optioninfo={drink2Info} />
          )}
        </ul>
      )}
      <div className="py-8 flex items-center">
        <div className="w-3/6 flex items-center">
          <span className="w-32 text-xl font-black">수량</span>
          <div className="drop-shadow-md">
            <button
              onClick={() => minusOrderCount()}
              className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-l"
            >
              -
            </button>
            <input
              type="text"
              className="w-12 h-10 text-xl font-black text-center bg-white outline-none"
              value={orderCount}
              readOnly
            />
            <button
              onClick={() => plusOrderCount()}
              className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-r"
            >
              +
            </button>
          </div>
        </div>
        <div className="w-3/6 flex justify-between items-center">
          <span className="text-xl font-black">합계금액</span>
          <span className="text-3xl text-bgwred font-black">
            {convertPrice(totalPrice * count)}원
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
