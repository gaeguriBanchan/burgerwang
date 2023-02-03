import { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "../../reducer/cartReducer";
import convertPrice from "../../utils/convertPrice";
import Modal from "../base/Modal/Modal";
import ModalCart from "../cart/ModalCart";
import CartListItemOption from "../cart/CartListItemOption";

const OrderInfoItem = ({ order }) => {
  const dispatch = useDispatch();
  const { date, menuInfo, count, totalPrice, ingredientInfo, sideInfo, drinkInfo, drink2Info } =
    order;
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
      <li className="pt-14 border-b border-ededed">
        <div className="pb-10 border-b border-ededed">
          <p className="text-4xl font-black">{menuInfo.name}</p>
          {menuInfo.event && (
            <p className="text-xl mt-3 text-8d8d8d font-black">{menuInfo.event}</p>
          )}
          <p className="text-3xl mt-3 font-black">{convertPrice(menuInfo.price)}원</p>
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
              {convertPrice(count * totalPrice)}원
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

export default OrderInfoItem;
