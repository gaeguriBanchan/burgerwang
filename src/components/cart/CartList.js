import { useEffect, useState } from "react";
import CartListItem from "./CartListItem";
import ChangeButton from "../base/ChangeButton";
import styles from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { removeCart } from "../../reducer/cartReducer";
const CartList = ({ cartList, checkList, setCheckList }) => {
  const dispatch = useDispatch();
  const [isCheckAll, setIsCheckAll] = useState(true);
  const checkCheckAll = () => {
    const checkAllBool = cartList.length === checkList.length;
    setIsCheckAll(checkAllBool);
  };
  const changeCheckAll = () => {
    let updateList = [];
    if (cartList.length > checkList.length) {
      updateList = cartList.map((item) => item.date);
    }
    setCheckList(updateList);
  };

  const changeChecked = (checkId) => {
    let updateList = [];
    if (checkList.includes(checkId)) {
      updateList = checkList.filter((id) => id !== checkId);
    } else {
      updateList = [...checkList].concat(checkId);
    }
    setCheckList(updateList);
  };
  const checkId = () => {
    const newCheckList = cartList.map((item) => item.date);
    setCheckList(newCheckList);
  };
  const isChecked = (id) => {
    const checkBool = checkList.includes(id);
    return checkBool;
  };
  const deleteCart = () => {
    dispatch(removeCart(checkList));
  };
  useEffect(() => {
    checkId();
  }, [cartList]);
  useEffect(() => {
    checkCheckAll();
  }, [checkList]);
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <label htmlFor="itemall">
          <input
            type="checkbox"
            name="selectall"
            id="itemall"
            className={"hidden " + styles.cartcheckall}
            checked={isCheckAll}
            onChange={changeCheckAll}
          />
          <span className={"text-xl text-8d8d8d font-black " + styles.cartcheckallbox}>
            전체선택
          </span>
        </label>
        <ChangeButton name={"삭제 (" + checkList.length + ")"} event={deleteCart} />
      </div>
      <ul>
        {cartList.map((item) => (
          <CartListItem
            key={item.date}
            cartinfo={item}
            changeChecked={changeChecked}
            isChecked={isChecked}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
