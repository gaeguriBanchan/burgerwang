import React, { useState } from "react";
import CartListItemOption from "./CartListItemOption";
import styles from "./Cart.module.css";
import DefaultImage from "../../assets/images/logo.png";

const CartListItem = ({ id, price, checked, changeChecked }) => {
  const [orderCount, setOrderCount] = useState(1);
  const plusOrderCount = () => setOrderCount(orderCount + 1);
  const minusOrderCount = () => (orderCount === 1 ? "" : setOrderCount(orderCount - 1));
  return (
    <li className="my-6 px-16 pt-14 pb-8 bg-white drop-shadow ">
      <div className="pb-10 flex justify-between items-center border-b border-ededed">
        <label htmlFor={id}>
          <input
            type="checkbox"
            name={id}
            id={id}
            checked={checked}
            className={"hidden " + styles.cartcheck}
            onChange={(e) => changeChecked(e.target.id)}
          />
          <div className={"relative grow mr-12 pl-12 " + styles.cartcheckbox}>
            <p className="text-4xl font-black">햄버거명</p>
            <p className="text-xl mt-3 text-8d8d8d font-black">구성품 리스트 없으면 안 보임</p>
            <p className="text-3xl mt-3 font-black">{price}</p>
          </div>
        </label>
        <img src={DefaultImage} alt="상품 이미지" className="h-28" />
      </div>
      <ul className="py-8 border-b border-ededed border-dashed">
        <CartListItemOption />
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
          <span className="text-3xl text-bgwred font-black">{price * orderCount}</span>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
