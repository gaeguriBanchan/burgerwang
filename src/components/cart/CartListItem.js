import React, { useEffect, useState } from "react";
import CartListItemOption from "./CartListItemOption";
import styles from "./Cart.module.css";
import DefaultImage from "../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { changeCount } from "../../reducer/cartReducer";

const CartListItem = ({ cartinfo, changeChecked }) => {
  const dispatch = useDispatch();
  const { cartSeq, count, name, event, side, drink, drink2, ingredient, totalprice, checked } =
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
    dispatch(changeCount({ cartSeq, orderCount }));
  }, [orderCount]);
  return (
    <li className="my-6 px-16 pt-14 pb-8 bg-white drop-shadow ">
      <div className="pb-10 flex justify-between items-center border-b border-ededed">
        <label htmlFor={cartSeq}>
          <input
            type="checkbox"
            name={cartSeq}
            id={cartSeq}
            checked={checked}
            className={"hidden " + styles.cartcheck}
            onChange={(e) => changeChecked(e.target.id)}
          />
          <div className={"relative grow mr-12 pl-12 " + styles.cartcheckbox}>
            <p className="text-4xl font-black">{name}</p>
            {event && <p className="text-xl mt-3 text-8d8d8d font-black">{event}</p>}
            <p className="text-3xl mt-3 font-black">{totalprice}원</p>
          </div>
        </label>
        <img src={DefaultImage} alt="상품 이미지" className="h-28" />
      </div>
      <ul className="py-8 border-b border-ededed border-dashed">
        {ingredient && ingredient.length > 0 && (
          <CartListItemOption optionname="재료추가" optioninfo={ingredient} />
        )}
        {side && side.length > 0 && <CartListItemOption optionname="사이드" optioninfo={side} />}
        {drink && drink.length > 0 && (
          <CartListItemOption
            optionname={drink2.length > 0 ? "음료1" : "음료"}
            optioninfo={drink}
          />
        )}
        {drink2 && drink2.length > 0 && (
          <CartListItemOption optionname="음료2" optioninfo={drink2} />
        )}
      </ul>
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
          <span className="text-3xl text-bgwred font-black">{totalprice * orderCount}원</span>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
