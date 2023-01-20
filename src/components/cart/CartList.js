import { useState } from "react";
import CartListItem from "./CartListItem";
import ChangeButton from "../base/ChangeButton";
import styles from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { removeCart } from "../../reducer/cartReducer";
const CartList = ({ cartList, setCheckList, checkedItem }) => {
  const dispatch = useDispatch();
  const [isCheckAll, setIsCheckAll] = useState(true);
  const changeCheckAll = () => {
    const updateList =
      checkedItem().length === cartList.length
        ? cartList.map((item) => {
            item.checked = false;
            return item;
          })
        : cartList.map((item) => {
            item.checked = true;
            return item;
          });
    setCheckList(updateList);
    checkCheckAll();
  };
  const changeChecked = (checkId) => {
    const updateList = cartList.map((item) => {
      if (item.cartSeq === parseInt(checkId)) {
        item.checked = !item.checked;
      }
      return item;
    });
    setCheckList(updateList);
    checkCheckAll();
  };
  const checkCheckAll = () => {
    checkedItem().length === cartList.length ? setIsCheckAll(true) : setIsCheckAll(false);
  };
  const deleteCart = () => {
    const key = checkedItem().map((item) => item.cartSeq);
    // const updateList = cartList.filter((item) => !key.includes(item.cartSeq));
    // setCheckList(updateList);
    dispatch(removeCart(key));
    changeCheckAll();
  };
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
        <ChangeButton name={"삭제 (" + checkedItem().length + ")"} event={deleteCart} />
      </div>
      <ul>
        {cartList.map((item) => (
          <CartListItem key={item.cartSeq} cartinfo={item} changeChecked={changeChecked} />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
