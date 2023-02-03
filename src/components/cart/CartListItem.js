import { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount, removeOneCart } from "../../reducer/cartReducer";
import styles from "./Cart.module.css";
import convertPrice from "../../utils/convertPrice";
import ModalCart from "./ModalCart";
import Modal from "../base/Modal/Modal";
import CartListItemOption from "./CartListItemOption";

const CartListItem = ({ cartinfo, isChecked, changeChecked }) => {
  const dispatch = useDispatch();
  const { date, menuInfo, count, totalPrice, ingredientInfo, sideInfo, drinkInfo, drink2Info } =
    cartinfo;
  const removeCart = () => {
    dispatch(removeOneCart(date));
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [optionInfo, setOptionInfo] = useState({ optiontype: "", optioninfo: [] });
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const changeOptionHandler = ({ optiontype, optioninfo }) => {
    setOptionInfo({ optiontype, optioninfo });
    openModal();
  };
  return (
    <>
      <li className="relative my-6 px-16 pt-14 pb-8 bg-white ">
        <button
          className="absolute right-0 top-0 bg-icon-close bg-no-repeat bg-center w-24 h-24"
          onClick={() => removeCart()}
        ></button>
        <div className=" pb-10 flex justify-between items-center border-b border-ededed">
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
              <p className="text-3xl mt-3 font-black">{convertPrice(menuInfo.price)}원</p>
            </div>
          </label>
          {menuInfo.uri && (
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}/menu/${menuInfo.uri}`}
              alt={menuInfo.name}
              className="h-28"
            />
          )}
        </div>
        {(menuInfo.menuKind === "SET" || menuInfo.type === "SET") && (
          <ul className="py-8 border-b border-ededed border-dashed">
            {ingredientInfo && (
              <CartListItemOption
                optionname="재료추가"
                optiontype="ingredient"
                optioninfo={ingredientInfo}
                changeOptionHandler={changeOptionHandler}
              />
            )}
            {sideInfo && (
              <CartListItemOption
                optionname="사이드"
                optiontype="side"
                optioninfo={sideInfo}
                changeOptionHandler={changeOptionHandler}
              />
            )}
            {drinkInfo && (
              <CartListItemOption
                optionname={drink2Info ? "음료1" : "음료"}
                optiontype="drink1"
                optioninfo={drinkInfo}
                changeOptionHandler={changeOptionHandler}
              />
            )}
            {drink2Info && (
              <CartListItemOption
                optionname="음료2"
                optiontype="drink2"
                optioninfo={drink2Info}
                changeOptionHandler={changeOptionHandler}
              />
            )}
          </ul>
        )}
        <div className="py-8 flex items-center">
          <div className="w-3/6 flex items-center">
            <span className="w-32 text-xl font-black">수량</span>
            <div className="drop-shadow-md">
              <button
                onClick={() => dispatch(decreaseCount({ date }))}
                className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-l"
              >
                -
              </button>
              <input
                type="text"
                className="w-12 h-10 text-xl font-black text-center bg-white outline-none"
                value={count}
                readOnly
              />
              <button
                onClick={() => dispatch(increaseCount({ date }))}
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
      <Modal modalIsOpen={modalIsOpen}>
        <ModalCart
          closeModal={closeModal}
          optionInfo={optionInfo}
          menuSeq={menuInfo.seq}
          date={date}
        />
      </Modal>
    </>
  );
};

export default CartListItem;
