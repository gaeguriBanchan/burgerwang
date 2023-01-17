import { useState } from "react";
import CartListItem from "./CartListItem";
import ChangeButton from "../base/ChangeButton";
import styles from "./Cart.module.css";
const CartList = () => {
  const [isCheckAll, setIsCheckAll] = useState(true);
  const [checkList, setCheckList] = useState([
    { id: "0", price: 10000, checked: true },
    { id: "1", price: 11300, checked: true },
    { id: "2", price: 11800, checked: true },
    { id: "3", price: 12200, checked: true },
    { id: "4", price: 13200, checked: true },
    { id: "5", price: 14800, checked: true },
    { id: "6", price: 15000, checked: true },
  ]);
  const checkedItem = () => checkList.filter((item) => item.checked);
  const changeCheckAll = () => {
    const updateList =
      checkedItem().length === checkList.length
        ? checkList.map((item) => {
            item.checked = false;
            return item;
          })
        : checkList.map((item) => {
            item.checked = true;
            return item;
          });
    setCheckList(updateList);
    checkCheckAll();
  };
  const changeChecked = (checkId) => {
    const updateList = checkList.map((item) => {
      if (item.id === checkId) {
        item.checked = !item.checked;
      }
      return item;
    });
    setCheckList(updateList);
    checkCheckAll();
  };
  const checkCheckAll = () => {
    checkedItem().length === checkList.length ? setIsCheckAll(true) : setIsCheckAll(false);
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
        <ChangeButton name={"삭제 (" + checkedItem().length + ")"} />
      </div>
      <ul>
        {checkList.map((item) => (
          <CartListItem
            key={item.id}
            id={item.id}
            price={item.price}
            checked={item.checked}
            changeChecked={changeChecked}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
